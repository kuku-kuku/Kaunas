import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

// Grid of large link cards to related pages: [{ to, title, text }]
export default function LinkCards({ links, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <ul className={`grid gap-px overflow-hidden rounded-lg border border-line bg-line ${links.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {links.map((link, i) => (
        <Reveal as="li" key={link.to} delay={i * 0.08} className="bg-surface">
          <Link to={link.to} className="group flex h-full min-h-[14rem] flex-col p-7 transition-colors hover:bg-surface-raised md:p-9">
            <span className="font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
            <Heading className="mt-8 font-display text-display-sm font-extrabold uppercase text-fg transition-colors group-hover:text-accent-bright">
              {link.title}
            </Heading>
            <p className="mt-3 text-fg-muted">{link.text}</p>
            <span aria-hidden="true" className="mt-auto pt-8 text-xl text-fg-muted transition-all group-hover:translate-x-1 group-hover:text-white">
              &rarr;
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
