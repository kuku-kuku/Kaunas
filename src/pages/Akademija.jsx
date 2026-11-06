import React from 'react';
import Seo from '../components/Seo';
import TrialCta from '../components/home/TrialCta';
import { PageHeader, Section, SectionHeader, Reveal, RichText } from '../components/ui';
import LinkCards from '../components/ui/LinkCards';
import { academyPage as page, methodology } from '../content';

export default function Akademija() {
  const { personality, explore } = page;

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      {/* ═══ PERSONALITY ═══ */}
      <Section labelledBy="personality-title" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeader
            id="personality-title"
            index={personality.index}
            eyebrow={personality.eyebrow}
            title={personality.title}
            size="lg"
            className="lg:col-span-5"
          />
          <Reveal delay={0.1} className="space-y-6 text-lead text-fg-muted lg:col-span-6 lg:col-start-7">
            {personality.paragraphs.map((p) => (
              <p key={p}><RichText text={p} /></p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-4">
              {methodology.map((m) => (
                <li key={m} className="rounded-full border border-line-strong px-4 py-2 text-sm text-fg-muted">{m}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ═══ EXPLORE ═══ */}
      <Section labelledBy="explore-title" tone="raised" divider>
        <SectionHeader id="explore-title" index={explore.index} eyebrow={explore.eyebrow} title={explore.title} size="lg" />
        <div className="mt-14">
          <LinkCards links={explore.links} />
        </div>
      </Section>

      <TrialCta />
    </main>
  );
}
