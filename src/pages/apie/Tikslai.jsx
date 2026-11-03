import React from 'react';
import { motion } from 'framer-motion';

const goals = [
  <>
    <span className="text-white font-medium">Masiškumas –</span> į futbolo užsiėmimus pritraukti kuo daugiau berniukų bei mergaičių.
    Kiekvienoje treniruojamoje amžiaus grupėje turėti minimum po 2 komandas – taip kursime konkurencingą
    aplinką, kurioje vaikai greičiau tobulės.
  </>,
  <>
    <span className="text-white font-medium">Individualus dėmesys kiekvienam sportininkui –</span> komandos parinkimas atsižvelgiant į
    futbolininko stažą, motyvaciją, fizinę brandą ir kt.
  </>,
  <>
    <span className="text-white font-medium">Iš visų sportuojančių vaikų pastebėti „deimantus" –</span> jiems skirti papildomą dėmesį ir dėti visas pastangas,
    kad sportininkas ateityje turėtų kuo didesnius šansus tapti profesionaliu futbolininku.
  </>,
  <>
    <span className="text-white font-medium">Užauginti elitinio lygio futbolininką –</span> Lietuvos nacionalinei rinktinei bei užsienio klubams,
    rungtyniaujantiems TOP Europos lygose.
  </>,
];

export default function Tikslai() {
  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">01 / Tikslai</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Tikslai ir vizija
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              FA Kaunas augimo kryptys ir vertybiniai siekiai
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-10 bg-academy-blue flex-shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
                Futbolo, kaip sporto šakos populiarinimas ir puoselėjimas
              </h2>
            </div>
          </motion.div>

          <div className="space-y-0">
            {goals.map((content, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-6 py-6 border-b border-academy-line"
              >
                <span className="text-[13px] font-mono text-accent-bright w-8 flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-lg text-white/60 leading-relaxed">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
