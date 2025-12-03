// src/pages/naujienos/ResortNiegocinCup2025.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/lenkija1.jpg',
  '/naujienos/lenkija2.jpg',
  '/naujienos/lenkija3.jpg',
  '/naujienos/lenkija4.jpg',
  '/naujienos/lenkija5.jpg',
  '/naujienos/lenkija6.jpg',
];

function ResortNiegocinCup2025() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isManual) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual]);

  const handleManualChange = (newIndex) => {
    setIsManual(true);
    setCurrent(newIndex);
  };

  const handlePrev = () => {
    handleManualChange(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNext = () => {
    handleManualChange((current + 1) % images.length);
  };

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pb-12 sm:pb-16 pt-28 md:pt-36 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Teksto dalis */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
          >
            2017 m. komandos išvyka į Lenkiją
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="scroll-mt-36 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            FA KAUNAS 2017 m. komandos turnyras „Resort Niegocin Cup“ Lenkijoje 🇵🇱
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            2025-11-28/30
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              FA Kaunas 2017 m. komanda savaitgalį dalyvavo turnyre Lenkijoje, kuriame
              buvo sužaista nemažai rungtynių su kaimyninės Lenkijos varžovais 🇵🇱
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Treneris Ernestas Bernota apie turnyrą:</strong> „2017 Komandos
              pirmoji išvyka į Lenkiją, sudalyvavome 3 dienų futbolo turnyre
              &quot;Resort Niegocin Cup&quot;, žaidėme ne tik futbolą, bet turėjome ir
              puikų laisvalaikį, kurio metu gerinome tarpusavio ryšį per įvairiausius
              žaidimus, taip pat džiaugiuosi berniukų drausme viso turnyro metu 👍
              Turėjome įtemptą rungtynių tvarkaraštį, sužaidėme 12 rungtynių po 20
              minučių, kurios pareikalavo labai daug jėgų, nes žaidėme didesnėje
              aikštelėje nei esam įpratę. Turėjome ir gerų rungtynių, ir prastesnių, po
              kurių berniukams kilo daug įvairių emocijų, bendrai esu patenkintas
              vaikinų kovingumu aikštelėje, pradėjome rodyti charakterį ir daugiau
              komunikuoti tarpusavyje, kas yra didelė pagalba komandoje žaidimo metu.
              Grįžome namo su dideliu bagažu patirties, dar drąsesni, savarankiškesni
              ir stipresni!“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Rungtynių MVP apdovanojimus gavo{' '}
              <strong>Radvilas Juodis, Matas Petkevičius, Arijus Ročka, Marko Bjelan</strong> 🥳
              Taip pat naudingiausiu žaidėju komandoje išrinktas{' '}
              <strong>Arijus Ročka</strong> 💪
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Labai didelis <strong>AČIŪ tėveliams</strong> už pasitikėjimą ir galingą
              palaikymą tribūnose! 🩵⚽️👏
            </p>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl text-black font-semibold"
          >
            FA KAUNAS – nuo svajonės iki realybės! 💙🤍
          </motion.p>
        </motion.div>

        {/* Karuselė */}
        <div className="flex flex-col items-center gap-6">
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

            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current
                      ? 'bg-white'
                      : 'bg-transparent border border-white'
                  } transition transform hover:scale-110`}
                ></button>
              ))}
            </div>
          </div>

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

export default ResortNiegocinCup2025;
