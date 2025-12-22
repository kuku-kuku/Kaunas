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

  const coverUrl = pickUrl(n.coverImage);
  const gallery = Array.isArray(n.gallery)
    ? n.gallery.map((g) => ({ url: pickUrl(g) })).filter((x) => x.url)
    : [];

  return {
    id: n.id,
    documentId: n.documentId,
    title: n.title,
    slug: n.slug,
    date: n.date,
    excerpt: n.excerpt || "",
    content: n.content || [],

    badgeTitle: n.badgeTitle || null,
    highlightQuote: n.highlightQuote || null,

    coverImage: coverUrl ? { url: coverUrl } : null,
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

export async function fetchNewsList() {
  const base = getCmsBase();
  if (!base) throw new Error("Missing CMS base URL. Set VITE_STRAPI_URL on Vercel.");

  const url = `${base}/api/${NEWS_ENDPOINT}?populate=*`;
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
