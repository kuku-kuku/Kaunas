import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from "../../components/BackgroundWrapper";

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: 'easeOut' }
  })
};

export default function Tikslai() {
  return (
    <main className="text-black font-sans">
      {/* HERO BLOKAS – be linijų */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tikslai ir vizija</h1>
          <p className="text-lg font-light max-w-2xl">
            FA Kaunas augimo kryptys ir vertybiniai siekiai
          </p>
        </motion.div>
      </section>

      {/* TURINIO BLOKAS SU LINIJŲ FONU */}
      <BackgroundWrapper>
        <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-24">
          {/* Akcentuotas įvadas – be bullet'ų */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 h-8 w-1.5 rounded-full bg-gradient-to-b from-[#0077cc] to-[#00bcd4]" />
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                  Futbolo, kaip sporto šakos populiarinimas ir puoselėjimas
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Modernūs bullet'ai */}
          <ul role="list" className="list-none space-y-6 text-lg leading-relaxed text-gray-800">
            {[
              <>
                <strong className="text-black">Masiškumas –</strong> į futbolo užsiėmimus pritraukti kuo daugiau berniukų bei mergaičių.
                Kiekvienoje treniruojamoje amžiaus grupėje turėti minimum po 2 komandas – taip kursime konkurencingą
                aplinką, kurioje vaikai greičiau tobulės.
              </>,
              <>
                <strong className="text-black">Individualus dėmesys kiekvienam sportininkui –</strong> komandos parinkimas atsižvelgiant į
                futbolininko stažą, motyvaciją, fizinę brandą ir kt.
              </>,
              <>
                <strong className="text-black">Iš visų sportuojančių vaikų pastebėti „deimantus“ –</strong> jiems skirti papildomą dėmesį ir dėti visas pastangas,
                kad sportininkas ateityje turėtų kuo didesnius šansus tapti profesionaliu futbolininku.
              </>,
              <>
                <strong className="text-black">Užauginti elitinio lygio futbolininką –</strong> Lietuvos nacionalinei rinktinei bei užsienio klubams,
                rungtyniaujantiems TOP Europos lygose.
              </>
            ].map((content, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={listVariants}
                className="flex items-start gap-4"
              >
                {/* Gradientinis „bullet“ taškas */}
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#0077cc] to-[#00bcd4] flex-shrink-0" />
                <span className="block">{content}</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
