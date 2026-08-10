import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VALUES = [
  { id: 'center', label: 'PAGARBA', desc: 'Gerbti vieni kitus, komandos draugus, varžovus, aplinką kurioje esame.' },
  { id: 'top', label: 'Bendruomeniškumas', desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.' },
  { id: 'right', label: 'Disciplina', desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.' },
  { id: 'bottom', label: 'Supratingumas', desc: 'Kantrybė vieni kitų atžvilgiu.' },
  { id: 'left', label: 'Dėkingumas', desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.' },
];

export default function About() {
  const [activeValue, setActiveValue] = useState(null);

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
            <p className="section-label mb-4">01 / Apie mus</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Apie mus
            </h1>
            <p className="text-lg text-white/40 font-light max-w-xl">
              Sužinokite, kaip gimė mūsų akademija ir kokiomis vertybėmis vadovaujamės kasdien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ HISTORY ═══ */}
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
            <h2 className="text-display text-3xl md:text-4xl text-white mb-2">Istorija</h2>
            <div className="w-12 h-px bg-academy-blue mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              „FA KAUNAS" įkurta 2022 m. lapkritį. Akademijos steigėjais tapo buvęs profesionalus
              futbolininkas <span className="text-white font-medium">Gabrielius Zagurskas</span> ir medikas, futbolo entuziastas{' '}
              <span className="text-white font-medium">Vytautas Jakubauskas</span>.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Vedami milžiniško entuziazmo ir svajonės suteikti galimybę jauniesiems futbolininkams
              tapti profesionalais, steigėjai įkūrė savo futbolo akademiją, kurioje dirbama pagal
              europinius standartus, siekiant vaikų svajonę paversti realybe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-number mb-3">02</p>
            <h2 className="text-display text-3xl md:text-4xl text-white">Vertybės</h2>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-academy-line">
            {VALUES.map((value, i) => (
              <motion.button
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-academy-black p-8 text-left group transition-colors duration-300 ${
                  activeValue === value.id ? 'bg-academy-blue/10' : 'hover:bg-white/[0.02]'
                } ${value.id === 'center' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
              >
                <p className={`text-[11px] uppercase tracking-[0.2em] mb-3 transition-colors duration-300 ${
                  activeValue === value.id ? 'text-academy-blue' : 'text-white/30'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`text-lg font-display font-bold uppercase tracking-tight mb-3 transition-colors duration-300 ${
                  value.id === 'center' ? 'text-academy-blue' : activeValue === value.id ? 'text-white' : 'text-white/80'
                }`}>
                  {value.label}
                </h3>
                <div className={`w-8 h-px mb-4 transition-all duration-300 ${
                  activeValue === value.id ? 'bg-academy-blue w-12' : 'bg-academy-line'
                }`} />
                <p className="text-sm text-white/40 leading-relaxed">
                  {value.desc}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
