import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-academy-black border-t border-academy-line">
      {/* Large CTA typography */}
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-4">Prisijunk</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-display text-white leading-[0.95] mb-8">
            Padėkite auginti<br />
            jaunąją kartą
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prisijunk" className="btn-academy">
              Skirti 1,2% <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link to="/kontaktai" className="btn-blue">
              Susisiekti <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-12 lg:mx-24 h-px bg-academy-line" />

      {/* Footer grid */}
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* FA Kaunas */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src="/logo.png" alt="FA Kaunas" className="h-14 w-auto" />
            <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
              Jaunimo futbolo akademija, ugdanti ne tik sportininkus, bet ir atsakingas asmenybes.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="section-label mb-4">Navigacija</p>
            {[
              { to: '/apie', label: 'Apie mus' },
              { to: '/akademija/treneriai', label: 'Treneriai' },
              { to: '/akademija/ugdymo-programa', label: 'Ugdymo programa' },
              { to: '/naujienos', label: 'Naujienos' },
              { to: '/kontaktai', label: 'Kontaktai' },
              { to: '/prisijunk', label: 'Parama ir rėmimas' },
            ].map(link => (
              <Link key={link.to} to={link.to}
                className="block text-sm text-white/40 hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="section-label mb-4">Kontaktai</p>
            <p className="text-sm text-white/40">Žeimenos g. 165, 49332 Kaunas</p>
            <a href="mailto:administracija@fakaunas.lt" className="block text-sm text-white/40 hover:text-white transition-colors">
              administracija@fakaunas.lt
            </a>
            <a href="tel:+37066527501" className="block text-sm text-white/40 hover:text-white transition-colors">
              +37066527501
            </a>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="section-label mb-4">Sekite mus</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/FA-Kaunas/100087548214643/" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-academy-line flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.instagram.com/fakaunas/" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-academy-line flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200">
                <FaInstagram size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-6 md:mx-12 lg:mx-24 h-px bg-academy-line" />
      <div className="px-6 md:px-12 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-white/25 uppercase tracking-[0.1em]">
            &copy; {year} FA KAUNAS. Visos teisės saugomos.
          </p>
          <p className="text-[11px] text-white/25 uppercase tracking-[0.1em]">
            Padėkite auginti jaunąją kartą – skirkite 1,2% arba tapkite rėmėju.
          </p>
        </div>
      </div>
    </footer>
  );
}
