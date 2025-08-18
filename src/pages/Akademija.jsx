import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from '../components/BackgroundWrapper';

export default function Akademija() {
  return (
    <main className="text-black font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Akademija</h1>
          <p className="text-lg font-light max-w-2xl">
            FA KAUNAS – daugiau nei futbolas. Čia ugdome stiprias asmenybes, ne tik žaidėjus.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-16 leading-relaxed text-lg">
          {/* Asmenybės ugdymas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#0077cc] mb-4">Asmenybės ugdymas</h2>
            <p className="text-gray-800">
              Akademijos prioritetas – ne tik sportiniai rezultatai, bet ir <strong>vaikų asmenybės augimas</strong>.
              Treniruočių metu treneriai vengia griežtų nurodymų – vietoj to užduoda atvirus klausimus, kurie skatina vaikus mąstyti,
              priimti savarankiškus sprendimus ir ugdyti pasitikėjimą savimi bei kūrybiškumą.
            </p>

            {/* Skiriamoji linija */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
          </motion.div>

          {/* Technologijos */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h2 className="text-2xl font-bold text-[#0077cc] mb-8">Technologijos</h2>

            <div className="relative pl-14">
              {/* Jungiamoji vertikali linija */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-300 via-sky-100 to-transparent"
                aria-hidden
              />

              <ul className="space-y-8">
                <TechItem
                  title="Stats4Sport"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                      <path d="M4 20h16M6 16V8m6 8V4m6 16v-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  }
                >
                  Siekdami nuolat tobulėti, kasdieniame darbe naudojame „Stats4Sport“ sistemą. Ši platforma leidžia planuoti
                  treniruotes, kurti žaidėjo profilį, sekti kiekvieno auklėtinio progresą ir stebėti ilgalaikius pokyčius.
                  Sistema naudinga ne tik treneriams – tai ir puikus įrankis tėvams, leidžiantis matyti treniruočių grafiką,
                  lankomumą bei artėjančius renginius.
                </TechItem>

                <TechItem
                  title="VEO Sports technology"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                      <path d="M4 7h16l-2 10H6L4 7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  }
                >
                  VEO Sports technology – pažangių technologijų pagalba filmuojamos treniruotės ir rungtynės.
                  Dirbtinis intelektas apdoroja medžiagą, kurios pagalba galime peržiūrėti, analizuoti, koreguoti ir pritaikyti
                  surinktą informaciją kasdieniame treniruočių procese.
                </TechItem>

                <TechItem
                  title="LiveTagPRO"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                      <path d="M5 7h10a4 4 0 0 1 0 8H5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M15 12l4 3V9z" fill="currentColor"/>
                    </svg>
                  }
                >
                  LiveTagPRO – video analizių programa, leidžianti efektyviai ir sklandžiai perteikti informaciją žaidėjams,
                  vykdyti treniruočių ir rungtynių analizes su treneriais.
                </TechItem>
              </ul>
            </div>
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}

/* ====== Mažos, elegantiškos „media“ eilutės su skiriamąja linija ====== */
function TechItem({ title, icon, children }) {
  return (
    <motion.li
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45 }}
      className="relative"
    >
      {/* Ženkliukas */}
      <div className="absolute left-0 top-1">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          {icon}
        </div>
      </div>

      {/* Tekstas */}
      <div className="pl-14">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-800 mt-1">{children}</p>

        {/* subtili skiriamoji linija po elementu */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-sky-100 to-transparent" />
      </div>
    </motion.li>
  );
}
