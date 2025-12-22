// src/lib/cms.js
const CMS_URL = import.meta.env.VITE_CMS_URL;
const NEWS_ENDPOINT = "news-items"; // ✅ TAVO ENDPOINTAS

export function cmsUrl(path) {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${CMS_URL}${path}`;
}

export async function fetchNewsList() {
  const res = await fetch(`${CMS_URL}/api/${NEWS_ENDPOINT}?populate=*`);
  if (!res.ok) throw new Error(`Failed to fetch news list: ${res.status}`);
  const json = await res.json();
  return json.data || [];
}

export async function fetchNewsBySlug(slug) {
  const res = await fetch(
    `${CMS_URL}/api/${NEWS_ENDPOINT}?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  if (!res.ok) throw new Error(`Failed to fetch news by slug: ${res.status}`);
  const json = await res.json();
  return json.data && json.data.length ? json.data[0] : null;
}
