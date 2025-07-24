import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/naujienos/stovykla.jpg',
  '/naujienos/stovykla2.jpg',
  '/naujienos/stovykla3.jpg',
];

export default function Stovykla2025() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
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
            Stovyklos apžvalga
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Dalis FA „Kaunas“ auklėtinių sezoną užbaigė smagioje dienos stovykloje, o dalis turnyruose!
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
              <strong>Trenerių Tomo ir Gabrieliaus komentaras:</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              „Vaikai ne tik aktyviai sportavo du kartus per dieną, bet ir turiningai leido laiką įvairiose veiklose. Aplankėme kino teatrą, dalyvavome viktorinoje, kūrėme kūrybinėse dirbtuvėse, tyrinėjome Mokslo salą, lankėmės baseine, kur vaikai įgijo saugaus elgesio vandenyje pažymėjimus, išbandėme VR kambario pramogas ir dar daugiau.
              <br /><br />
              Smagiausia matyti spindinčias vaikų akis, jų džiaugsmą, naujas patirtis ir augantį pasitikėjimą savimi. Tai – neįkainojama.“
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
        </motion.div>

        {/* Karuselė + mygtukas */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Stovyklos nuotrauka"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Perkeltas mygtukas čia */}
          <Link
            to="/naujienos"
            className="inline-block text-sky-600 hover:underline font-medium"
          >
            ← Grįžti į naujienas
          </Link>
        </div>
      </div>
    </section>
  );
}
