# Content & media needed

Things the redesign needs from the academy. Anything not supplied ships as a clearly marked
placeholder. Nothing here will be invented. Tick items off as they arrive.

## Brand
- [ ] Logo as vector (SVG or AI/PDF). The current `public/logo.png` is really an AVIF file
      with a `.png` name, so some browsers and social previews can't show it.
- [ ] Official brand colors (hex). Right now the site assumes blue `#1a5cff`.
- [ ] Any brand guidelines or club crest rules (clear space, white/dark versions)

## Photo & video shoot
- [ ] **Hero video**: 10–20 s loop, landscape 16:9 and vertical 9:16 crops, no audio needed.
      Training intensity, ball close-ups, a team huddle. At least 1080p source.
- [ ] Hero stills: 3–5 landscape, at least 2400 px wide, with room for text on the left or bottom.
      Current `hero*.jpg` are only 1920×756, which is too short for a full-screen hero on phones.
- [ ] One action photo per age group (2015/16, 2017/18, 2019–21)
- [ ] Coach portraits: same background, lighting and framing for everyone, waist-up, at least 1200 px tall.
      Use Remigijus Mikalainis' photo (club training top, plain light wall, arms crossed) as the reference.
      Needed for: Gabrielius Zagurskas, Marius Činikas, Lukas Sipavičius, Tomas Macelis, Ernestas Bernota.
      Until then the site shows an initials tile for them.
- [ ] Facilities: each pitch, the gym or indoor hall, changing rooms, the entrance at Žeimenos g. 165
- [ ] Group / team photo for the "about" and pathway sections
- [ ] Open Graph share image, 1200×630 (we can design it once we have a good photo)

## Academy facts to confirm
- [ ] Home page stats: number of players (currently "100+"), coaches (currently "5", but 6 are named),
      age groups (currently "4"), founding year (currently 2022). Please confirm or correct.
- [ ] Other numbers worth showing: tournaments per season, international tournaments, players selected
      for the LFF regional talent centre (news says 5 in 2025), any national youth team call-ups
- [ ] Alumni who moved to pro clubs or national youth teams (name, club, year, permission to publish)
- [ ] Trophies / podium finishes to highlight

## Programs (per age group)
For each group: birth years, U-label, training days and times, location/pitch, season length,
main focus, head coach and assistants, monthly fee (or "on request"), max group size.
- [ ] 2015 / 2016 (A and B)
- [ ] 2017 / 2018
- [ ] 2019 / 2020 / 2021
- [ ] Is there a group for children younger than 2021? Goalkeeper sessions?

## Coaches
For each coach: role, licence (UEFA A/B/C, LFF D), licence year, short bio (2–3 sentences),
career highlights. Ages were removed from the site (they went stale); add back only if wanted.
- [ ] Gabrielius Zagurskas
- [ ] Marius Činikas
- [ ] Lukas Sipavičius
- [ ] Tomas Macelis
- [ ] Ernestas Bernota
- [ ] Remigijus Mikalainis (goalkeeper coach, joined 2025-12): licence, fuller bio. Profile is live with the facts from the news article.

## Methodology / pathway
- [ ] The development pathway in your words: what each stage focuses on, from the youngest group to the oldest
- [ ] Where players go after FA Kaunas (partner clubs, LFF centres)
- [ ] Training principles beyond the existing five, if any

## Facilities
- [ ] Confirm training happens at Žeimenos g. 165 (the home page says so, based on the contacts address)
- [ ] Names and surfaces of the pitches (natural / artificial, size, floodlights)
- [ ] Winter training venue
- [ ] Parking and public transport notes for parents

## Parent testimonials
3–6 short quotes (1–3 sentences), each with the parent's first name + surname initial,
the child's age group, and written permission to publish.
- [ ] Testimonial 1
- [ ] Testimonial 2
- [ ] Testimonial 3

The home page testimonials section stays hidden until at least one is added to `src/content/lt/home.js`.

## Trial registration flow
- [ ] Which email inbox should receive trial requests? (the form currently sends to `CONTACT_TO`, default `info@fakaunas.lt`)
- [ ] What happens after a parent applies: who calls them, how fast, what to bring to the first session
- [ ] Is the first trial session free?

## Legal
- [ ] Privacy policy text (the contact form mentions one, but it doesn't exist yet)
- [ ] Company details for the footer (legal name, company code `306181717`?, VAT if any)
- [ ] Photo consent policy for minors shown on the site

## Partners
- [ ] Logos as SVG or transparent PNG for Unomeda, Medus, Camelia, Brandus
- [ ] Any new partners or sponsor tiers
