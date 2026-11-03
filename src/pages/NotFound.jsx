import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Container } from '../components/ui';
import { trialCta } from '../content';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center pt-32">
      <Seo title="Puslapis nerastas" noindex />
      <Container>
        <div aria-hidden="true" data-code="404" className="font-display text-[clamp(7rem,22vw,16rem)] font-extrabold leading-none text-white/[0.06] before:content-[attr(data-code)]" />
        <h1 className="-mt-8 text-display text-display-lg text-fg md:-mt-16">Puslapis nerastas</h1>
        <p className="mt-6 max-w-prose text-lead text-fg-muted">Tokio puslapio nėra arba jis buvo perkeltas.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="btn-academy">
            Į pradžią <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
          <Link to={trialCta.to} className="btn-blue">
            {trialCta.longLabel} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
