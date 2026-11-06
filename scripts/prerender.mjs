// Build step 3 of 3 (see package.json "build"): turns the client build into static HTML.
//
//   1. dist/index.html (client build, empty #root) is kept as dist/spa.html – the fallback
//      Vercel serves for routes that are not prerendered (CMS-only news articles). With
//      cleanUrls on, Vercel serves it at /spa, so vercel.json must rewrite to /spa, not /spa.html.
//   2. Every route in entry-server's `prerenderRoutes` is rendered to HTML with its own
//      <head> (title, description, Open Graph, JSON-LD) and written to dist/<route>.html.
//      The browser then hydrates it (src/main.jsx).
//   3. sitemap.xml and robots.txt are generated. CMS articles are added to the sitemap when
//      the CMS is reachable at build time.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
// Must match site.url in src/content/lt/site.js (www is the primary domain)
const SITE = 'https://www.fakaunas.lt';
const NOINDEX = new Set(['/privatumo-politika']);

const { render, prerenderRoutes, articleDates } = await import(
  pathToFileURL(path.join(ROOT, 'dist-ssr', 'entry-server.mjs')).href
);

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
await fs.writeFile(path.join(DIST, 'spa.html'), template);

// Default <title> and data-rh meta tags in index.html are replaced by each page's own
const baseHead = template
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta\s+data-rh="true"[\s\S]*?\/>\s*/g, '');

function outFile(route) {
  return route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${route.slice(1)}.html`);
}

let count = 0;
for (const route of prerenderRoutes) {
  const { html, helmet } = await render(route);
  // prioritizeSeoTags (see Seo.jsx) moves description, canonical and og:* into `priority`
  const head = ['title', 'priority', 'meta', 'link', 'script'].map((k) => helmet[k].toString()).join('\n    ');
  const page = baseHead
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (page === baseHead) throw new Error(`Nothing injected for ${route}`);
  const file = outFile(route);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, page);
  count++;
}

// ── CMS articles (sitemap only) ──
async function cmsSlugs() {
  const base = (process.env.VITE_STRAPI_URL || process.env.VITE_CMS_URL || '').replace(/\/$/, '');
  if (!base) return [];
  try {
    const res = await fetch(`${base}/api/news-items?fields[0]=slug&fields[1]=date&pagination[pageSize]=200`, {
      signal: AbortSignal.timeout(5000),
    });
    const json = await res.json();
    return (json.data || []).filter((n) => n.slug).map((n) => ({ loc: `/naujienos/${n.slug}`, lastmod: n.date }));
  } catch (err) {
    console.warn(`  CMS not reachable for sitemap (${err.message}); listing prerendered pages only`);
    return [];
  }
}

const today = new Date().toISOString().slice(0, 10);
const entries = [
  ...prerenderRoutes.filter((r) => !NOINDEX.has(r)).map((r) => ({ loc: r, lastmod: articleDates[r] || today })),
  ...(await cmsSlugs()),
];
const seen = new Set();
const urls = entries
  .filter((e) => (seen.has(e.loc) ? false : seen.add(e.loc)))
  .map((e) => `  <url><loc>${SITE}${e.loc === '/' ? '/' : e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`)
  .join('\n');
await fs.writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
await fs.writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

await fs.rm(path.join(ROOT, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerendered ${count} pages, sitemap with ${seen.size} URLs`);
