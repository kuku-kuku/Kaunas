import React from 'react';
import Seo from '../components/Seo';
import { Section, SectionHeader } from '../components/ui';
import { site } from '../content';

// TODO(content): replace with the academy's real privacy policy (see TODO-content.md → Legal).
// Kept noindex until the real text is published.
export default function PrivatumoPolitika() {
  return (
    <main>
      <Seo title="Privatumo politika" description="FA Kaunas privatumo politika." noindex />

      <Section size="none" className="pt-32 md:pt-40 pb-section-sm border-b border-line">
        <SectionHeader level={1} size="xl" eyebrow="Teisinė informacija" title="Privatumo politika" animate={false} />
      </Section>

      <Section size="compact">
        <div className="max-w-prose space-y-6 text-fg-muted leading-relaxed">
          <p className="border border-line bg-surface-raised px-5 py-4 text-sm">
            Privatumo politikos tekstas šiuo metu rengiamas ir netrukus bus paskelbtas šiame puslapyje.
          </p>
          <p>
            Jei turite klausimų apie tai, kaip FA Kaunas tvarko jūsų ar jūsų vaiko asmens duomenis,
            susisiekite su mumis el. paštu{' '}
            <a href={site.contact.emailHref} className="text-accent-bright underline underline-offset-4 hover:text-white">
              {site.contact.email}
            </a>{' '}
            arba telefonu{' '}
            <a href={site.contact.phoneHref} className="text-accent-bright underline underline-offset-4 hover:text-white">
              {site.contact.phone}
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
