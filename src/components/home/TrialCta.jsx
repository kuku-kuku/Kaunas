import React from 'react';
import { Link } from 'react-router-dom';
import { trialSection, trialCta } from '../../content';
import { Section, Reveal } from '../ui';

export default function TrialCta() {
  return (
    <Section labelledBy="trial-title" className="overflow-hidden">
      <div className="relative overflow-hidden rounded-2xl bg-accent px-6 py-14 md:px-12 md:py-20 lg:px-16">
        {/* Pitch markings */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full border border-white/20" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 h-px w-[60%] bg-white/15" />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="text-eyebrow font-semibold uppercase text-white">{trialSection.eyebrow}</p>
            <h2 id="trial-title" className="text-display text-display-lg mt-5 text-white">
              {trialSection.title}
            </h2>
            <Link
              to={trialCta.to}
              className="mt-10 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-surface transition-colors hover:bg-surface hover:text-white"
            >
              {trialCta.longLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>

          <ol className="space-y-px overflow-hidden rounded-lg lg:col-span-6">
            {trialSection.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={0.1 + i * 0.08} className="flex gap-6 bg-black/15 p-6">
                <span className="font-mono text-sm text-white">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl font-extrabold uppercase text-white">{step.title}</h3>
                  <p className="mt-1 text-white/90">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
