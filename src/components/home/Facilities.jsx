import React from 'react';
import { Link } from 'react-router-dom';
import { facilities, site } from '../../content';
import { Section, SectionHeader, Reveal, PhotoPlaceholder, MapEmbed } from '../ui';

export default function Facilities() {
  const [main, secondary] = facilities.photos;

  return (
    <Section labelledBy="facilities-title" divider>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            id="facilities-title"
            index={facilities.index}
            eyebrow={facilities.eyebrow}
            title={facilities.title}
            intro={facilities.intro}
            size="lg"
          />
          <Link
            to={facilities.link.to}
            className="group mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-white"
          >
            {facilities.link.label}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Reveal delay={0.1} className="mt-8">
            <MapEmbed
              src={site.address.mapEmbed}
              title="FA Kaunas treniruočių vieta žemėlapyje"
              address={site.address.full}
              mapsLink={facilities.mapsLink}
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-5 gap-4 lg:col-span-7 lg:gap-6">
          <Reveal className="col-span-5 sm:col-span-3">
            <PhotoPlaceholder label={main.label} aspect={main.aspect} className="h-full" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-5 sm:col-span-2 sm:mt-16">
            <PhotoPlaceholder label={secondary.label} aspect={secondary.aspect} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
