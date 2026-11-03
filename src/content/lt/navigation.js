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
  { to: '/naujienos', label: 'Naujienos' },
  { to: '/kontaktai', label: 'Kontaktai' },
  { to: '/prisijunk', label: 'Parama ir rėmimas' },
];
