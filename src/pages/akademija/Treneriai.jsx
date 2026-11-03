import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coaches as treneriai } from '../../content';

export default function Treneriai() {
  const [aktyvus, setAktyvus] = useState(null);
  const dialogRef = useRef(null);

  const activeTrainer = useMemo(
    () => treneriai.find((t) => t.id === aktyvus) || null,
    [aktyvus]
  );

  useEffect(() => {
    if (aktyvus !== null) {
      const onKeyDown = (e) => { if (e.key === 'Escape') setAktyvus(null); };
      document.addEventListener('keydown', onKeyDown);
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => dialogRef.current?.focus(), 0);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = prev;
      };
    }
  }, [aktyvus]);

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">02 / Treneriai</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Mūsų treneriai
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              Susipažinkite su mūsų komandos nariais – atsidavusiais, patyrusiais ir įkvepiančiais treneriais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRAINERS ROSTER ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {treneriai.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="w-full text-left border-b border-academy-line group"
              onClick={() => setAktyvus(t.id)}
              aria-label={`Daugiau apie trenerį ${t.vardas}`}
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 items-center">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[13px] font-mono text-accent-bright">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="col-span-3 md:col-span-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                    <img
                      src={t.nuotrauka}
                      alt={t.vardas}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="col-span-5 md:col-span-7">
                  <h2 className="text-lg md:text-2xl font-display font-bold text-white uppercase tracking-tight group-hover:text-accent-bright transition-colors duration-200">
                    {t.vardas}
                  </h2>
                  <p className="text-sm text-fg-subtle mt-1 hidden md:block">{t.trumpai}</p>
                </div>

                <div className="col-span-2 flex justify-end">
                  <span className="text-fg-subtle group-hover:text-accent-bright group-hover:translate-x-1 transition-all duration-200 text-lg">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ═══ MODAL ═══ */}
      <AnimatePresence>
        {activeTrainer && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center px-6"
            onClick={() => setAktyvus(null)}
          >
            <motion.div
              key="dialog"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="trainer-title"
              tabIndex={-1}
              ref={dialogRef}
              className="relative bg-academy-dark border border-academy-line max-w-2xl w-full p-8 md:p-10 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setAktyvus(null)}
                className="absolute top-4 right-4 text-fg-subtle hover:text-white text-2xl transition-colors"
                aria-label="Uždaryti"
              >
                &times;
              </button>

              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                  <img src={activeTrainer.nuotrauka} alt={activeTrainer.vardas} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h2 id="trainer-title" className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                    {activeTrainer.vardas}
                  </h2>
                  <p className="text-sm text-fg-subtle mt-1">Amžius: {activeTrainer.amzius || '—'}</p>
                </div>
              </div>

              <div className="w-full h-px bg-academy-line mb-6" />

              <p className="text-white/60 font-medium mb-6">{activeTrainer.trumpai}</p>
              <p className="whitespace-pre-line text-white/50 leading-relaxed text-sm">{activeTrainer.aprasymas}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
