import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from "../../components/BackgroundWrapper";

export default function Tikslai() {
  return (
    <main className="text-black font-sans">
      {/* HERO BLOKAS – be linijų */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tikslai ir vizija</h1>
          <p className="text-lg font-light max-w-2xl">
            FA Kaunas augimo kryptys ir vertybiniai siekiai
          </p>
        </motion.div>
      </section>

      {/* TURINIO BLOKAS SU LINIJŲ FONU */}
      <BackgroundWrapper>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-24"
        >
          <ul className="space-y-6 text-lg leading-relaxed text-gray-800">
            <li>
              <strong className="text-black">
                Futbolo, kaip sporto šakos populiarinimas ir puoselėjimas
              </strong>
            </li>
            <li>
              <strong className="text-black">Masiškumas –</strong> į futbolo užsiėmimus pritraukti kuo daugiau berniukų bei mergaičių.
              Kiekvienoje treniruojamoje amžiaus grupėje turėti minimum po 2 komandas – taip kursime konkurencingą
              aplinką, kurioje vaikai greičiau tobulės.
            </li>
            <li>
              <strong className="text-black">Individualus dėmesys kiekvienam sportininkui –</strong> komandos parinkimas atsižvelgiant į
              futbolininko stažą, motyvaciją, fizinę brandą ir kt.
            </li>
            <li>
              <strong className="text-black">Iš visų sportuojančių vaikų pastebėti „deimantus“ –</strong> jiems skirti papildomą dėmesį ir dėti visas pastangas,
              kad sportininkas ateityje turėtų kuo didesnius šansus tapti profesionaliu futbolininku.
            </li>
            <li>
              <strong className="text-black">Užauginti elitinio lygio futbolininką –</strong> Lietuvos nacionalinei rinktinei bei užsienio klubams,
              rungtyniaujantiems TOP Europos lygose.
            </li>
          </ul>
        </motion.section>
      </BackgroundWrapper>
    </main>
  );
}
