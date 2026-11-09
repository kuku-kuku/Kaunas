import React from 'react';
import { Link } from 'react-router-dom';
import { coachesSection } from '../../content';
import { getCoachesByLicence } from '../../lib/coaches';
import { Section, SectionHeader, Reveal } from '../ui';
import CoachPortrait from '../CoachPortrait';

export default function CoachesPreview() {
  const sorted = getCoachesByLicence();

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

      <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {sorted.map((coach, i) => (
          <Reveal as="li" key={coach.id} delay={i * 0.06}>
            <Link to={`${coachesSection.link.to}#${coach.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line">
                <CoachPortrait coach={coach} sizes="(min-width: 1280px) 400px, (min-width: 1024px) 30vw, 50vw" initialsClassName="text-4xl lg:text-5xl" />
                {coach.licencija && (
                  <span className="absolute right-3 top-3 rounded-full bg-surface/80 px-3 py-1 text-eyebrow font-semibold uppercase text-white backdrop-blur">
                    {coach.licencija}
                  </span>
                )}
              </div>
              <div className="px-1 pt-5">
                <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-fg transition-colors group-hover:text-accent-bright md:text-2xl">
                  {coach.vardas}
                </h3>
                {coach.role && <p className="mt-2 text-sm font-medium leading-snug text-accent-bright">{coach.role}</p>}
                <p className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-fg-muted">{coach.highlight}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
