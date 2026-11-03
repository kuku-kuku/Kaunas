import React from 'react';
import { partners } from '../../content';
import { Container, ResponsiveImage } from '../ui';

export default function Partners() {
  return (
    <section aria-labelledby="partners-title" className="border-t border-line py-section-sm">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <h2 id="partners-title" className="section-label shrink-0">
          Mūsų partneriai
        </h2>
        <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-28 items-center justify-center rounded-lg bg-white px-4 py-2 transition-opacity hover:opacity-90"
              >
                <ResponsiveImage
                  src={partner.logo}
                  alt={`${partner.name} (atsidaro naujame lange)`}
                  sizes="160px"
                  imgClassName="h-24 w-full object-contain"
                  style={{ backgroundColor: 'transparent' }}
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
