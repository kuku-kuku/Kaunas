import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';

// Standard top of an inner page: clears the fixed header, eyebrow + h1 + lead.
export default function PageHeader({ eyebrow, title, lead, size = 'xl', children }) {
  return (
    <section aria-labelledby="page-title" className="pb-section-sm pt-32 md:pt-40">
      <Container>
        <SectionHeader level={1} id="page-title" eyebrow={eyebrow} title={title} intro={lead} size={size} />
        {children}
      </Container>
    </section>
  );
}
