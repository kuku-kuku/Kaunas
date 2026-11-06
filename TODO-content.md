# Content & media needed

Real content the academy needs to supply. Until it arrives the site shows clearly marked
placeholders ("Nuotrauka ruošiama", initials tiles, "susisiekus su treneriu") or leaves the
section out. Nothing here has been invented. Tick items off as they arrive.

Each item names the file where the answer goes, so whoever updates the site knows where to look.
All copy lives under `src/content/lt/`.

## Most important first

1. **Trial registration inbox**: check that the Vercel env var `CONTACT_TO` is set to the inbox that
   should receive registrations, then send one real test registration from the deployed site
   (see "Trial registration flow").
2. **Training schedule per group**: days, times, place. Parents look for this first (see "Programs").
3. **Coach portraits**: five photos in the same style as Remigijus Mikalainis' (see "Photo & video shoot").
4. **Privacy policy text**: the forms link to it; the page is a placeholder and hidden from search engines.
5. **Confirm the home page numbers** (see "Academy facts to confirm").

## Brand
- [ ] Logo as vector (SVG, or AI/PDF). The site uses a 268×256 PNG converted from the old file.
- [ ] Official brand colours (hex). The site uses royal blue `#1a5cff` as its accent, but the team kits in
      photos are sky blue. Which one is the club colour? → `tailwind.config.js` (accent tokens)
- [ ] Brand or crest rules (clear space, white/dark versions), if any

## Photo & video shoot
- [ ] **Hero video**: 10–20 s loop, landscape 16:9 plus a vertical 9:16 crop, no audio needed. Training
      intensity, ball close-ups, a team huddle. At least 1080p. → `home.js` → `hero.video`
- [ ] Hero stills: 3–5 landscape photos, at least 2400 px wide, with space for text on the left or bottom.
      The current `hero*.jpg` are 1920×756, which is too short for a full-screen hero on phones.
- [ ] **Coach portraits** for Gabrielius Zagurskas, Marius Činikas, Lukas Sipavičius, Tomas Macelis and Ernestas
      Bernota: same background, light and framing, waist-up, at least 1200 px tall. Use Remigijus Mikalainis'
      photo (club training top, plain light wall, arms crossed) as the reference. → `coaches.js` → `portrait`
- [ ] Facilities: each pitch, the winter/indoor venue, changing rooms, the entrance. → `facilities.js` → `venues.items`
      and `home.js` → `facilities.photos`
- [ ] One action photo per age group (2015–2016, 2017–2018, 2019–2021)
- [ ] Group / team photo for the About page
- [ ] Designed share image (1200×630). `public/og-default.jpg` is a temporary crop of a hero photo with the logo.

After adding photos to `public/`, run `npm run images` to create the optimised versions.

## Academy facts to confirm
- [ ] Home page counters: players ("100+") and age groups ("4", although the site lists 3 birth-year groups with
      4 teams). The founding year (2022) is on the About page; the coach count updates automatically. → `stats.js`
- [ ] Other numbers worth showing: tournaments per season, international tournaments, national youth team call-ups
- [ ] Alumni who moved to pro clubs or national youth teams (name, club, year, permission to publish) → `home.js` → `results`
- [ ] Trophies / podium finishes to highlight

## Programs (per age group) → `groups.js`
For each group: training days and times, place, season length, main focus, monthly fee (or "on request"),
max group size. Optional: U-label (e.g. U11).
- [ ] 2015–2016 (teams A and B)
- [ ] 2017–2018
- [ ] 2019–2021
- [ ] Is there a group for children born after 2021? Separate goalkeeper sessions?

## Coaches → `coaches.js`
For each coach: confirm role, licence and licence year, a 2–3 sentence bio and career highlights.
Ages were removed from the site because they went out of date; add them back only if wanted.
- [ ] Gabrielius Zagurskas
- [ ] Marius Činikas
- [ ] Lukas Sipavičius
- [ ] Tomas Macelis
- [ ] Ernestas Bernota
- [ ] Remigijus Mikalainis (goalkeeper coach, joined 2025-12): licence and a fuller bio. His profile currently uses
      the facts from the news article announcing his arrival.

## Methodology / pathway → `home.js`, `programs.js`
- [ ] The development pathway in your words: what each stage focuses on, youngest group to oldest
- [ ] Where players go after FA Kaunas (partner clubs, LFF centres)
- [ ] Training principles beyond the existing five, if any

## Facilities → `facilities.js`
- [ ] Confirm training happens at Žeimenos g. 165. The site says so, based on the contacts address.
- [ ] Pitch names and surfaces (natural / artificial, size, floodlights)
- [ ] Winter training venue
- [ ] Parking and public transport tips for parents → `location.directions`
- [ ] Exact map coordinates of the pitch → `site.js` → `address.geo`

## Parent testimonials → `home.js` → `testimonials`
3–6 short quotes (1–3 sentences), each with the parent's first name + surname initial, the child's age group,
and written permission to publish. The home page section stays hidden until at least one is added.
- [ ] Testimonial 1
- [ ] Testimonial 2
- [ ] Testimonial 3

## Trial registration flow
- [ ] Which inbox should receive trial registrations and contact messages? Both use the Vercel env var `CONTACT_TO`.
      If it isn't set they go to `info@fakaunas.lt`, while the site shows `administracija@fakaunas.lt`.
- [ ] Send one real test registration from the deployed site to confirm Resend delivers it
- [ ] What happens after a parent applies: who calls, how quickly, what to bring to the first session → `trial.js`
- [ ] Is the first trial session free? If yes, say so on the registration page → `trial.js`

## Legal
- [ ] Privacy policy text → `src/pages/PrivatumoPolitika.jsx` (then remove `noindex` there)
- [ ] Company details for the footer: legal name, company code (`306181717` is the 1.2% support recipient code;
      confirm it is the company code too), VAT number if any
- [ ] Photo consent policy for minors shown on the site and in news articles

## Partners → `partners.js`
- [ ] Logos as SVG or transparent PNG for Unomeda, Medus, Camelia, Brandus
- [ ] Any new partners or sponsor tiers

## News archive → `news.js`, `articles.js`
- [ ] „Ąžuolo rudens taurė“ article: the old page said 14/10/2025 and the news list said 2025-10-27. The site uses
      2025-10-27 in both places; correct both files if that is wrong.
- [ ] New articles go into the CMS (Strapi). The 23 older ones live in `articles.js`.
