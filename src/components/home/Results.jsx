import React from 'react';
import { Link } from 'react-router-dom';
import { results, stats } from '../../content';
import { Section, SectionHeader, Reveal, StatCounter } from '../ui';

export default function Results() {
  return (
    <Section labelledBy="results-title" tone="navy">
      <SectionHeader
        id="results-title"
        index={results.index}
        eyebrow={results.eyebrow}
        title={results.title}
        size="lg"
      />

      {/* Academy in numbers */}
      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:mt-20 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse bg-surface-navy p-6 md:p-8">
            <dt className="mt-3 text-eyebrow uppercase text-fg-muted">{stat.label}</dt>
            <dd className="font-display text-stat font-extrabold text-white">
              <StatCounter value={stat.value} suffix={stat.suffix} animate={stat.animate !== false} />
            </dd>
          </div>
        ))}
      </dl>

      {/* Highlights, each linked to its news article */}
      <ul className="mt-16 lg:mt-20">
        {results.highlights.map((h, i) => (
          <Reveal as="li" key={h.to} delay={i * 0.08} className="border-t border-white/10 last:border-b">
            <Link to={h.to} className="group grid items-baseline gap-x-8 gap-y-2 py-8 md:grid-cols-12">
              <span className="font-display text-display-md font-extrabold uppercase text-accent-bright md:col-span-3">
                {h.value}
                {h.suffix && <span className="ml-2 text-display-sm text-fg">{h.suffix}</span>}
              </span>
              <span className="text-lg text-fg md:col-span-6 md:text-xl">{h.label}</span>
              <span className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                <span className="text-eyebrow uppercase text-fg-muted">{h.meta}</span>
                <span aria-hidden="true" className="text-fg-muted transition-all group-hover:translate-x-1 group-hover:text-white">&rarr;</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
