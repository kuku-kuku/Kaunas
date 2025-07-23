import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/naujienos/summervictory.jpg',
  '/naujienos/summervictory1.jpg',
  '/naujienos/summervictory2.jpg',
  '/naujienos/summervictory3.jpg',
  '/naujienos/summervictory4.jpg',
];

export default function SummerVictory2025() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tekstas */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md mt-16 md:mt-0"
          >
            Summer Victory CUP
          </motion.div>


          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Trijų komandų sezonas baigėsi turnyre Garliavoje
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            30/06/2025
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio komentaras (2015 m. grupė):</strong> „Labai džiaugiuosi vaikų nusiteikimu turnyrui – jie buvo labai motyvuoti, kovėsi dėl kiekvieno kamuolio...“
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Ernesto komentaras (2017/18 m.):</strong> „Turnyrą pradėjome pozityviai... žaidėme prieš vyresnius varžovus, tai buvo vertinga patirtis.“
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Tomo komentaras (2019/20 m.):</strong> „Turnyras buvo nelengvas, bet vaikai kovojo iš visų jėgų. Tobuliname 1v1 situacijas.“
            </p>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl text-black font-semibold"
          >
            FA Kaunas – nuo svajonės iki realybės!
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to="/naujienos"
              className="inline-block mt-6 text-sky-600 hover:underline font-medium"
            >
              ← Grįžti į naujienas
            </Link>
          </motion.div>
        </motion.div>

        {/* Karuselė */}
        <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Turnyro nuotrauka"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
