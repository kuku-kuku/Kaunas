import { useEffect, useMemo, useState } from 'react';
import { fetchNewsList, cmsUrl, cmsSrcSet } from './cms';
import { staticNews } from '../content';

function sortByDateDesc(arr) {
  return [...arr].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function formatNewsDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('lt-LT', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export function newsHref(item) {
  return item.slug ? `/naujienos/${item.slug}` : item.link;
}

// All news, newest first: CMS items merged with the static archive. If the CMS can't be
// reached the static items still render and `cmsError` is true.
export function useNews() {
  const [cmsItems, setCmsItems] = useState(null);
  const [cmsError, setCmsError] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setCmsError(false);
        const list = await fetchNewsList();
        const normalized = (list || []).map((n) => {
          const cover = n.coverImage?.url ? cmsUrl(n.coverImage.url) : null;
          return { id: n.id, date: n.date, title: n.title, summary: n.excerpt || '', slug: n.slug, image: cover, imageSrcSet: cmsSrcSet(n.coverImage), source: 'cms' };
        });
        if (alive) setCmsItems(normalized);
      } catch (e) {
        console.error(e);
        if (!alive) return;
        setCmsError(true);
        setCmsItems([]);
      }
    }
    load();
    return () => { alive = false; };
  }, []);

  const items = useMemo(() => {
    const cms = Array.isArray(cmsItems) && !cmsError ? cmsItems : [];
    const merged = [...cms, ...staticNews.map((n) => ({ ...n, source: 'static' }))];
    const seen = new Set();
    const deduped = merged.filter((n) => {
      const key = n.slug ? `cms:${n.slug}` : `static:${n.link}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    return sortByDateDesc(deduped);
  }, [cmsItems, cmsError]);

  return { items, cmsError, loading: cmsItems === null };
}
