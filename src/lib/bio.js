// Turns a coach's free-text bio (coaches.js → aprasymas) into blocks the page can lay out:
//
//   "UEFA A licencija"              → dropped (the licence is shown as a badge)
//   "Some sentence…"                → { type: 'text', text }
//   "Žaidėjo karjera:\n- A\n- B"    → { type: 'list', title: 'Žaidėjo karjera', items: ['A', 'B'] }
//
// Keeping the source as plain text means bios stay easy to edit by hand.
export function parseBio(text) {
  const blocks = [];
  for (const chunk of text.split(/\n\s*\n/)) {
    const lines = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    if (lines.length === 1 && /licencij/i.test(lines[0]) && lines[0].length < 40) continue;

    const isItem = (l) => l.startsWith('- ');
    if (lines.slice(1).every(isItem) && lines.length > 1 && lines[0].endsWith(':')) {
      blocks.push({ type: 'list', title: lines[0].slice(0, -1), items: lines.slice(1).map((l) => l.slice(2)) });
    } else if (lines.every(isItem)) {
      blocks.push({ type: 'list', title: null, items: lines.map((l) => l.slice(2)) });
    } else {
      blocks.push({ type: 'text', text: lines.join(' ') });
    }
  }
  return blocks;
}
