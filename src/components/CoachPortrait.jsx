import React from 'react';
import { ResponsiveImage } from './ui';

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

// Roster-style portrait: club-navy backdrop with the coach's initials, and the cut-out photo
// (transparent background) standing in front. Without a portrait the backdrop shows alone.
// Decorative by default (alt=""), because the coach's name is always printed next to it.
export default function CoachPortrait({ coach, sizes, alt = '', initialsClassName = 'text-[4.5rem]' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-surface-navy via-surface-navy to-surface-raised">
      {/* Soft club-blue glow behind the head */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[18%] h-2/3 w-[120%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-[6%] text-center font-display font-extrabold uppercase leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-accent/30 ${initialsClassName}`}
      >
        {initials(coach.vardas)}
      </span>
      {coach.portrait && (
        <ResponsiveImage
          src={coach.portrait}
          alt={alt}
          sizes={sizes}
          className="absolute inset-0 block h-full w-full"
          imgClassName="h-full w-full origin-bottom scale-[1.12] object-cover object-top transition-transform duration-700 group-hover:scale-[1.16]"
          // Cut-outs are transparent: no placeholder colour behind them
          style={{ backgroundColor: 'transparent' }}
        />
      )}
    </div>
  );
}
