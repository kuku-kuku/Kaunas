import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import { Container, Section, SectionHeader, Reveal } from '../../components/ui';
import TrialCta from '../../components/home/TrialCta';
import { programsPage as page, methodology, coaches, pathway, trialCta } from '../../content';
import { getGroupBands } from '../../lib/groups';

const OTHER = 'kita';

function coachLicence(name) {
  return coaches.find((c) => c.vardas === name)?.licencija ?? null;
}

function CoachLine({ label, name }) {
  const licence = coachLicence(name);
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
      <dt className="text-eyebrow uppercase text-fg-subtle">{label}</dt>
      <dd className="flex items-center gap-3 text-fg">
        {name}
        {licence && (
          <span className="rounded-full border border-line-strong px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-fg-muted">
            {licence}
          </span>
        )}
      </dd>
    </div>
  );
}

function GroupFinder({ bands, selected, onSelect }) {
  const years = useMemo(() => bands.flatMap((b) => b.years).sort((a, b) => a - b), [bands]);
  const band = bands.find((b) => b.years.includes(selected));

  return (
    <div className="rounded-lg border border-line bg-surface-raised p-6 md:p-8">
      <h2 id="finder-title" className="font-display text-2xl font-extrabold uppercase text-fg">{page.finder.title}</h2>
      <fieldset className="mt-5">
        <legend className="text-sm text-fg-muted">{page.finder.hint}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {[...years, OTHER].map((year) => {
            const active = selected === year;
            return (
              <button
                key={year}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(active ? null : year)}
                className={`min-h-[44px] min-w-[64px] rounded-full border px-4 font-mono text-sm transition-colors ${
                  active
                    ? 'border-accent bg-accent text-white'
                    : 'border-line-strong text-fg-muted hover:border-white/40 hover:text-white'
                }`}
              >
                {year === OTHER ? 'Kiti' : year}
              </button>
            );
          })}
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 min-h-[3rem] text-fg">
        {selected === OTHER && <span className="text-fg-muted">{page.finder.noGroup}</span>}
        {band && (
          <a href={`#grupe-${band.id}`} className="group inline-flex items-center gap-2 underline-offset-4 hover:underline">
            Tinkama grupė: <strong className="font-display text-xl font-extrabold uppercase text-accent-bright">{band.label}</strong>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&darr;</span>
          </a>
        )}
      </p>
    </div>
  );
}

export default function UgdymoPrograma() {
  const bands = useMemo(() => getGroupBands(), []);
  const [selectedYear, setSelectedYear] = useState(null);
  const selectedBand = bands.find((b) => b.years.includes(selectedYear))?.id;

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />

      {/* ═══ HEADER + FINDER ═══ */}
      <section aria-labelledby="page-title" className="border-b border-line pb-section-sm pt-32 md:pt-40">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader level={1} id="page-title" eyebrow={page.hero.eyebrow} title={page.hero.title} size="xl" intro={page.hero.lead} animate={false} />
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <GroupFinder bands={bands} selected={selectedYear} onSelect={setSelectedYear} />
          </Reveal>
        </Container>
      </section>

      {/* ═══ GROUPS ═══ */}
      <Section labelledBy="groups-title">
        <SectionHeader id="groups-title" index={page.groups.index} eyebrow={page.groups.eyebrow} title={page.groups.title} size="lg" />

        <ol className="mt-16 border-t border-line">
          {bands.map((band, i) => {
            const highlighted = band.id === selectedBand;
            return (
              <Reveal
                as="li"
                key={band.id}
                id={`grupe-${band.id}`}
                className={`grid scroll-mt-28 gap-8 border-b border-line py-10 transition-colors duration-500 md:py-14 lg:grid-cols-12 lg:gap-10 ${
                  highlighted ? 'bg-accent/[0.08] shadow-[inset_3px_0_0_theme(colors.accent.DEFAULT)]' : ''
                }`}
              >
                <div className={`lg:col-span-4 ${highlighted ? 'pl-5' : ''} transition-[padding] duration-500`}>
                  <span className="font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-display-lg font-extrabold uppercase leading-none text-fg">{band.label}</h3>
                  <p className="mt-3 text-eyebrow uppercase text-fg-subtle">
                    Gimimo metai{band.teams.length > 1 ? ` · ${band.teams.length} komandos` : ''}
                  </p>
                </div>

                <div className="space-y-6 lg:col-span-5">
                  {band.teams.filter((t) => t.grupe || t.vyrTreneris || t.asistentai?.length).map((team) => (
                    <dl key={`${team.metai}-${team.grupe}`} className="divide-y divide-line rounded-lg border border-line px-5">
                      {team.grupe && (
                        <div className="py-3">
                          <dt className="sr-only">Komanda</dt>
                          <dd className="text-eyebrow font-semibold uppercase text-accent-bright">Komanda {team.grupe}</dd>
                        </div>
                      )}
                      {team.vyrTreneris && <CoachLine label="Vyr. treneris" name={team.vyrTreneris} />}
                      {team.asistentai?.map((a) => <CoachLine key={a} label="Asistentas" name={a} />)}
                    </dl>
                  ))}
                  <p className="text-sm text-fg-subtle">{page.groups.scheduleNote}</p>
                </div>

                <div className="flex items-start lg:col-span-3 lg:justify-end">
                  <Link to={`${trialCta.to}?grupe=${band.id}`} className={highlighted ? 'btn-blue' : 'btn-academy'}>
                    {page.groups.cta}
                    <span className="sr-only"> – {band.label} m. gimusių grupė</span>
                    <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* Next step after the academy */}
        <Reveal className="mt-10 flex flex-col gap-6 rounded-lg bg-surface-navy p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-accent-bright">Kitas žingsnis</p>
            <h3 className="mt-3 font-display text-display-sm font-extrabold uppercase text-fg">{pathway.next.title}</h3>
            <p className="mt-3 text-fg-muted">{pathway.next.text}</p>
          </div>
          <Link to={pathway.next.to} className="btn-academy shrink-0">
            Skaityti naujieną <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </Section>

      {/* ═══ METHODOLOGY ═══ */}
      <Section labelledBy="method-title" tone="raised" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeader
            id="method-title"
            index={page.methodology.index}
            eyebrow={page.methodology.eyebrow}
            title={page.methodology.title}
            intro={page.methodology.intro}
            size="lg"
            className="lg:col-span-5"
          />
          <ol className="border-t border-line lg:col-span-6 lg:col-start-7">
            {methodology.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06} className="flex items-baseline gap-6 border-b border-line py-6">
                <span className="w-8 shrink-0 font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-2xl font-semibold uppercase text-fg">{item}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <TrialCta />
    </main>
  );
}
