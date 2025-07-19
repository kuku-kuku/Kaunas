import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/naujienos/hegelman.jpg',
  '/naujienos/hegelman2.jpg',
];

export default function HegelmanTurnyras() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Tekstas kairėje */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
          >
            Hegelman turnyras
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            2019/20m. auklėtiniai sezoną užbaigė Hegelman turnyre
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
            className="bg-gray-100 p-5 rounded-lg shadow-sm"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Treneris Tomas:</strong>
            </p>
            <p className="mt-3 text-lg text-gray-700 leading-relaxed">
              „Sėkmingas turnyras mūsų berniukams! Puikiai gynėmės, o su kamuoliu nepriekaištingai varžovus apžaizdėme ir pelnėme įvarčius. Viso turnyro metu išlaikėme aukštą intensyvumą, kas labai džiugina ir motyvuoja ateities iššūkiams.“
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
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-md flex items-center justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Hegelman turnyro nuotrauka"
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
