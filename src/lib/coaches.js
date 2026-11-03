import { coaches } from '../content';

// Licence order, most senior first. Coaches without a published licence go last.
const LICENCE_RANK = ['UEFA PRO', 'UEFA A', 'UEFA B', 'UEFA C', 'LFF D'];

const rank = (coach) => {
  const i = LICENCE_RANK.indexOf(coach.licencija);
  return i === -1 ? LICENCE_RANK.length : i;
};

export function getCoachesByLicence() {
  return [...coaches].sort((a, b) => rank(a) - rank(b));
}
