// Main navigation. `sub` items render as dropdown (desktop) / indented links (mobile).

export const mainNav = [
  {
    to: '/apie',
    label: 'Apie mus',
    sub: [
      { to: '/apie/tikslai', label: 'Tikslai / Vizija' },
      { to: '/apie/etikos-kodeksas', label: 'Etikos kodeksas' },
    ],
  },
  {
    to: '/akademija',
    label: 'Akademija',
    sub: [
      { to: '/akademija/treneriai', label: 'Treneriai' },
      { to: '/akademija/ugdymo-programa', label: 'Ugdymo programa' },
      { to: '/akademija/baze', label: 'Bazė ir technologijos' },
    ],
  },
  { to: '/prisijunk', label: 'Prisijunk' },
  { to: '/naujienos', label: 'Naujienos' },
  { to: '/kontaktai', label: 'Kontaktai' },
];

export const footerNav = [
  { to: '/apie', label: 'Apie mus' },
  { to: '/akademija/treneriai', label: 'Treneriai' },
  { to: '/akademija/ugdymo-programa', label: 'Ugdymo programa' },
  { to: '/akademija/baze', label: 'Bazė ir technologijos' },
  { to: '/naujienos', label: 'Naujienos' },
  { to: '/kontaktai', label: 'Kontaktai' },
  { to: '/prisijunk', label: 'Parama ir rėmimas' },
];

// Primary call to action shown in every header variant and trial CTA band.
export const trialCta = {
  to: '/registracija',
  label: 'Registracija',
  longLabel: 'Registracija į treniruotę',
};

export const legalNav = [
  { to: '/privatumo-politika', label: 'Privatumo politika' },
  { to: '/apie/etikos-kodeksas', label: 'Etikos kodeksas' },
];
