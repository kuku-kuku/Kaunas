import React from 'react';
import { Link } from 'react-router-dom';
import { site, footerNav, legalNav } from '../content';
import { Container, SocialLinks } from './ui';

const linkClass = 'inline-flex min-h-[32px] items-center text-sm text-fg-muted hover:text-white transition-colors duration-200';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-line">
      {/* Large CTA typography */}
      <Container className="pt-24 pb-16">
        <p className="section-label mb-4">Prisijunk</p>
        <h2 className="text-display text-display-lg text-white mb-8">
          Padėkite auginti<br />
          jaunąją kartą
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/prisijunk" className="btn-academy">
            Skirti 1,2% <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
          <Link to="/kontaktai" className="btn-blue">
            Susisiekti <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>

      <Container>
        <div className="h-px bg-line" />
      </Container>

      {/* Footer grid */}
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* FA Kaunas */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src="/logo.webp" alt="FA Kaunas" width={59} height={56} loading="lazy" className="h-14 w-auto" />
            <p className="text-sm text-fg-subtle leading-relaxed max-w-[240px]">
              Jaunimo futbolo akademija, ugdanti ne tik sportininkus, bet ir atsakingas asmenybes.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-title">
            <p id="footer-nav-title" className="section-label mb-4">Navigacija</p>
            <ul className="space-y-1">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact: full width on phones so the email address fits on one line */}
          <div className="col-span-2 md:col-span-1">
            <p className="section-label mb-4">Kontaktai</p>
            <address className="not-italic space-y-1">
              <p className="text-sm text-fg-muted min-h-[32px] flex items-center">{site.address.full}</p>
              <a href={site.contact.emailHref} className={linkClass}>{site.contact.email}</a>
              <br />
              <a href={site.contact.phoneHref} className={linkClass}>{site.contact.phone}</a>
            </address>
          </div>

          {/* Social */}
          <div>
            <p className="section-label mb-4">Sekite mus</p>
            <SocialLinks className="gap-3" linkClassName="border border-line text-fg-muted hover:text-white hover:border-white/40" size={15} />
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <Container>
        <div className="h-px bg-line" />
      </Container>
      <Container className="py-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <p className="text-[11px] text-fg-subtle uppercase tracking-[0.1em]">
            &copy; {year} {site.legalName}. Visos teisės saugomos.
          </p>
          <nav aria-label="Teisinė informacija">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legalNav.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[32px] items-center text-[11px] text-fg-subtle uppercase tracking-[0.1em] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
