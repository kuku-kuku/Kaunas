import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from '../components/BackgroundWrapper';

export default function About() {
  return (
    <main className="text-black font-sans">
      {/* HERO – išlieka be linijų */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apie mus</h1>
            <p className="text-lg font-light max-w-2xl">
              Sužinokite, kaip gimė mūsų akademija ir kokiomis vertybėmis vadovaujamės kasdien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TURINIO BLOKAS SU LINIJŲ FONU */}
      <BackgroundWrapper>
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ISTORIJA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">Istorija</h2>
              <div className="space-y-5 text-lg text-gray-800 leading-relaxed text-justify">
                <p>
                  „FA KAUNAS“ įkurta 2022 m. lapkritį. Akademijos steigėjais tapo buvęs profesionalus
                  futbolininkas <strong>Gabrielius Zagurskas</strong> ir medikas, futbolo entuziastas{' '}
                  <strong>Vytautas Jakubauskas</strong>.
                </p>
                <p>
                  Vedami milžiniško entuziazmo ir svajonės suteikti galimybę jauniesiems futbolininkams
                  tapti profesionalais, steigėjai įkūrė savo futbolo akademiją, kurioje dirbama pagal
                  europinius standartus, siekiant vaikų svajonę paversti realybe.
                </p>
              </div>
            </motion.div>

            {/* VERTYBĖS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">Vertybės</h2>
              <ul className="space-y-4 text-lg text-gray-800 leading-relaxed list-disc list-inside">
                <li>
                  <span className="font-semibold text-[#0077cc]">Bendruomeniškumas</span> – bendras darbas su tėvais,
                  partneriais, treneriais ir vaikais.
                </li>
                <li>
                  <span className="font-semibold text-[#0077cc]">Aistra</span> – meilė futbolui, noras tobulėti kiekvieną dieną.
                </li>
                <li>
                  <span className="font-semibold text-[#0077cc]">Pagarba</span> – komandos draugams, varžovams, sau ir žaidimui.
                </li>
                <li>
                  <span className="font-semibold text-[#0077cc]">Dėkingumas</span> – už galimybes, už pagalbą, už buvimą kartu.
                </li>
                <li>
                  <span className="font-semibold text-[#0077cc]">Supratingumas</span> – kantrybė ir palaikymas kiekvieno kelionėje.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
