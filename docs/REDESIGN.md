# FA Kaunas redesign: summary

Branch `redesign/elite-academy`: 15 commits on top of `main` (`815d113`).
Goal: take the first dark redesign to the level of a premium European academy site, mobile first,
without inventing facts. All work was checked at 320, 375, 1024, 1440 and 1720 px.

## Results at a glance

Lighthouse, mobile, before → after. "Before" is `main`; "after" is the production build served locally
with Vercel-like settings. Real CDN numbers will differ, so re-check with PageSpeed Insights after deploying.

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Home `/` | 72 → **91** | 90 → **100** | 100 → 96* | 91 → **100** |
| Coaches `/akademija/treneriai` | 82 → **94** | 90 → **100** | 100 → **100** | 91 → **100** |
| Contacts `/kontaktai` | 70 → **95** | 87 → **100** | 96 → **100** | 91 → **100** |
| News `/naujienos` | 66 → **90** | 90 → **100** | 96 → 96* | 91 → **100** |
| Article `/naujienos/kick-off-2025` | – → **88** | – → **100** | – → 96* | – → **100** |
| Registration `/registracija` | new → **95** | **100** | **100** | **100** |

Desktop: 100 performance on all of these pages.
\* 96 only because the local CMS address was unreachable during the test (console error).
Full tables: [`docs/lighthouse/BASELINE.md`](lighthouse/BASELINE.md).

Other numbers:
- Main JS bundle 504 kB → 339 kB. Every page except Home now loads as its own chunk.
- Photos are served as AVIF at 320–1920 px instead of the original JPEGs (up to 3.5 MB each).
  News thumbnails now average 12 kB, and full-width phone images 82 kB.

## What changed, by section

**Foundation**
- Design tokens in `tailwind.config.js`: colours with WCAG AA contrast notes, a fluid display type scale,
  page gutter / section spacing, motion easing. Old `academy.*` colours still work.
- Barlow Condensed (headlines) + Inter (body), self-hosted, including Lithuanian characters.
- Shared building blocks in `src/components/ui/`: Container, Section, SectionHeader, PageHeader, Button,
  Reveal, ResponsiveImage, RichText, LinkCards, SocialLinks, StatCounter, MapEmbed, PhotoPlaceholder.
- All copy in `src/content/lt/` (see "Editing content"), ready for an English version later.

**Navigation and footer**
- Top bar stays pinned and condenses on scroll; the vertical side rail appears only on very wide
  screens (≥1680 px), where it no longer covers text.
- Submenus work with the keyboard; phone menu is a proper dialog (focus kept inside, Escape closes).
- "Registracija" button in every header variant. Footer with legal links and contact block.

**Home**: cinematic hero (video-ready), philosophy, development pathway by birth year ending in the LFF talent
centre, coach cards, results (counters + highlights linked to their news articles), facilities with map,
latest news, trial call-to-action, partners. Testimonials stay hidden until real ones exist.

**Akademija**: hub page with the personality-first approach and links to:
- **Ugdymo programa**: "which group?" birth-year finder, every team with head coach, assistants and licences,
  a register button per group.
- **Treneriai**: full profile per coach with licence, summary and career lists, deep links (`#marius-cinikas`).
  Remigijus Mikalainis added.
- **Bazė ir technologijos** (new): location and map, venue photo slots, Stats4Sport / VEO / LiveTagPRO.

**Trial registration** (`/registracija`, new): child, birth year (shows the matching group), parent, phone,
optional email and note, consent. Validation after leaving a field, focus on the first error, success
screen with next steps. Emails arrive formatted, with reply-to set to the parent.

**Contacts**: same form system, click-to-load map, contact details.

**News**
- 23 hand-written article pages replaced by one template with the same URLs. All text was carried over
  and verified word for word; emoji were removed.
- Coach comments are styled quotes; photo galleries open in an accessible lightbox.
- News list: featured story plus a grid, compact rows on phones.

**Apie mus / Tikslai / Etikos kodeksas / Prisijunk**: rebuilt on the same components:
- Apie mus: core value "Pagarba" featured.
- Etikos kodeksas: jump links for children, parents and coaches.
- Prisijunk: 1.2% steps with a copy button for the code.

**Accessibility**
- Skip link and visible focus outlines.
- AA text contrast.
- Labelled form fields with linked errors.
- 44 px tap targets.
- Correct heading order on every page.
- Reduced-motion support (framer-motion `MotionConfig` plus CSS).

**SEO**
- Every page is prerendered to HTML at build time with its own title, description, canonical URL and
  Open Graph tags.
- Structured data: SportsOrganization/SportsClub with address and contacts on the home page,
  NewsArticle on articles.
- `sitemap.xml` and `robots.txt` are generated on each build.
- 404 page.

## Editing content

| What | File |
|---|---|
| Phone, email, address, socials, map | `src/content/lt/site.js` |
| Menus, "Registracija" target | `navigation.js` |
| Home page copy, hero video, results, facilities, testimonials | `home.js` |
| Counters | `stats.js` |
| Coaches (bios, licences, portraits) | `coaches.js` |
| Age groups, training principles | `groups.js` |
| Programs page copy | `programs.js` |
| Trial registration page copy | `trial.js` |
| Facilities, technology | `facilities.js` |
| About, goals, ethics code, Akademija hub | `about.js` |
| 1.2% support and sponsorship | `support.js` |
| Partners | `partners.js` |
| News list (archive) / archive article texts | `news.js` / `articles.js` (new articles go into Strapi) |

New photos: put them in `public/`, run `npm run images`, then commit `public/optimized/` and
`src/generated/images.json`. What the academy still needs to send is in [`TODO-content.md`](../TODO-content.md).

## Build and deploy

- `npm run build` = client build → server bundle → `scripts/prerender.mjs` (writes `dist/<page>.html`,
  `spa.html`, `sitemap.xml`, `robots.txt`). `npm run lint` must pass before committing.
- `vercel.json` now uses `cleanUrls` and falls back to `/spa.html` (an empty shell) for routes that are
  not prerendered, such as articles added in the CMS after the last deploy.
- New dev dependencies: `eslint` (+ react, hooks, jsx-a11y plugins), `globals`, `sharp`. No new runtime
  dependencies.

## Known issues and follow-ups

**Before merging**
1. **Not yet deployed.** The build and routing were tested with a local Vercel-like server only. Deploy a
   preview and check:
   - direct loads of `/apie` and `/naujienos/kick-off-2025`
   - a CMS-only article
   - `/sitemap.xml`
   - one real trial registration email (`CONTACT_TO` env var)
2. **Mobile performance target:** pages scored 88–95 locally. The article page (88) is just under the
   90 target, because its large cover photo is the main element.

**Content gaps (shown as placeholders):** coach portraits (5), venue photos, training schedules, testimonials,
privacy policy text, confirmed counters. See `TODO-content.md`.

**Cleanup worth doing**
- The old Airtable news admin is still in the repo but unused: `api/news.js`, `src/pages/AdminNews.jsx`,
  `src/pages/NewsSingle.jsx`. It is excluded from lint. The local `.env` contains `VITE_ADMIN_KEY`; delete
  the code and rotate that key.
- `api/mail.js` allows any origin unless `ALLOWED_ORIGIN` is set, and has no rate limit (a honeypot field
  is the only spam protection). Set `ALLOWED_ORIGIN=https://fakaunas.lt` and consider a simple rate limit.
- Optimised images (26 MB) are committed to git. Fine for now; if the photo library grows, generate them
  during the build or move images to the CMS/CDN.
- Both `package-lock.json` (Railway/nixpacks) and `pnpm-lock.yaml` (Vercel) are kept in sync. Consider using
  one package manager.
- Vite 4 and ESLint 9 are older majors; an upgrade can come later.
- Build output prints framer-motion `"use client"` warnings; they are harmless.

**Design notes**
- The home headline slides in on load, so without JavaScript it stays hidden. The text is in the HTML for
  search engines.
- The active menu item shows a static underline (the sliding underline needed a heavier animation bundle).
