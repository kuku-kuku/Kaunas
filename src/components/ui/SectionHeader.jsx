import React from 'react';
import Reveal from './Reveal';

const titleSizes = {
  xl: 'text-display-xl',
  lg: 'text-display-lg',
  md: 'text-display-md',
  sm: 'text-display-sm',
};

// Eyebrow (optional index number) + display headline + optional intro.
// `level` sets the heading tag so pages keep a correct h1 → h2 → h3 order.
export default function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  intro,
  level = 2,
  size = 'md',
  align = 'left',
  className = '',
  animate = true,
  children,
}) {
  const Heading = `h${level}`;
  // Above-the-fold headers (animate={false}) render visible in the prerendered HTML instead
  // of waiting for JavaScript to fade them in; that wait was most of the mobile LCP time.
  const Wrapper = animate ? Reveal : 'div';
  const centered = align === 'center';

  return (
    <Wrapper className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {(index || eyebrow) && (
        <p className={`section-label mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          {index && <span className="font-mono text-accent-bright">{index}</span>}
          {index && eyebrow && <span aria-hidden="true" className="h-px w-8 bg-line-strong" />}
          {eyebrow}
        </p>
      )}
      <Heading id={id} className={`text-display ${titleSizes[size]} text-fg`}>
        {title}
      </Heading>
      {intro && <p className="mt-6 text-lead text-fg-muted max-w-prose">{intro}</p>}
      {children}
    </Wrapper>
  );
}
