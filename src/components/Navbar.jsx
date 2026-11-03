import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNav } from '../content';
import { SocialLinks } from './ui';

const NAV_ITEMS = mainNav;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setHoveredItem(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (item) => {
    if (location.pathname === item.to) return true;
    if (item.sub) return item.sub.some(s => location.pathname === s.to);
    return false;
  };

  return (
    <>
      {/* ─── DESKTOP: Horizontal top bar (visible when not scrolled) ─── */}
      <motion.header
        initial={false}
        animate={{
          y: scrolled ? -100 : 0,
          opacity: scrolled ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 w-full z-50 hidden lg:block pointer-events-auto bg-gradient-to-b from-black/70 to-transparent"
      >
        <div className="flex items-center justify-between px-8 py-4">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="FA Kaunas" className="h-16 w-auto" />
          </Link>

          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.to)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.to}
                  className={`group flex items-center gap-1.5 px-4 py-2 text-[13px] uppercase tracking-[0.15em] font-bold transition-colors duration-200 ${
                    isActive(item) ? 'text-white' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.sub && <ChevronDown size={13} className="text-fg-subtle" />}
                </Link>

                {isActive(item) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-academy-blue"
                    transition={{ duration: 0.3 }}
                  />
                )}

                <AnimatePresence>
                  {item.sub && hoveredItem === item.to && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 min-w-[220px] bg-academy-dark border border-academy-line py-2 z-50 rounded-2xl overflow-hidden"
                    >
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`block px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                            location.pathname === sub.to
                              ? 'text-accent-bright'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <SocialLinks className="gap-1" linkClassName="text-white/90 hover:text-white" size={15} />
        </div>
        <div className="h-px bg-white/10" />
      </motion.header>

      {/* ─── DESKTOP: Vertical side nav (visible when scrolled) ─── */}
      <motion.nav
        initial={false}
        animate={{
          x: scrolled ? 0 : -200,
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed left-0 top-0 h-screen z-50 hidden lg:flex flex-col items-start py-6 pl-5 pr-4 w-auto pointer-events-auto"
      >
        <Link to="/" className="mb-8">
          <img src="/logo.png" alt="FA Kaunas" className="h-14 w-auto" />
        </Link>

        <div className="flex flex-col gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative flex items-center px-3 py-2 text-[12px] uppercase tracking-[0.12em] font-semibold transition-colors duration-200 whitespace-nowrap ${
                isActive(item) ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {isActive(item) && (
                <motion.div
                  layoutId="side-indicator"
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-academy-blue"
                  transition={{ duration: 0.3 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>

        <SocialLinks className="flex-col items-start" linkClassName="text-white/90 hover:text-white" size={16} />
      </motion.nav>

      {/* ─── MOBILE: Burger + fullscreen menu ─── */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-4">
        <Link to="/">
          <img src="/logo.png" alt="FA Kaunas" className="h-12 w-auto" />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-academy-black flex flex-col justify-center px-8 lg:hidden"
          >
            <nav className="space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.to}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center py-3 border-b border-academy-line group ${
                        isActive(item) ? 'text-white' : 'text-white/50'
                      }`}
                    >
                      <span className="text-2xl font-display font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>

                  {item.sub && item.sub.map((sub, j) => (
                    <motion.div
                      key={sub.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 + j * 0.03, duration: 0.3 }}
                    >
                      <Link
                        to={sub.to}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center py-2 pl-6 text-sm uppercase tracking-[0.12em] border-b border-academy-line/50 ${
                          location.pathname === sub.to ? 'text-accent-bright' : 'text-fg-subtle hover:text-white/70'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-12"
            >
              <SocialLinks className="gap-2 -ml-3" linkClassName="text-fg-muted hover:text-white" size={17} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
