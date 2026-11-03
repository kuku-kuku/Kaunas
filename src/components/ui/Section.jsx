import React from 'react';
import Container from './Container';

const spacing = {
  default: 'py-section',
  compact: 'py-section-sm',
  none: '',
};

const tones = {
  base: 'bg-surface',
  raised: 'bg-surface-raised',
  navy: 'bg-surface-navy',
  transparent: '',
};

// Page section with the standard vertical rhythm. Pass `labelledBy` with the id of the
// section heading so screen readers announce it as a named region.
export default function Section({
  id,
  labelledBy,
  size = 'default',
  tone = 'base',
  divider = false,
  contained = true,
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative ${spacing[size]} ${tones[tone]} ${divider ? 'border-t border-line' : ''} ${className}`}
      {...rest}
    >
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  );
}
