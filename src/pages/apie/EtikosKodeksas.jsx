import React from 'react';
import Seo from '../../components/Seo';
import { PageHeader, Section, Reveal } from '../../components/ui';
import { ethicsPage as page, ethicsSections } from '../../content';

export default function EtikosKodeksas() {
  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead}>
        {/* Jump links: parents usually want only their part */}
        <nav aria-label="Etikos kodekso dalys" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {ethicsSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line-strong px-5 text-sm uppercase tracking-[0.12em] text-fg-muted transition-colors hover:border-white/40 hover:text-white"
                >
                  <span className="font-mono text-accent-bright">{s.num}</span> {s.short}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {ethicsSections.map((section, si) => (
        <Section
          key={section.id}
          id={section.id}
          labelledBy={`${section.id}-title`}
          tone={si % 2 === 1 ? 'raised' : 'base'}
          divider
          className="scroll-mt-20"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-sm text-accent-bright">{section.num}</span>
                <h2 id={`${section.id}-title`} className="mt-4 font-display text-display-md font-extrabold uppercase text-fg">
                  {section.short}
                </h2>
                <p className="mt-3 text-eyebrow uppercase text-fg-subtle">{section.title}</p>
              </div>
            </Reveal>
            <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
              {section.items.map((item, i) => (
                <li key={item} className="flex gap-5 border-b border-line py-5">
                  <span className="w-7 shrink-0 pt-1 font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg leading-relaxed text-fg">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      ))}
    </main>
  );
}
