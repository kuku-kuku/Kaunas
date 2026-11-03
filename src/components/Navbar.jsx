import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNav, trialCta } from '../content';
import { SocialLinks } from './ui';

const NAV_ITEMS = mainNav;

// The vertical side nav only fits in the page margin on very wide screens: content is
// 80rem wide and centred, so at 1680px the margin is 200px and the ~155px rail clears it.
// Below that the top bar stays pinned and condenses instead.
const SIDEBAR_QUERY = '(min-width: 1680px)';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Desktop menu item. The label is a normal link; items with a submenu get a separate
// chevron button so keyboard users can open it (Enter/Space), close it (Escape) and tab
// through it. Mouse users still get open-on-hover.
function DesktopNavItem({ item, active, pathname }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);
  const toggleRef = useRef(null);
  const menuId = `submeniu-${item.to.replace(/\W/g, '')}`;

  useEffect(() => setOpen(false), [pathname]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  const onBlur = (e) => {
    if (!itemRef.current?.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    // Handlers only catch events bubbling from the link/button/submenu inside;
    // the <li> itself is not interactive.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      ref={itemRef}
      className="relative flex items-center"
      onMouseEnter={() => item.sub && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <Link
        to={item.to}
        aria-current={pathname === item.to ? 'page' : undefined}
        className={`relative flex items-center py-2 pl-3 xl:pl-4 ${item.sub ? 'pr-1' : 'pr-3 xl:pr-4'} text-[13px] uppercase tracking-[0.15em] font-bold transition-colors duration-200 ${
          active ? 'text-white' : 'text-white/90 hover:text-white'
        }`}
      >
        {item.label}
      </Link>

      {item.sub && (
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`${item.label}: ${open ? 'uždaryti' : 'atidaryti'} submeniu`}
          onClick={() => setOpen((v) => !v)}
          className="mr-1 xl:mr-2 flex h-8 w-6 items-center justify-center text-fg-subtle hover:text-white transition-colors"
        >
          <ChevronDown size={13} aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      )}

      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-px bg-accent"
          transition={{ duration: 0.3 }}
        />
      )}

      <AnimatePresence>
        {item.sub && open && (
          // pt-2 instead of a margin keeps the hover area continuous between link and panel
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <ul id={menuId} className="min-w-[220px] bg-surface-raised border border-line py-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {item.sub.map((sub) => (
                <li key={sub.to}>
                  <Link
                    to={sub.to}
                    aria-current={pathname === sub.to ? 'page' : undefined}
                    className={`block px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                      pathname === sub.to ? 'text-accent-bright' : 'text-fg-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const wide = useMediaQuery(SIDEBAR_QUERY);
  const sidebarMode = scrolled && wide;
  const mobileRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    burgerRef.current?.focus();
  }, []);

  // Mobile menu behaves like a modal: page scroll locked, focus moved in and kept
  // inside (header bar + menu), Escape closes and returns focus to the burger.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    document.body.style.overflow = 'hidden';

    const firstLink = mobileRef.current?.querySelector('#mobile-menu a');
    firstLink?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobile();
        return;
      }
      if (e.key !== 'Tab') return;
      const nodes = [...mobileRef.current.querySelectorAll(FOCUSABLE)];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen, closeMobile]);

  const isActive = (item) => {
    if (location.pathname === item.to) return true;
    if (item.sub) return item.sub.some((s) => location.pathname === s.to);
    return false;
  };

  return (
    <>
      {/* ─── DESKTOP: Horizontal top bar. Condenses on scroll; on very wide screens it
           hands over to the side rail instead. ─── */}
      <motion.header
        initial={false}
        animate={{
          y: sidebarMode ? -120 : 0,
          opacity: sidebarMode ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        inert={sidebarMode ? '' : undefined}
        className={`fixed top-0 left-0 w-full z-50 hidden lg:block transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-md border-line'
            : 'bg-gradient-to-b from-black/70 to-transparent border-white/10'
        }`}
      >
        <div className={`flex items-center justify-between gap-6 px-8 transition-[padding] duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="FA Kaunas – į pradžią"
              width={67}
              height={64}
              className={`w-auto transition-[height] duration-300 ${scrolled ? 'h-11' : 'h-16'}`}
            />
          </Link>

          <nav aria-label="Pagrindinė navigacija">
            <ul className="flex items-center">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem key={item.to} item={item} active={isActive(item)} pathname={location.pathname} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <SocialLinks className="hidden xl:flex gap-1" linkClassName="text-white/90 hover:text-white" size={15} />
            <Link to={trialCta.to} className="btn-blue !px-5 !py-2.5 !min-h-[40px] text-[12px]">
              {trialCta.label} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* ─── WIDE DESKTOP: Vertical side rail (visible when scrolled) ─── */}
      {wide && (
        <motion.nav
          initial={false}
          animate={{
            x: sidebarMode ? 0 : -200,
            opacity: sidebarMode ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          inert={sidebarMode ? undefined : ''}
          aria-label="Pagrindinė navigacija"
          className="fixed left-0 top-0 h-screen z-50 flex flex-col items-start py-6 pl-5 pr-6 w-auto bg-surface/95 backdrop-blur-md border-r border-line"
        >
          <Link to="/" className="mb-8">
            <img src="/logo.png" alt="FA Kaunas – į pradžią" width={59} height={56} className="h-14 w-auto" />
          </Link>

          <ul className="flex flex-col gap-1 flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={location.pathname === item.to ? 'page' : undefined}
                  className={`relative flex items-center px-3 py-2 text-[12px] uppercase tracking-[0.12em] font-semibold transition-colors duration-200 whitespace-nowrap ${
                    isActive(item) ? 'text-white' : 'text-fg-subtle hover:text-white'
                  }`}
                >
                  {isActive(item) && (
                    <motion.div
                      layoutId="side-indicator"
                      className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to={trialCta.to}
                className="flex items-center gap-2 px-3 py-2 text-[12px] uppercase tracking-[0.12em] font-semibold text-accent-bright hover:text-white transition-colors whitespace-nowrap"
              >
                {trialCta.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          </ul>

          <SocialLinks className="flex-col items-start" linkClassName="text-white/90 hover:text-white" size={16} />
        </motion.nav>
      )}

      {/* ─── MOBILE: Bar with CTA + burger, fullscreen menu ─── */}
      <div ref={mobileRef} className="lg:hidden">
        <div
          className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between gap-3 px-5 border-b transition-[padding,background-color,border-color] duration-300 ${
            scrolled || mobileOpen
              ? 'py-2 bg-surface/90 backdrop-blur-md border-line'
              : 'py-4 bg-gradient-to-b from-black/60 to-transparent border-transparent'
          }`}
        >
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="FA Kaunas – į pradžią"
              width={50}
              height={48}
              className={`w-auto transition-[height] duration-300 ${scrolled || mobileOpen ? 'h-10' : 'h-12'}`}
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to={trialCta.to}
              className="inline-flex min-h-[40px] items-center rounded-full bg-accent px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-hover"
            >
              {trialCta.label}
            </Link>
            <button
              ref={burgerRef}
              type="button"
              onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
              className="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-50"
              aria-label={mobileOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Meniu"
              className="fixed inset-0 z-40 bg-surface flex flex-col overflow-y-auto px-8 pt-24 pb-10"
            >
              <nav aria-label="Pagrindinė navigacija" className="my-auto">
                <ul>
                  {NAV_ITEMS.map((item, i) => (
                    <li key={item.to}>
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          aria-current={location.pathname === item.to ? 'page' : undefined}
                          className={`flex items-center py-3 border-b border-line group ${
                            isActive(item) ? 'text-white' : 'text-fg-muted'
                          }`}
                        >
                          <span className="text-3xl font-display font-extrabold uppercase group-hover:text-white transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>

                      {item.sub && (
                        <ul>
                          {item.sub.map((sub, j) => (
                            <motion.li
                              key={sub.to}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + i * 0.05 + j * 0.03, duration: 0.3 }}
                            >
                              <Link
                                to={sub.to}
                                onClick={() => setMobileOpen(false)}
                                aria-current={location.pathname === sub.to ? 'page' : undefined}
                                className={`flex items-center min-h-[44px] pl-6 text-sm uppercase tracking-[0.12em] border-b border-line/50 ${
                                  location.pathname === sub.to ? 'text-accent-bright' : 'text-fg-subtle hover:text-white'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-6"
              >
                <Link to={trialCta.to} onClick={() => setMobileOpen(false)} className="btn-blue w-full justify-center">
                  {trialCta.longLabel} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </Link>
                <SocialLinks className="gap-2 -ml-3" linkClassName="text-fg-muted hover:text-white" size={17} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
