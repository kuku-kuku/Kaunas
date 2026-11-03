import React from 'react';

// Renders content strings with **bold** markers (used in content/lt/*.js).
export default function RichText({ text, strongClassName = 'font-semibold text-fg' }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className={strongClassName}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}
