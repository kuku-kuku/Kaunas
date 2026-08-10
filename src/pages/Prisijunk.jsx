import React from "react";
import { motion } from "framer-motion";

export default function Prisijunk() {
  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">03 / Prisijunk</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Prisijunk prie mūsų šeimos
            </h1>
            <p className="text-lg text-white/40 font-light max-w-2xl">
              Kviečiame tapti mūsų akademijos dalimi – skirdami 1,2% GPM arba tapdami rėmėjais, prisidedate
              prie vaikų svajonių įgyvendinimo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ COMMUNITY ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-academy-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-number mb-3">01</p>
            <h2 className="text-display text-3xl md:text-4xl text-white mb-6">Mūsų bendruomenė</h2>
            <div className="w-12 h-px bg-academy-blue mb-8" />
            <div className="space-y-5 text-lg text-white/60 leading-relaxed">
              <p>
                Kartu kuriame aplinką, kurioje vaikai jaučiasi saugiai, drąsiai ir motyvuotai. Mūsų
                bendruomenė – tai tėvai, treneriai, savanoriai ir rėmėjai, kasdien prisidedantys prie
                augančių talentų.
              </p>
              <p>
                Prisidėdami jūs padedate mums organizuoti turnyrus, gerinti treniruočių bazę, aprūpinti
                inventoriumi ir atverti daugiau galimybių vaikams sporte bei gyvenime.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <img
              src="/bendruomene.jpg"
              alt="FA Kaunas bendruomenė"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 border border-academy-line pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ═══ 1.2% SUPPORT ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-academy-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="section-number mb-3">02</p>
            <h2 className="text-display text-5xl md:text-6xl text-academy-blue mb-2">1,2%</h2>
            <h3 className="text-display text-2xl text-white">Parama</h3>
            <div className="w-12 h-px bg-academy-line mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              Skirdami 1,2% savo pajamų mokesčio FA Kaunas, prisidedate prie jaunimo ugdymo, sportinių
              sąlygų gerinimo ir vaikų svajonių įgyvendinimo.
            </p>
            <p className="text-white/60">
              VMI Elektroninio deklaravimo sistema (EDS):{" "}
              <a href="https://deklaravimas.vmi.lt/" target="_blank" rel="noopener noreferrer"
                className="text-academy-blue hover:underline">
                https://deklaravimas.vmi.lt/
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ INSTRUCTIONS ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-academy-line">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-number mb-3">03</p>
            <h2 className="text-display text-2xl md:text-3xl text-white mb-10">
              Kaip skirti 1,2% – žingsnis po žingsnio:
            </h2>

            <div className="space-y-0">
              {[
                "Prisijunkite prie EDS sistemos",
                "Pasirinkite: Prašymas skirti paramą",
                "Forma: FR0512 v.5",
                "E1: 2 (paramos gavėjas)",
                "E2: 306181717",
                "E3: FA Kaunas",
                "E4: 1,2%",
                "Pateikite deklaraciją",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-6 py-4 border-b border-academy-line group"
                >
                  <span className="text-[13px] font-mono text-academy-blue w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white/70 group-hover:text-white transition-colors">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PARTNERSHIP ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="section-number mb-3">04</p>
            <h2 className="text-display text-2xl md:text-3xl text-white">
              Norite tapti rėmėjais ar partneriais?
            </h2>
            <div className="w-12 h-px bg-academy-blue mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Juridiniai ir fiziniai asmenys, norintys remti futbolo vystymą ir jaunimo ugdymą –
              susisiekite su mumis:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-academy-line">
              <div className="bg-academy-black p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2">Telefonas</p>
                <a href="tel:+37066527501" className="text-white hover:text-academy-blue transition-colors">
                  +370 665 27501
                </a>
              </div>
              <div className="bg-academy-black p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2">El. paštas</p>
                <a href="mailto:administracija@fakaunas.lt" className="text-white hover:text-academy-blue transition-colors">
                  administracija@fakaunas.lt
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
