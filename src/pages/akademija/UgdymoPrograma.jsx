import React from 'react';
import { motion } from 'framer-motion';

export default function Ugdymas() {
  const grupes = [
    { metai: '2015 / 2016', grupe: 'A', vyrTreneris: 'Gabrielius Zagurskas', asistentai: ['Marius Činikas'] },
    { metai: '2015 / 2016', grupe: 'B', vyrTreneris: 'Lukas Sipavičius', asistentai: ['Tomas Macelis'] },
    { metai: '2017 / 2018', grupe: null, vyrTreneris: 'Marius Činikas', asistentai: ['Ernestas Bernota'] },
    { metai: '2019 / 2020 / 2021', grupe: null, vyrTreneris: 'Tomas Macelis', asistentai: ['Lukas Sipavičius', 'Gabrielius Zagurskas'] },
  ];

  const methodology = [
    'Techninių įgūdžių tobulinimas',
    'Taktinio mąstymo ugdymas',
    'Psichologinis stabilumas ir bendravimas',
    'Asmenybės ir vertybių formavimas',
    'Fizinio pasirengimo lavinimas',
  ];

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">02 / Ugdymo programa</p>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              Ugdymo programa ir amžiaus grupės
            </h1>
            <p className="text-lg text-white/40 font-light max-w-xl">
              Susipažinkite su mūsų ugdymo principais ir treniruojamomis vaikų grupėmis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ METHODOLOGY ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-academy-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="section-number mb-3">01</p>
            <h2 className="text-display text-3xl md:text-4xl text-white mb-6">Mūsų ugdymo metodika</h2>
            <div className="w-12 h-px bg-academy-blue mb-8" />
            <p className="text-lg text-white/60 leading-relaxed">
              FA Kaunas jaunimo ugdymo programa orientuota į visapusišką vaiko tobulėjimą. Daug dėmesio skiriama ne tik
              techniniams ir taktiniams futbolo aspektams, bet ir asmenybės vystymui bei vertybėms:
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            {methodology.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-6 py-5 border-b border-academy-line group"
              >
                <span className="text-[13px] font-mono text-academy-blue w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white/70 group-hover:text-white transition-colors text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGE GROUPS ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="section-number mb-3">02</p>
            <h2 className="text-display text-3xl md:text-4xl text-white">
              Treniruojamos amžiaus grupės
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-academy-line">
            {grupes.map((g, idx) => (
              <motion.div
                key={`${g.metai}-${g.vyrTreneris}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-academy-black p-8 md:p-10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-mono text-academy-blue">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight mt-1">
                      {g.metai}
                    </h3>
                  </div>
                  {g.grupe && (
                    <span className="text-[11px] uppercase tracking-[0.15em] border border-academy-line text-white/40 px-3 py-1">
                      Grupė {g.grupe}
                    </span>
                  )}
                </div>

                <div className="h-px bg-academy-line mb-4" />

                <p className="text-white/60 mb-2">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/30">Vyr. treneris</span>
                  <br />{g.vyrTreneris}
                </p>

                {g.asistentai?.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/30">Asistentai</span>
                    {g.asistentai.map((v, i) => (
                      <p key={i} className="text-white/50">{v}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
