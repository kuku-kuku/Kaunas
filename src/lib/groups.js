import { groups } from '../content';

// Groups are stored oldest-first and split into A/B teams. Pages show them as birth-year
// bands, youngest first, with all teams of a band together.
//   { id: '2015-2016', label: '2015–2016', years: [2015, 2016], teams: [...] }
export function getGroupBands() {
  const byYears = new Map();
  for (const g of groups) {
    const years = g.metai.split('/').map((y) => Number(y.trim()));
    const id = `${years[0]}-${years[years.length - 1]}`;
    const band = byYears.get(id) ?? {
      id,
      label: `${years[0]}–${years[years.length - 1]}`,
      years,
      teams: [],
    };
    band.teams.push(g);
    byYears.set(id, band);
  }
  return [...byYears.values()].reverse();
}

export function findBandForYear(year) {
  return getGroupBands().find((band) => band.years.includes(year)) ?? null;
}
