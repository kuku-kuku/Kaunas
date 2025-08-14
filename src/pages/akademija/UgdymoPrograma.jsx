import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BackgroundWrapper from '../../components/BackgroundWrapper';

export default function Ugdymas() {
  const shouldReduce = useReducedMotion();

  // Nauja, tvarkinga struktūra pagal tavo sąrašą
  const grupes = [
    {
      metai: '2015 / 2016',
      grupe: 'A',
      vyrTreneris: 'Gabrielius Zagurskas',
      asistentai: ['Marius Činikas'],
    },
    {
      metai: '2015 / 2016',
      grupe: 'B',
      vyrTreneris: 'Lukas Sipavičius',
      asistentai: ['Tomas Macelis'],
    },
    {
      metai: '2017 / 2018',
      grupe: null,
      vyrTreneris: 'Marius Činikas',
      asistentai: ['Ernestas Bernota'],
    },
    {
      metai: '2019 / 2020 / 2021',
      grupe: null,
      vyrTreneris: 'Tomas Macelis',
      asistentai: ['Lukas Sipavičius', 'Gabrielius Zagurskas'],
    },
  ];

  // Švelnios, profesionalios animacijos
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduce
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.985, filter: 'blur(6px)' },
    show: shouldReduce
      ? { opacity: 1, transition: { duration: 0.25 } }
      : {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
  };

  const blockVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="text-black font-sans">
      {/* HERO sekcija */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ugdymo programa ir amžiaus grupės
          </h1>
          <p className="text-lg font-light max-w-2xl">
            Susipažinkite su mūsų ugdymo principais ir treniruojamomis vaikų grupėmis.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="py-20 px-6 md:px-12 lg:px-24">
          {/* Ugdymo metodika */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#007bb5] text-center">
              Mūsų ugdymo metodika
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
              FA Kaunas taiko <span className="font-semibold">Auri-Dohm</span> jaunimo ugdymo programą,
              orientuotą į visapusišką vaiko tobulėjimą. Daug dėmesio skiriama ne tik techniniams ir
              taktiniams futbolo aspektams, bet ir asmenybės vystymui bei vertybėms:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
              <li>Fizinio pasirengimo lavinimas</li>
              <li>Techninių įgūdžių tobulinimas</li>
              <li>Taktinio mąstymo ugdymas</li>
              <li>Psichologinis stabilumas ir bendravimas</li>
              <li>Asmenybės ir vertybių formavimas</li>
            </ul>
          </motion.div>

          {/* Amžiaus grupės */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#007bb5]">
              Treniruojamos amžiaus grupės
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {grupes.map((g, idx) => (
                <motion.article
                  key={`${g.metai}-${g.vyrTreneris}-${idx}`}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all p-6"
                >
                  {/* Header: metai + pogrupis */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#007bb5]">{g.metai}</h3>
                    {g.grupe && (
                      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-cyan-50 border-cyan-200 text-cyan-800">
                        Grupe {g.grupe}
                      </span>
                    )}
                  </div>

                  {/* Vyr. treneris */}
                  <p className="text-gray-800 mb-2">
                    <span className="font-medium">Vyr. treneris:</span> {g.vyrTreneris}
                  </p>

                  {/* Asistentai */}
                  {g.asistentai?.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium text-gray-800 mb-1">Trenerio asistentai:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {g.asistentai.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
