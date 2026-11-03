import React from 'react';
import Seo from '../../components/Seo';
import CoachPortrait from '../../components/CoachPortrait';
import TrialCta from '../../components/home/TrialCta';
import { Container, Section, SectionHeader, Reveal } from '../../components/ui';
import { coachesPage as page } from '../../content';
import { getCoachesByLicence } from '../../lib/coaches';
import { parseBio } from '../../lib/bio';

function LicenceBadge({ licence, className = '' }) {
  if (!licence) return null;
  return (
    <span className={`inline-flex rounded-full border border-line-strong px-3 py-1 text-eyebrow font-semibold uppercase text-fg ${className}`}>
      {licence}
    </span>
  );
}

function Profile({ coach, index }) {
  const blocks = parseBio(coach.aprasymas);
  const texts = blocks.filter((b) => b.type === 'text');
  const lists = blocks.filter((b) => b.type === 'list');

  return (
    <article id={coach.slug} aria-labelledby={`${coach.slug}-name`} className="scroll-mt-28 border-t border-line py-section-sm">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line max-w-[14rem] sm:max-w-sm lg:max-w-none">
              <CoachPortrait coach={coach} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 384px, 100vw" initialsClassName="text-[8rem]" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <span className="font-mono text-sm text-accent-bright">{String(index + 1).padStart(2, '0')}</span>
            <h2 id={`${coach.slug}-name`} className="mt-4 text-display text-display-lg text-fg">
              {coach.vardas}
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <LicenceBadge licence={coach.licencija} />
              {coach.role && <span className="text-eyebrow uppercase text-accent-bright">{coach.role}</span>}
            </div>
            <p className="mt-8 max-w-prose text-lead text-fg">{coach.trumpai}</p>
            {texts.map((b) => (
              <p key={b.text} className="mt-4 max-w-prose leading-relaxed text-fg-muted">{b.text}</p>
            ))}
          </Reveal>

          {lists.length > 0 && (
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {lists.map((list, i) => (
                <Reveal key={list.title ?? i} delay={i * 0.06}>
                  {list.title && <h3 className="section-label mb-4">{list.title}</h3>}
                  <ul className="divide-y divide-line border-y border-line">
                    {list.items.map((item) => (
                      <li key={item} className="py-3 text-sm leading-snug text-fg-muted">{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Treneriai() {
  const coaches = getCoachesByLicence();

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />

      {/* ═══ HEADER + ROSTER ═══ */}
      <section aria-labelledby="page-title" className="pb-section-sm pt-32 md:pt-40">
        <Container>
          <SectionHeader level={1} id="page-title" eyebrow={page.eyebrow} title={page.title} intro={page.lead} size="xl" />

          <nav aria-label="Trenerių sąrašas" className="mt-14">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
              {coaches.map((coach, i) => (
                <Reveal as="li" key={coach.slug} delay={i * 0.05}>
                  <a href={`#${coach.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line">
                      <CoachPortrait coach={coach} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" />
                      <LicenceBadge licence={coach.licencija} className="absolute left-3 top-3 border-transparent bg-surface/80 backdrop-blur" />
                    </div>
                    <span className="mt-4 block font-display text-xl font-extrabold uppercase leading-tight text-fg transition-colors group-hover:text-accent-bright">
                      {coach.vardas}
                    </span>
                    {coach.role && <span className="mt-1 block text-eyebrow uppercase text-accent-bright">{coach.role}</span>}
                  </a>
                </Reveal>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* ═══ PROFILES ═══ */}
      <Section size="none" className="pb-section">
        {coaches.map((coach, i) => (
          <Profile key={coach.slug} coach={coach} index={i} />
        ))}
      </Section>

      <TrialCta />
    </main>
  );
}
