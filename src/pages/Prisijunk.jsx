import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import Seo from "../components/Seo";
import { PageHeader, Section, SectionHeader, Reveal, ResponsiveImage } from "../components/ui";
import { supportPage as page, site, partners } from "../content";

function CopyValue({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-fg-muted transition-colors hover:border-white/40 hover:text-white"
    >
      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Nukopijuota" : "Kopijuoti"}</span>
      <span className="sr-only"> kodą {value}</span>
    </button>
  );
}

export default function Prisijunk() {
  const { community, taxSupport, sponsors } = page;

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      {/* ═══ COMMUNITY ═══ */}
      <Section labelledBy="community-title" divider>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader id="community-title" index={community.index} eyebrow={community.eyebrow} title={community.title} size="lg" />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-fg-muted">
              {community.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ResponsiveImage
              src={community.image}
              alt={community.imageAlt}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="block overflow-hidden rounded-lg"
              imgClassName="h-auto w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* ═══ 1.2% ═══ */}
      <Section labelledBy="tax-title" tone="raised" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="section-label mb-5 flex items-center gap-3">
                <span className="font-mono text-accent-bright">{taxSupport.index}</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
                {taxSupport.eyebrow}
              </p>
              <p aria-hidden="true" className="font-display text-[clamp(6rem,16vw,11rem)] font-extrabold leading-none text-accent-bright">1,2%</p>
              <h2 id="tax-title" className="mt-4 text-display text-display-sm text-fg">{taxSupport.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-fg-muted">{taxSupport.text}</p>
              <a href={taxSupport.eds.href} target="_blank" rel="noopener noreferrer" className="btn-blue mt-8">
                Atidaryti EDS <span className="sr-only">({taxSupport.eds.label}, atsidaro naujame lange)</span>
                <span className="btn-arrow" aria-hidden="true">&#8599;</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <h3 className="font-display text-xl font-extrabold uppercase text-fg">{taxSupport.stepsTitle}</h3>
            <ol className="mt-6 border-t border-line">
              {taxSupport.steps.map((step, i) => (
                <li key={step.text} className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line py-4">
                  <span className="w-7 font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-fg-muted">{step.text}</span>
                  {step.value && <span className="font-mono text-lg font-semibold text-fg">{step.value}</span>}
                  {step.copy && <CopyValue value={step.value} />}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* ═══ SPONSORS ═══ */}
      <Section labelledBy="sponsors-title" divider>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader id="sponsors-title" index={sponsors.index} eyebrow={sponsors.eyebrow} title={sponsors.title} size="md" />
            <Reveal delay={0.1} className="mt-6 text-lg leading-relaxed text-fg-muted">{sponsors.text}</Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <dl className="divide-y divide-line rounded-lg border border-line">
              <div className="p-6">
                <dt className="text-eyebrow uppercase text-fg-subtle">Telefonas</dt>
                <dd className="mt-2 text-xl"><a href={site.contact.phoneHref} className="text-fg hover:text-accent-bright">{site.contact.phone}</a></dd>
              </div>
              <div className="p-6">
                <dt className="text-eyebrow uppercase text-fg-subtle">El. paštas</dt>
                <dd className="mt-2 text-xl"><a href={site.contact.emailHref} className="text-fg hover:text-accent-bright">{site.contact.email}</a></dd>
              </div>
            </dl>
            <p className="mt-8 text-eyebrow uppercase text-fg-subtle">Mus jau remia</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {partners.map((p) => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex h-20 items-center justify-center rounded-lg bg-white p-2 hover:opacity-90">
                    <ResponsiveImage src={p.logo} alt={`${p.name} (atsidaro naujame lange)`} sizes="120px" imgClassName="h-16 w-full object-contain" style={{ backgroundColor: "transparent" }} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
