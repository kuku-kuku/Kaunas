import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from '../../components/BackgroundWrapper';

export default function Ugdymas() {
  const grupes = [
    {
      pavadinimas: 'U9',
      metai: '2015 / 2016',
      vyrTreneris: 'Gabrielius Zagurskas',
      treneriai: ['Lukas Sipavičius', 'Tomas Macelis'],
    },
    {
      pavadinimas: 'U7',
      metai: '2017 / 2018',
      vyrTreneris: 'Ernestas Bernota',
      treneriai: ['Tomas Macelis'],
    },
    {
      pavadinimas: 'U5',
      metai: '2019 / 2020',
      vyrTreneris: 'Lukas Sipavičius',
      treneriai: [],
    },
  ];

  return (
    <main className="text-black font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ugdymo programa ir amžiaus grupės</h1>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#007bb5] text-center">Mūsų ugdymo metodika</h2>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#007bb5]">
              Treniruojamos amžiaus grupės
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {grupes.map((g, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all p-6"
                >
                  <h3 className="text-2xl font-bold text-[#007bb5] mb-2">{g.pavadinimas}</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Gimimo metai:</span> {g.metai}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-medium">Vyr. treneris:</span> {g.vyrTreneris}
                  </p>
                  {g.treneriai.length > 0 && (
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Kiti treneriai:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        {g.treneriai.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
