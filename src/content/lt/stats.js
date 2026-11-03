import { coaches } from './coaches';

// Home page counters.
// TODO(content): values with `placeholder: true` are unconfirmed, see TODO-content.md →
// "Academy facts to confirm". The coach count follows coaches.js. The founding year
// (Nov 2022) is stated on the About page.

export const stats = [
  { value: 100, suffix: '+', label: 'Auklėtinių', placeholder: true },
  { value: coaches.length, suffix: '', label: 'Trenerių' },
  { value: 4, suffix: '', label: 'Amžiaus grupės', placeholder: true },
  { value: 2022, suffix: '', label: 'Metai įkurta', animate: false },
];
