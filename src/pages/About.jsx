import React from 'react';
import Seo from '../components/Seo';
import { PageHeader, Section, SectionHeader, Reveal, RichText } from '../components/ui';
import LinkCards from '../components/ui/LinkCards';
import { aboutPage as page, values, site } from '../content';

export default function About() {
  const { history, valuesSection } = page;
  // Core value ("center") first
  const ordered = [...values].sort((a, b) => (a.id === 'center' ? -1 : b.id === 'center' ? 1 : 0));
  const [core, ...rest] = ordered;

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      {/* ═══ HISTORY ═══ */}
      <Section labelledBy="history-title" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader id="history-title" index={history.index} eyebrow={history.eyebrow} title={history.title} size="lg" />
            {/* Decorative year drawn via CSS content, so it isn't text for contrast checks */}
            <Reveal
              delay={0.1}
              aria-hidden="true"
              data-year={site.foundingYear}
              className="mt-10 font-display text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none text-white/[0.06] before:content-[attr(data-year)]"
            />
          </div>
          <Reveal delay={0.1} className="space-y-6 text-lead text-fg-muted lg:col-span-6 lg:col-start-7 lg:pt-14">
            {history.paragraphs.map((p) => (
              <p key={p}><RichText text={p} /></p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ═══ VALUES ═══ */}
      <Section labelledBy="values-title" tone="raised" divider>
        <SectionHeader id="values-title" index={valuesSection.index} eyebrow={valuesSection.eyebrow} title={valuesSection.title} size="lg" />

        <Reveal className="mt-14 rounded-lg bg-accent p-8 md:p-12">
          <p className="text-eyebrow font-semibold uppercase text-white">Pagrindinė vertybė</p>
          <h3 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">{core.label}</h3>
          <p className="mt-4 max-w-prose text-lg text-white">{core.desc}</p>
        </Reveal>

        <ul className="mt-px grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {rest.map((value, i) => (
            <Reveal as="li" key={value.id} delay={i * 0.06} className="bg-surface-raised p-7 md:p-8">
              <span className="font-mono text-sm text-accent-bright">{String(i + 2).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-2xl font-extrabold uppercase text-fg">{value.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{value.desc}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ═══ MORE ═══ */}
      <Section labelledBy="more-title" size="compact" divider>
        <h2 id="more-title" className="sr-only">Daugiau apie mus</h2>
        <LinkCards links={page.more} headingLevel={3} />
      </Section>
    </main>
  );
}
