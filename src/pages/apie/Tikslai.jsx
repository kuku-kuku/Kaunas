import React from 'react';
import Seo from '../../components/Seo';
import TrialCta from '../../components/home/TrialCta';
import { PageHeader, Section, Reveal } from '../../components/ui';
import { goalsPage as page } from '../../content';

export default function Tikslai() {
  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <Section labelledBy="goals-title" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 id="goals-title" className="font-display text-display-sm font-extrabold uppercase text-fg lg:sticky lg:top-28">
              {page.heading}
            </h2>
          </Reveal>

          <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
            {page.goals.map((goal, i) => (
              <Reveal as="li" key={goal.title} delay={i * 0.06} className="grid gap-4 border-b border-line py-10 sm:grid-cols-[5rem_1fr]">
                <span className="font-display text-display-md font-extrabold leading-none text-accent-bright">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-fg">{goal.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-fg-muted">{goal.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <TrialCta />
    </main>
  );
}
