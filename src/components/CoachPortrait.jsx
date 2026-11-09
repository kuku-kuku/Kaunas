import React from 'react';
import { ResponsiveImage } from './ui';

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

// Roster-style portrait: club-navy backdrop, the coach's initials in the top-left corner, and the
// cut-out photo (transparent background, cropped tight at the source) standing in front.
// Without a portrait the backdrop and initials show alone.
// Decorative by default (alt=""), because the coach's name is always printed next to it.
// The initials are drawn with CSS `content`, so they stay decorative for screen readers and
// contrast checks.
export default function CoachPortrait({ coach, sizes, alt = '', initialsClassName = 'text-4xl' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-surface-navy via-surface-navy to-surface-raised">
      {/* Soft club-blue glow behind the head */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[12%] h-2/3 w-[120%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        data-initials={initials(coach.vardas)}
        className={`absolute left-4 top-3 font-display font-extrabold uppercase leading-none text-white/25 transition-colors duration-500 before:content-[attr(data-initials)] group-hover:text-accent-bright/60 ${initialsClassName}`}
      />
      {coach.portrait && (
        <ResponsiveImage
          src={coach.portrait}
          alt={alt}
          sizes={sizes}
          className="absolute inset-0 block h-full w-full"
          imgClassName="h-full w-full origin-bottom object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
          // Cut-outs are transparent: no placeholder colour behind them
          style={{ backgroundColor: 'transparent' }}
        />
      )}
    </div>
  );
}
