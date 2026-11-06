import React from 'react';
import { philosophy, methodology } from '../../content';
import { Section, SectionHeader, Reveal } from '../ui';

export default function Philosophy() {
  return (
    <Section labelledBy="philosophy-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeader
          id="philosophy-title"
          index={philosophy.index}
          eyebrow={philosophy.eyebrow}
          title={philosophy.title}
          size="lg"
          className="lg:col-span-6"
        />

        <Reveal delay={0.1} className="space-y-6 text-lead text-fg-muted lg:col-span-5 lg:col-start-8 lg:pt-14">
          {philosophy.body.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
      </div>

      <ol className="mt-16 grid border-t border-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
        {methodology.map((item, i) => (
          <Reveal
            as="li"
            key={item}
            delay={i * 0.06}
            className="flex gap-4 border-b border-line py-6 sm:pr-6 lg:flex-col lg:gap-10 lg:border-b-0 lg:border-r lg:py-8 lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
          >
            <span className="font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-display text-xl font-semibold uppercase leading-tight text-fg">{item}</span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
