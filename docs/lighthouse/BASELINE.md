# Lighthouse baseline

Measured before the elite-academy redesign, on branch `redesign/elite-academy` at the Phase 0 commit
(same UI as `main` @ `815d113`).

- Date: 2026-11-03
- Tool: Lighthouse 12 CLI, headless Chrome, default throttling (mobile = simulated Moto G4 / slow 4G)
- Target: `vite preview` of the production build on `localhost:4173` (no CDN, no HTTP compression,
  so real Vercel numbers will be somewhat better on transfer size)
- Raw JSON reports are kept locally in `docs/lighthouse/baseline/` and git-ignored (6 MB)

| Page | Device | Perf | A11y | Best pr. | SEO | LCP | Page weight |
|---|---|---|---|---|---|---|---|
| `/` | mobile | **72** | 90 | 100 | 91 | 5.0 s | 625 KiB |
| `/` | desktop | 97 | 90 | 100 | 91 | 1.2 s | 625 KiB |
| `/akademija/treneriai` | mobile | **82** | 90 | 100 | 91 | 3.7 s | 345 KiB |
| `/akademija/treneriai` | desktop | 98 | 90 | 100 | 91 | 1.2 s | 345 KiB |
| `/kontaktai` | mobile | **70** | 87 | 96 | 91 | 5.2 s | 755 KiB |
| `/kontaktai` | desktop | 99 | 82 | 100 | 91 | 0.9 s | 1,020 KiB |
| `/naujienos` | mobile | **66** | 90 | 96 | 91 | 8.3 s | 1,894 KiB |
| `/naujienos` | desktop | 95 | 83 | 96 | 91 | 1.5 s | 1,894 KiB |

Targets: Performance 90+, Accessibility 95+, SEO 95+ (on mobile).

## Main failing audits (home, mobile)

- Render-blocking resources, ~2.0 s: Google Fonts `@import` inside the CSS
- LCP 5.0 s: hero JPEG not preloaded, not responsive, not AVIF/WebP
- Unused JavaScript ~80 KiB: single 504 kB bundle, no route-level code splitting
- `color-contrast`: `text-white/20`–`/40` body and label text
- `link-name`: icon-only social links have no accessible name
- `unsized-images`: images without width/height
- `meta-description`: none on any page

## After Phase 2 (fonts, tokens, code splitting, image pipeline)

Mobile only, same setup as above.

| Page | Perf | A11y | Best pr. | SEO | LCP | Page weight |
|---|---|---|---|---|---|---|
| `/` | 87 (+15) | 100 | 100 | 100 | 3.6 s | 395 KiB |
| `/akademija/treneriai` | 89 (+7) | 100 | 100 | 100 | 3.3 s | 361 KiB |
| `/kontaktai` | 89 (+19) | 96 | 96 | 100 | 3.3 s | 801 KiB |
| `/naujienos` | 76 (+10) | 100 | 96 | 100 | 5.8 s | 1,136 KiB |

Still open: render-blocking CSS (~0.9 s), logo `<img>` without width/height, CMS news covers
served at full size from Cloudinary (`/naujienos`, ~590 KiB).

## After Phase 4 (home page rebuild)

Home page only; the page now has nine sections instead of three.

| Device | Perf | A11y | Best pr. | SEO | FCP | LCP |
|---|---|---|---|---|---|---|
| mobile | 88–89 | 100 | 96 | 100 | 2.1 s | 3.5 s |
| desktop | 99 | 100 | 96 | 100 | – | 0.9 s |

Best practices 96 = console error from the local CMS URL not being reachable during the test.
Remaining mobile gap to 90+: the app renders client-side, so nothing paints until the
327 kB main bundle has run. Options for Phase 11: prerender pages at build time, and/or
switch framer-motion to `LazyMotion` to shrink the bundle.
