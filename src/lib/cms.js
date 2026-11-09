// src/lib/cms.js

const NEWS_ENDPOINT = "news-items";

function getCmsBase() {
  const a = import.meta.env.VITE_STRAPI_URL; // ✅ tavo Vercel env
  const b = import.meta.env.VITE_CMS_URL;    // fallback jei kur dar naudojai

  const base = (a || b || "").trim();
  if (!base) return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function cmsUrl(path) {
  const base = getCmsBase();
  if (!path || !base) return null;
  if (path.startsWith("http")) return path;
  return `${base}${path}`;
}

function normalizeNewsItem(n) {
  if (!n) return null;

  // Strapi v5: coverImage ir gallery dažnai turi url tiesiai
  // bet kartais gali būti { data: { attributes: { url } } } (v4 stilius)
  const pickUrl = (obj) =>
    obj?.url ||
    obj?.data?.attributes?.url ||
    obj?.data?.url ||
    null;

  // Strapi stores the original plus resized "formats" (thumbnail/small/medium/large).
  // Keep size info and the formats so pages can load a fitting size instead of the original.
  const media = (obj) => {
    const m = obj?.data?.attributes ?? obj?.data ?? obj;
    const url = pickUrl(obj);
    if (!url) return null;
    const formats = Object.values(m?.formats || {})
      .filter((f) => f?.url && f?.width)
      .map((f) => ({ url: f.url, width: f.width }));
    if (m?.width) formats.push({ url, width: m.width });
    formats.sort((a, b) => a.width - b.width);
    return { url, width: m?.width || null, height: m?.height || null, formats };
  };

  const cover = media(n.coverImage);
  const gallery = Array.isArray(n.gallery) ? n.gallery.map(media).filter(Boolean) : [];

  return {
    id: n.id,
    documentId: n.documentId,
    title: n.title,
    slug: n.slug,
    date: n.date,
    excerpt: n.excerpt || "",
    content: n.content || [],

    badgeTitle: n.badgeTitle || null,
    highlight: n.highlight || null,           // ← PRIDĖTA!
    highlightQuote: n.highlightQuote || null,

    coverImage: cover,
    gallery,

    createdAt: n.createdAt,
    updatedAt: n.updatedAt,
    publishedAt: n.publishedAt,
  };
}

async function fetchJson(url) {
  const res = await fetch(url);
  const ct = res.headers.get("content-type") || "";

  // Jei kažkur pataiko į Vercel HTML (<!DOCTYPE ...), pagausim iškart
  if (!ct.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `CMS returned non-JSON (${res.status}). First chars: ${text.slice(0, 80)}`
    );
  }

  if (!res.ok) {
    const json = await res.json().catch(() => null);
    throw new Error(`CMS error ${res.status}: ${json?.error?.message || "Unknown"}`);
  }

  return res.json();
}

// srcset string for a CMS image ({ formats: [{ url, width }] }), or undefined
export function cmsSrcSet(image) {
  if (!image?.formats?.length) return undefined;
  return image.formats.map((f) => `${cmsUrl(f.url)} ${f.width}w`).join(', ');
}

export async function fetchNewsList() {
  const base = getCmsBase();
  if (!base) throw new Error("Missing CMS base URL. Set VITE_STRAPI_URL on Vercel.");

  const url = `${base}/api/${NEWS_ENDPOINT}?populate=*&pagination[pageSize]=200`;
  const json = await fetchJson(url);
  return (json.data || []).map(normalizeNewsItem).filter(Boolean);
}

export async function fetchNewsBySlug(slug) {
  const base = getCmsBase();
  if (!base) throw new Error("Missing CMS base URL. Set VITE_STRAPI_URL on Vercel.");

  const url =
    `${base}/api/${NEWS_ENDPOINT}` +
    `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=*`;

  const json = await fetchJson(url);
  const first = Array.isArray(json.data) ? json.data[0] : null;
  return normalizeNewsItem(first);
}