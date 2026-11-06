import React from 'react';

// Clearly marked stand-in for photography we still need to shoot (see TODO-content.md).
// Swap for <ResponsiveImage> once the photo exists.
export default function PhotoPlaceholder({ label, aspect = 'aspect-[4/3]', className = '' }) {
  return (
    <figure
      className={`relative ${aspect} overflow-hidden rounded-lg border border-dashed border-white/20 bg-surface-raised ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09] [background-image:repeating-linear-gradient(135deg,#fff_0,#fff_1px,transparent_1px,transparent_14px)]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1.5 p-5">
        <span className="font-display text-lg font-extrabold uppercase leading-tight text-fg-muted">{label}</span>
        <span className="text-eyebrow uppercase text-fg-subtle">Nuotrauka ruošiama</span>
      </figcaption>
    </figure>
  );
}
