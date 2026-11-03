// Home page copy. Every claim here comes from existing site copy, coach bios or published
// news articles; anything not yet confirmed is marked TODO(content) and listed in TODO-content.md.

export const hero = {
  eyebrow: 'Futbolo akademija · Kaunas',
  title: ['Nuo svajonės', 'iki realybės'],
  lead: 'Profesionalios treniruotės vaikams, kuriose ugdome ne tik futbolininkus, bet ir stiprias asmenybes.',
  cta: 'Registracija į bandomąją treniruotę',
  secondary: { to: '/apie', label: 'Apie akademiją' },
  image: '/hero.jpg',
  imageAlt: 'FA Kaunas auklėtiniai rungtynėse',
  // TODO(content): 10–20 s training loop (see TODO-content.md → Photo & video shoot).
  // Set to { mp4: '/video/hero.mp4', webm: '/video/hero.webm' } and the hero plays it
  // muted on loop, with `image` as the poster.
  video: null,
  // Short proof points shown along the bottom of the hero (desktop)
  facts: [
    { value: 'UEFA A · B · C', label: 'Licencijuoti treneriai' },
    { value: 'LT · LV · PL', label: 'Turnyrai trijose šalyse' },
    { value: 'LFF', label: 'Auklėtiniai talentų centre' },
  ],
};

export const philosophy = {
  index: '01',
  eyebrow: 'Filosofija',
  title: 'Ugdome žaidėjus ir asmenybes',
  body: [
    'Akademijos prioritetas – ne tik sportiniai rezultatai, bet ir vaikų asmenybės augimas.',
    'Treniruočių metu treneriai vengia griežtų nurodymų – vietoj to užduoda atvirus klausimus, kurie skatina vaikus mąstyti, priimti savarankiškus sprendimus ir ugdyti pasitikėjimą savimi bei kūrybiškumą.',
  ],
  // `methodology` from groups.js is rendered as the pillars list
};

export const pathway = {
  index: '02',
  eyebrow: 'Ugdymo kelias',
  title: 'Kelias nuo pirmosios treniruotės',
  intro: 'Kiekviena amžiaus grupė turi savo vyr. trenerį ir aiškų kitą žingsnį.',
  link: { to: '/akademija/ugdymo-programa', label: 'Visa ugdymo programa' },
  // Final step after the academy groups. Source: news article "Net penki FA KAUNAS auklėtiniai –
  // LFF regioniniame talentų centre!" (2025-09-09).
  next: {
    title: 'LFF talentų centras',
    text: 'Geriausi auklėtiniai kviečiami į LFF regioninį talentų centrą. 2025 m. ten pateko penki FA Kaunas žaidėjai.',
    to: '/naujienos/lff-talentu-centras',
  },
};

export const coachesSection = {
  index: '03',
  eyebrow: 'Treneriai',
  title: 'Treneriai su profesionalo patirtimi',
  intro: 'Buvę profesionalūs futbolininkai ir jaunimo rinktinių nariai, turintys UEFA licencijas.',
  link: { to: '/akademija/treneriai', label: 'Visi treneriai' },
};

export const results = {
  index: '04',
  eyebrow: 'Rezultatai',
  title: 'Augame su kiekvienu turnyru',
  // Each highlight links to the published article it comes from.
  // TODO(content): alumni who moved to pro clubs / national youth teams.
  highlights: [
    {
      value: '5',
      label: 'auklėtiniai pateko į LFF regioninį talentų centrą',
      meta: '2025 · 2015–2016 m. gim.',
      to: '/naujienos/lff-talentu-centras',
    },
    {
      value: '2',
      suffix: 'vieta',
      label: '„Kaunas Football Fest“ tarptautiniame turnyre (FA Kaunas Blue)',
      meta: '2025 · 2015 m. gim.',
      to: '/naujienos/kaunas-football-fest-2025',
    },
    {
      value: 'U11',
      label: '„Kick Off CUP“ Lenkijoje – prieš Europos klubų akademijas',
      meta: '2025',
      to: '/naujienos/kick-off-2025',
    },
  ],
};

export const facilities = {
  index: '05',
  eyebrow: 'Bazė',
  title: 'Treniruojamės Kaune',
  // TODO(content): confirm that Žeimenos g. 165 (the contacts address) is where training happens
  intro: 'Treniruotės vyksta Žeimenos gatvėje, Kaune.',
  // TODO(content): pitch names, surfaces, winter venue, parking (TODO-content.md → Facilities)
  photos: [
    { label: 'Treniruočių aikštė', aspect: 'aspect-[16/10]' },
    { label: 'Žiemos treniruočių vieta', aspect: 'aspect-[4/5]' },
  ],
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=%C5%BDeimenos+g.+165%2C+Kaunas',
};

// TODO(content): 3–6 real quotes with parent's first name + initial, child's group and
// permission to publish. The section stays hidden while this list is empty.
export const testimonials = [];

export const newsSection = {
  index: '06',
  eyebrow: 'Naujienos',
  title: 'Iš aikštės',
  link: { to: '/naujienos', label: 'Visos naujienos' },
};

export const trialSection = {
  eyebrow: 'Bandomoji treniruotė',
  title: 'Pirmas žingsnis – viena treniruotė',
  // TODO(content): confirm response time and whether the first session is free.
  steps: [
    { title: 'Registracija', text: 'Užpildykite trumpą formą – vaiko vardas, gimimo metai ir jūsų kontaktai.' },
    { title: 'Susisieksime', text: 'Treneris susisieks su jumis ir pasiūlys tinkamą grupę bei laiką.' },
    { title: 'Treniruotė', text: 'Atvykite į treniruotę – vaikas susipažins su treneriu ir komanda.' },
  ],
};
