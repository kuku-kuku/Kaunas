import React from 'react';
import { ResponsiveImage } from './ui';

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

// Coach photo, or a typographic initials tile until a real portrait is shot.
// Decorative by default (alt=""), because the coach's name is always printed next to it.
export default function CoachPortrait({ coach, sizes, alt = '', initialsClassName = 'text-[4.5rem]' }) {
  if (coach.portrait) {
    return (
      <ResponsiveImage
        src={coach.portrait}
        alt={alt}
        sizes={sizes}
        className="block h-full w-full"
        imgClassName="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] lg:grayscale lg:group-hover:grayscale-0"
      />
    );
  }
  return (
    <div aria-hidden="true" className="flex h-full w-full items-end bg-gradient-to-br from-surface-navy to-surface-raised p-5">
      <span
        className={`font-display font-extrabold uppercase leading-none text-white/10 transition-colors duration-500 group-hover:text-accent/40 ${initialsClassName}`}
      >
        {initials(coach.vardas)}
      </span>
    </div>
  );
}
