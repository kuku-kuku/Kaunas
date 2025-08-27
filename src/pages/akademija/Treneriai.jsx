import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import BackgroundWrapper from '../../components/BackgroundWrapper';

const treneriai = [
  {
    id: 1,
    vardas: 'Gabrielius Zagurskas',
    amzius: 33,
    nuotrauka: '/treneriai/cinikas.jpg', // laikinai visiems ta pati
    trumpai: 'Buvęs profesionalus futbolininkas, nuo 2021 metų visą dėmesį skiriantis futbolininkų treniravimui.',
    aprasymas: `UEFA A licencija

Gabrielius yra vienas iš akademijos įkūrėjų. Jaunas, kupinas energijos, nestokojantis geros nuotaikos treneris, profesionalaus futbolininko karjerą baigęs 2021 m. Nuo to laiko visą dėmesį skiria jaunųjų futbolininkų ugdymui.

Žaidėjo karjera:
- U-16; U-17; U-19 Lietuvos jaunimo rinktinės
- 2 rungtynės Lietuvos nacionalinėje B rinktinėje
- 2008–2009 HB Køge (Danija)
- 2011–2012 FK Nevėžis (Lietuva)
- 2012–2013 FK Atlantas (Lietuva)
- 2013–2014 Dotieas Agia (Graikija)
- 2014–2017 FK Utenis (Lietuva)
- 2017–2018 UMF Víkingur Ólafsvík (Islandija)
- 2018–2019 FK Kauno Žalgiris (Lietuva)
- 2019 UMF Snæfell (Islandija)
- 2019–2021 FC Hegelmann Litauen (Lietuva)

Trenerio karjera:
- 2016–2017 FA Utenis U-16; U-12 treneris
- 2020–2023 FM Fortūna U-15 treneris
- U-8 vyr. treneris
- 2021–2022 FM Fortūna — LFF 2 lyga vyr. treneris
- 2021–2023 HB Køge U-19 — Head of Analytics
- 2023–dabar LFF Regioninių talentų centras U10/U11 — vyr. treneris
- 2024–dabar LFF U15 — nacionalinės rinktinės asistentas
- 2025–dabar LFF 2 lyga — Kybartų „Sveikata“ vyr. treneris`,
  },
  {
    id: 4,
    vardas: 'Marius Činikas',
    amzius: 39,
    nuotrauka: '/treneriai/cinikas.jpg',
    trumpai: 'Buvęs profesionalus futbolininkas, per savo karjerą sukaupęs nemenką žinių bagažą.',
    aprasymas: `UEFA B licencija

Nuolat tobulinantis savo kompetencijas, pasiruošęs patirtį perduoti jauniesiems futbolininkams.

Pasiekimai:
- 3 kart Lietuvos čempionas
- Supertaurės laimėtojas
- Estijos aukščiausios lygos 2 vietos laimėtojas

Žaidėjo karjera:
- U-17; U-19; U-21 Lietuvos jaunimo rinktinių narys
- 2006–2007 FK Nevėžis (Lietuva)
- 2008–2010 FBK Kaunas (Lietuva)
- 2009–2010 Heart of Midlothian FC (Škotija)
- 2010–2011 Partizan Minsk (Baltarusija)
- 2011–2012 Metalurgs (Latvija)
- 2012–2013 FK Minsk (Baltarusija)
- 2013–2014 Sillamäe Kalev (Estija)
- 2014–2017 FK „Sūduva“ (Lietuva) / Sillamäe Kalev (Estija)
- 2017–2019 FK „Sūduva“ (Lietuva) / FK „Jonava“ (Lietuva)
- 2019–2021 FK „Atlantas“ (Lietuva) / FK „Jonava“ (Lietuva)`,
  },
  {
    id: 2,
    vardas: 'Lukas Sipavičius',
    amzius: 26,
    nuotrauka: '/treneriai/cinikas.jpg',
    trumpai: 'Lietuvos salės futbolo rinktinės narys, UEFA C licencijos treneris.',
    aprasymas: `UEFA C licencija

Lukas – jaunas treneris, sukaupęs didelę patirtį dirbdamas su jaunimu. Buvęs Kauno „Žalgirio“ futsal komandos žaidėjas, atstovavęs I lygos klubams.

Pasiekimai:
- Lietuvos salės futbolo čempionas
- 2 kartus LFF taurės nugalėtojas
- LFF supertaurės nugalėtojas
- Baltijos taurės nugalėtojas`,
  },
  {
    id: 5,
    vardas: 'Tomas Macelis',
    amzius: 23,
    nuotrauka: '/treneriai/cinikas.jpg',
    trumpai: 'Kauno Žalgirio akademijos auklėtinis, patirtį kaupęs jaunimo komandose ir LFF 2 lygoje.',
    aprasymas: `UEFA C licencija

Kauno Žalgirio akademijos auklėtinis rungtyniavęs jaunimo komandose. 
Vėliau treneris rungtyniavo LFF 2 lygoje VJFM Fortūnos komandoje, tuo pačiu pradėjo treniruoti jaunąją kartą.

2022 prisijungė prie FA KAUNAS.

Studijuoja Lietuvos sporto universitete. Treniravimo sistemų programoje, pasirinkęs atletinio rengimo specializaciją.`,
  },
  {
    id: 3,
    vardas: 'Ernestas Bernota',
    amzius: 32,
    nuotrauka: '/treneriai/cinikas.jpg',
    trumpai: 'Ambicingas treneris, sukaupęs patirties Marijampolės Sūduvoje ir kitose komandose.',
    aprasymas: `Licencija: LFF D

Ernestas – ambicingas ir žingeidus treneris, visada siekiantis tobulėti. Futbolininko karjerą pradėjo Marijampolėje, kur perėjo visas amžiaus grupes. Sukaupė nemažą patirtį kaip vartininkas, treniruotas vieno geriausių vartininkų trenerių Lietuvoje – Audriaus Ramono.

Klubai:
- Marijampolės „Sūduvos“ dubleriai
- Įvairūs II lygos ir žemesnių lygų klubai`,
  },
];

export default function Treneriai() {
  const [aktyvus, setAktyvus] = useState(null);
  const dialogRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const activeTrainer = useMemo(
    () => treneriai.find((t) => t.id === aktyvus) || null,
    [aktyvus]
  );

  useEffect(() => {
    if (aktyvus !== null) {
      const onKeyDown = (e) => {
        if (e.key === 'Escape') setAktyvus(null);
      };
      document.addEventListener('keydown', onKeyDown);

      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => dialogRef.current?.focus(), 0);

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = prev;
      };
    }
  }, [aktyvus]);

  const cardVariants = {
    hidden: shouldReduce
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.985, filter: 'blur(6px)' },
    show: (i) =>
      shouldReduce
        ? { opacity: 1, transition: { duration: 0.25, delay: i * 0.03 } }
        : {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
          },
  };

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
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {treneriai.map((t, i) => (
              <motion.button
                key={t.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative rounded-2xl shadow-xl overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                onClick={() => setAktyvus(t.id)}
                aria-label={`Daugiau apie trenerį ${t.vardas}`}
              >
                <img
                  src={t.nuotrauka}
                  alt={t.vardas}
                  loading="lazy"
                  className="w-full h-[360px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/75 backdrop-blur-md text-black px-4 py-3">
                  <h2 className="text-lg font-semibold">{t.vardas}</h2>
                  <p className="text-sm text-gray-700">Daugiau apie trenerį</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </BackgroundWrapper>

      {/* MODALAS */}
      <AnimatePresence>
        {activeTrainer && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center px-6"
            onClick={() => setAktyvus(null)}
          >
            <motion.div
              key="dialog"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="trainer-title"
              tabIndex={-1}
              ref={dialogRef}
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

              <h2 id="trainer-title" className="text-2xl font-bold mb-2 text-[#007bb5]">
                {activeTrainer.vardas}
              </h2>
              <p className="text-sm text-gray-600 mb-2">Amžius: {activeTrainer.amzius || '—'}</p>
              <p className="text-base font-medium mb-4 text-gray-800">{activeTrainer.trumpai}</p>
              <p className="whitespace-pre-line">{activeTrainer.aprasymas}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
