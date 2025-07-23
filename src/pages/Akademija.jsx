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
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-10 leading-relaxed text-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#0077cc] mb-4">Asmenybės ugdymas</h2>
            <p>
              Akademijos prioritetas – ne tik sportiniai rezultatai, bet ir <strong>vaikų asmenybės augimas</strong>.
              Treniruočių metu treneriai vengia griežtų nurodymų – vietoj to užduoda atvirus klausimus, kurie skatina vaikus mąstyti, priimti savarankiškus sprendimus ir ugdyti pasitikėjimą savimi bei kūrybiškumą.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-[#0077cc] mb-4">Sveikata ir partnerystė su Unomeda</h2>
            <p>
              FA KAUNAS skiria ypatingą dėmesį <strong>vaikų sveikatos priežiūrai</strong>. Bendradarbiaudami su medicinos klinika <strong>„Unomeda“</strong>, reguliariai (1–2 kartus per metus arba pagal poreikį) atliekame sporto gydytojo patikras.
              Klinikoje taip pat suteikiamos <strong>nemokamos specialistų konsultacijos</strong> (su siuntimu per TLK), o esant reikalui – ir skubi pirminė reabilitacija.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#0077cc] mb-4">Technologijos – Stats4Sport sistema</h2>
            <p>
              Siekdami nuolat tobulėti, kasdieniame darbe naudojame <strong>„Stats4Sport“</strong> sistemą. Ši platforma leidžia planuoti treniruotes, sekti kiekvieno auklėtinio progresą ir pastebėti ilgalaikius pokyčius.
              Tai ne tik naudinga treneriams – tai ir <strong>puikus įrankis tėvams</strong>, leidžiantis matyti treniruočių grafiką, lankomumą bei artėjančius renginius.
            </p>
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
