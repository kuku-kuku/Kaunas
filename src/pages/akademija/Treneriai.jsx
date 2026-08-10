import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const treneriai = [
  {
    id: 1,
    vardas: 'Gabrielius Zagurskas',
    amzius: 33,
    nuotrauka: '/treneriai/cinikas.jpg',
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
- 2025–dabar LFF 2 lyga — Kybartų „Sveikata" vyr. treneris`,
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
- 2014–2017 FK „Sūduva" (Lietuva) / Sillamäe Kalev (Estija)
- 2017–2019 FK „Sūduva" (Lietuva) / FK „Jonava" (Lietuva)
- 2019–2021 FK „Atlantas" (Lietuva) / FK „Jonava" (Lietuva)`,
  },
  {
    id: 2,
    vardas: 'Lukas Sipavičius',
    amzius: 26,
    nuotrauka: '/treneriai/cinikas.jpg',
    trumpai: 'Lietuvos salės futbolo rinktinės narys, UEFA C licencijos treneris.',
    aprasymas: `UEFA C licencija

Lukas – jaunas treneris, sukaupęs didelę patirtį dirbdamas su jaunimu. Buvęs Kauno „Žalgirio" futsal komandos žaidėjas, atstovavęs I lygos klubams.

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
- Marijampolės „Sūduvos" dubleriai
- Įvairūs II lygos ir žemesnių lygų klubai`,
  },
];

export default function Treneriai() {
  const [aktyvus, setAktyvus] = useState(null);
  const dialogRef = useRef(null);

  const activeTrainer = useMemo(
    () => treneriai.find((t) => t.id === aktyvus) || null,
    [aktyvus]
  );

  useEffect(() => {
    if (aktyvus !== null) {
      const onKeyDown = (e) => { if (e.key === 'Escape') setAktyvus(null); };
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

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">02 / Treneriai</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Mūsų treneriai
            </h1>
            <p className="text-lg text-white/40 font-light max-w-xl">
              Susipažinkite su mūsų komandos nariais – atsidavusiais, patyrusiais ir įkvepiančiais treneriais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRAINERS ROSTER ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {treneriai.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="w-full text-left border-b border-academy-line group"
              onClick={() => setAktyvus(t.id)}
              aria-label={`Daugiau apie trenerį ${t.vardas}`}
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 items-center">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[13px] font-mono text-academy-blue">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="col-span-3 md:col-span-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                    <img
                      src={t.nuotrauka}
                      alt={t.vardas}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="col-span-5 md:col-span-7">
                  <h2 className="text-lg md:text-2xl font-display font-bold text-white uppercase tracking-tight group-hover:text-academy-blue transition-colors duration-200">
                    {t.vardas}
                  </h2>
                  <p className="text-sm text-white/30 mt-1 hidden md:block">{t.trumpai}</p>
                </div>

                <div className="col-span-2 flex justify-end">
                  <span className="text-white/20 group-hover:text-academy-blue group-hover:translate-x-1 transition-all duration-200 text-lg">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ═══ MODAL ═══ */}
      <AnimatePresence>
        {activeTrainer && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center px-6"
            onClick={() => setAktyvus(null)}
          >
            <motion.div
              key="dialog"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="trainer-title"
              tabIndex={-1}
              ref={dialogRef}
              className="relative bg-academy-dark border border-academy-line max-w-2xl w-full p-8 md:p-10 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setAktyvus(null)}
                className="absolute top-4 right-4 text-white/30 hover:text-white text-2xl transition-colors"
                aria-label="Uždaryti"
              >
                &times;
              </button>

              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                  <img src={activeTrainer.nuotrauka} alt={activeTrainer.vardas} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h2 id="trainer-title" className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                    {activeTrainer.vardas}
                  </h2>
                  <p className="text-sm text-white/30 mt-1">Amžius: {activeTrainer.amzius || '—'}</p>
                </div>
              </div>

              <div className="w-full h-px bg-academy-line mb-6" />

              <p className="text-white/60 font-medium mb-6">{activeTrainer.trumpai}</p>
              <p className="whitespace-pre-line text-white/50 leading-relaxed text-sm">{activeTrainer.aprasymas}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
