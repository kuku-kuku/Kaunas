import React from 'react';
import { Link } from 'react-router-dom';
import { coaches, coachesSection } from '../../content';
import { Section, SectionHeader, Reveal, ResponsiveImage } from '../ui';

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

// Licence order for sorting: most senior first
const LICENCE_RANK = ['UEFA PRO', 'UEFA A', 'UEFA B', 'UEFA C', 'LFF D'];

function Portrait({ coach }) {
  if (coach.portrait) {
    return (
      <ResponsiveImage
        src={coach.portrait}
        alt={coach.vardas}
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
        className="block h-full w-full"
        imgClassName="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
      />
    );
  }
  // Until real portraits are shot: typographic tile, not a stock face
  return (
    <div aria-hidden="true" className="flex h-full w-full items-end bg-gradient-to-br from-surface-navy to-surface-raised p-5">
      <span className="font-display text-[5.5rem] font-extrabold uppercase leading-none text-white/10 transition-colors duration-500 group-hover:text-accent/40">
        {initials(coach.vardas)}
      </span>
    </div>
  );
}

export default function CoachesPreview() {
  const sorted = [...coaches].sort(
    (a, b) => LICENCE_RANK.indexOf(a.licencija) - LICENCE_RANK.indexOf(b.licencija),
  );

  return (
    <Section labelledBy="coaches-title" divider>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="coaches-title"
          index={coachesSection.index}
          eyebrow={coachesSection.eyebrow}
          title={coachesSection.title}
          intro={coachesSection.intro}
          size="lg"
        />
        <Link
          to={coachesSection.link.to}
          className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-white"
        >
          {coachesSection.link.label}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5 lg:gap-x-6">
        {sorted.map((coach, i) => (
          <Reveal as="li" key={coach.id} delay={i * 0.06}>
            <Link to={coachesSection.link.to} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line">
                <Portrait coach={coach} />
                <span className="absolute left-3 top-3 rounded-full bg-surface/80 px-3 py-1 text-eyebrow font-semibold uppercase text-white backdrop-blur">
                  {coach.licencija}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase leading-tight text-fg transition-colors group-hover:text-accent-bright md:text-2xl">
                {coach.vardas}
              </h3>
              {coach.role && <p className="mt-1 text-eyebrow uppercase text-accent-bright">{coach.role}</p>}
              <p className="mt-2 text-sm leading-snug text-fg-muted">{coach.highlight}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
