import React from 'react';
import Seo from '../../components/Seo';
import TrialCta from '../../components/home/TrialCta';
import { Container, Section, SectionHeader, Reveal, MapEmbed, PhotoPlaceholder, ResponsiveImage } from '../../components/ui';
import { facilitiesPage as page, technology, facilities, site } from '../../content';

export default function Baze() {
  const { location, venues, tech } = page;

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />

      <section aria-labelledby="page-title" className="pb-section-sm pt-32 md:pt-40">
        <Container>
          <SectionHeader level={1} id="page-title" eyebrow={page.eyebrow} title={page.title} intro={page.lead} size="xl" animate={false} />
        </Container>
      </section>

      {/* ═══ LOCATION ═══ */}
      <Section labelledBy="location-title" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader id="location-title" index={location.index} eyebrow={location.eyebrow} title={location.title} intro={location.intro} size="lg" />
            <Reveal delay={0.1} className="mt-10">
              <dl className="divide-y divide-line border-y border-line">
                <div className="py-5">
                  <dt className="text-eyebrow uppercase text-fg-subtle">Adresas</dt>
                  <dd className="mt-2 text-lg text-fg">{site.address.full}</dd>
                </div>
                {location.directions.map((d) => (
                  <div key={d.title} className="py-5">
                    <dt className="text-eyebrow uppercase text-fg-subtle">{d.title}</dt>
                    <dd className="mt-2 text-fg-muted">{d.text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <MapEmbed
              src={site.address.mapEmbed}
              title="FA Kaunas treniruočių vieta žemėlapyje"
              address={site.address.full}
              mapsLink={facilities.mapsLink}
              className="aspect-[4/3] lg:aspect-[16/11]"
            />
          </Reveal>
        </div>
      </Section>

      {/* ═══ VENUES ═══ */}
      <Section labelledBy="venues-title" tone="raised" divider>
        <SectionHeader id="venues-title" index={venues.index} eyebrow={venues.eyebrow} title={venues.title} size="lg" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {venues.items.length > 0
            ? venues.items.map((v, i) => (
                <Reveal as="li" key={v.name} delay={i * 0.08}>
                  <div className="aspect-[16/10] overflow-hidden rounded-lg md:aspect-[4/5]">
                    <ResponsiveImage src={v.image} alt={v.name} sizes="(min-width: 768px) 33vw, 100vw" className="block h-full w-full" imgClassName="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold uppercase text-fg">{v.name}</h3>
                  {v.surface && <p className="mt-1 text-sm text-fg-muted">{v.surface}</p>}
                </Reveal>
              ))
            : venues.placeholders.map((label, i) => (
                <Reveal as="li" key={label} delay={i * 0.08} className={i === 1 ? 'md:mt-16' : ''}>
                  <PhotoPlaceholder label={label} aspect="aspect-[16/10] md:aspect-[4/5]" />
                </Reveal>
              ))}
        </ul>
      </Section>

      {/* ═══ TECHNOLOGY ═══ */}
      <Section labelledBy="tech-title" divider>
        <SectionHeader id="tech-title" index={tech.index} eyebrow={tech.eyebrow} title={tech.title} intro={tech.intro} size="lg" />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
          {technology.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08} className="flex flex-col bg-surface p-7 md:p-9">
              <span className="font-mono text-sm text-accent-bright">{item.num}</span>
              <h3 className="mt-8 font-display text-display-sm font-extrabold uppercase text-fg">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-fg-muted">{item.desc}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <TrialCta />
    </main>
  );
}
