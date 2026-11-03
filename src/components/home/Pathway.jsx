import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { pathway, groups } from '../../content';
import { Section, SectionHeader, Reveal } from '../ui';

// Groups are stored oldest-first and split into A/B teams; the pathway reads youngest-first
// with one step per birth-year band.
function useSteps() {
  return useMemo(() => {
    const byYears = new Map();
    for (const g of groups) {
      const step = byYears.get(g.metai) ?? { years: g.metai, teams: [] };
      step.teams.push(g);
      byYears.set(g.metai, step);
    }
    return [...byYears.values()].reverse();
  }, []);
}

const birthYears = (metai) => metai.replace(/\s*\/\s*/g, '–').replace(/–(\d{4})–/, '–');

export default function Pathway() {
  const steps = useSteps();
  const total = steps.length + 1;

  return (
    <Section labelledBy="pathway-title" tone="raised" divider>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="pathway-title"
          index={pathway.index}
          eyebrow={pathway.eyebrow}
          title={pathway.title}
          intro={pathway.intro}
          size="lg"
        />
        <Link
          to={pathway.link.to}
          className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-white"
        >
          {pathway.link.label}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <ol className="relative mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.years} delay={i * 0.08} className="flex flex-col bg-surface-raised p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-accent-bright">
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {step.teams.length > 1 && (
                <span className="rounded-full border border-line-strong px-3 py-1 text-eyebrow uppercase text-fg-subtle">
                  {step.teams.length} komandos
                </span>
              )}
            </div>

            <h3 className="mt-10 font-display text-display-sm font-extrabold uppercase text-fg">
              {birthYears(step.years)}
              <span className="mt-2 block font-body text-eyebrow font-medium uppercase text-fg-subtle">gimimo metai</span>
            </h3>

            <dl className="mt-auto space-y-4 pt-10 text-sm">
              {step.teams.map((team) => (
                <div key={team.vyrTreneris}>
                  <dt className="text-eyebrow uppercase text-fg-subtle">
                    Vyr. treneris{team.grupe ? ` · grupė ${team.grupe}` : ''}
                  </dt>
                  <dd className="mt-1 text-fg">{team.vyrTreneris}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}

        <Reveal as="li" delay={steps.length * 0.08} className="flex flex-col bg-surface-navy p-7 md:p-8">
          <span className="font-mono text-sm text-accent-bright">
            {String(total).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <h3 className="mt-10 font-display text-display-sm font-extrabold uppercase text-fg">{pathway.next.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">{pathway.next.text}</p>
          <Link
            to={pathway.next.to}
            className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-8 text-sm uppercase tracking-[0.15em] text-accent-bright transition-colors hover:text-white"
          >
            Skaityti naujieną <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </ol>
    </Section>
  );
}
