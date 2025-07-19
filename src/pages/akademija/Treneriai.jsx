import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundWrapper from '../../components/BackgroundWrapper';

const treneriai = [
  {
    id: 1,
    vardas: 'Gabrielius Zagurskas',
    amzius: 35,
    nuotrauka: '/treneriai/zagas.jpg',
    trumpai: 'UEFA B licencijos treneris, buvęs profesionalas, dirbantis su vaikais nuo 2021 metų.',
    aprasymas: `Gabrielius yra vienas iš akademijos įkūrėjų. Jaunas, kupinas energijos, nestokojantis geros nuotaikos treneris, profesionalaus futbolininko karjerą baigęs 2021 m. Nuo to laiko visą dėmesį skiria jaunųjų futbolininkų ugdymui.

UEFA B licencija

Žaidėjo karjera:
- u-16; u-17; u-19 Lietuvos jaunimo rinktinės
- 2 rungtynės Lietuvos nacionalinėje B rinktinėje
- 2008–2009 HB Koge (Danija)
- 2011–2012 FK Nevezis
- 2012–2013 FK Atlantas
- 2013–2014 Dotieas Agia (Graikija)
- 2014–2017 FK Utenis
- 2017–2018 UMF Vikingur Olafsvik (Islandija)
- 2018–2019 FK Kauno Žalgiris
- 2019–2019 UMF Snaefell (Islandija)
- 2019–2021 FC Hegelmann Litauen

Trenerio karjera:
- 2016–2017 FA Utenis U-16; U-12
- 2020–2023 FM Fortūna U-15
- U-8 vyr. treneris
- 2021–2022 FM Fortūna LFF 2 lyga vyr. treneris
- 2021 – dabar HB Koge U-19 Head of analytics`,
  },
  {
    id: 2,
    vardas: 'Lukas Sipavičius',
    amzius: 32,
    nuotrauka: '/treneriai/sipavicius.jpg',
    trumpai: 'Lietuvos salės futbolo rinktinės narys, LFF D licencijos treneris.',
    aprasymas: `Lukas – jaunas treneris, sukaupęs didelę patirtį dirbdamas su jaunimu. Buvęs Kauno Žalgirio futsal komandos žaidėjas, atstovavęs I lygos klubams.

Pasiekimai:
- Lietuvos salės futbolo čempionas
- 2 kartus LFF taurės nugalėtojas
- LFF supertaurės nugalėtojas
- Baltijos taurės nugalėtojas

Licencija: LFF D`,
  },
  {
    id: 3,
    vardas: 'Ernestas Bernota',
    amzius: 28,
    nuotrauka: '/treneriai/bernota.jpg',
    trumpai: 'Ambicingas vartininkų treneris, sukaupęs patirties Sūduvoje ir kituose klubuose.',
    aprasymas: `Ernestas – ambicingas ir žingeidus treneris, visada siekiantis tobulėti.

Futbolininko karjerą pradėjo Marijampolėje, kur perėjo visas amžiaus grupes. Sukaupė nemažą patirtį kaip vartininkas, treniruotas vieno geriausių vartininkų trenerių Lietuvoje – Audriaus Ramono.

Klubai:
- Marijampolės Sūduvos dubleriai
- Įvairūs II lygos ir žemesnių lygų klubai

Licencija: LFF D`,
  },
];

export default function Treneriai() {
  const [aktyvus, setAktyvus] = useState(null);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mūsų treneriai</h1>
          <p className="text-lg font-light max-w-2xl">
            Susipažinkite su mūsų komandos nariais – atsidavusiais, patyrusiais ir įkvepiančiais treneriais.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {treneriai.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setAktyvus(t.id)}
              >
                <img
                  src={t.nuotrauka}
                  alt={t.vardas}
                  className="w-full h-[360px] object-cover object-top"
                />
                {/* Permatomas vardas apačioje */}
                <div className="absolute bottom-0 left-0 w-full bg-white/70 backdrop-blur-md text-black px-4 py-2">
                  <h2 className="text-lg font-semibold">{t.vardas}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </BackgroundWrapper>

      {/* MODALAS */}
      <AnimatePresence>
        {aktyvus !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center px-6"
            onClick={() => setAktyvus(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl text-gray-800 overflow-y-auto max-h-[80vh] font-sans leading-relaxed border-t-4 border-[#4fc3f7]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setAktyvus(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
                aria-label="Uždaryti"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold mb-2 text-[#007bb5]">
                {treneriai.find((t) => t.id === aktyvus)?.vardas}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Amžius: {treneriai.find((t) => t.id === aktyvus)?.amzius}
              </p>
              <p className="text-base font-medium mb-4 text-gray-800">
                {treneriai.find((t) => t.id === aktyvus)?.trumpai}
              </p>
              <p className="whitespace-pre-line">
                {treneriai.find((t) => t.id === aktyvus)?.aprasymas}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
