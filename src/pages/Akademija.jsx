import React from 'react';
import { motion } from 'framer-motion';
import { technology } from '../content';

export default function Akademija() {

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">02 / Akademija</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Akademija
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              FA KAUNAS – daugiau nei futbolas. Čia ugdome stiprias asmenybes, ne tik žaidėjus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PERSONALITY DEVELOPMENT ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-academy-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="section-number mb-3">01</p>
            <h2 className="text-display text-3xl md:text-4xl text-white mb-2">Asmenybės ugdymas</h2>
            <div className="w-12 h-px bg-academy-blue mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              Akademijos prioritetas – ne tik sportiniai rezultatai, bet ir <span className="text-white font-medium">vaikų asmenybės augimas</span>.
              Treniruočių metu treneriai vengia griežtų nurodymų – vietoj to užduoda atvirus klausimus, kurie skatina vaikus mąstyti,
              priimti savarankiškus sprendimus ir ugdyti pasitikėjimą savimi bei kūrybiškumą.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="section-number mb-3">02</p>
            <h2 className="text-display text-3xl md:text-4xl text-white">Technologijos</h2>
          </motion.div>

          <div className="space-y-0">
            {technology.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-academy-line py-10 grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                <div className="md:col-span-1">
                  <span className="text-[11px] font-mono text-accent-bright">{item.num}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-academy-line" />
          </div>
        </div>
      </section>
    </main>
  );
}
