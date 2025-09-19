import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/neodenta.jpg',
  '/naujienos/neodenta1.jpg',
  '/naujienos/neodenta2.jpg',
  '/naujienos/neodenta3.jpg',
  '/naujienos/neodenta4.jpg',
  '/naujienos/neodenta5.jpg',
];

export default function Neodenta2025() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // visada nuvalom prieš nustatant iš naujo
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isManual) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
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
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tekstas */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md mt-16 md:mt-0"
          >
            Neodenta turnyras
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Futbolo šventė mūsų komandai – dalyvavome „Neodenta“ turnyre
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-500 font-medium -mt-2"
          >
            14/09/2025
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            {/* Įžanga su amžiaus grupe */}
            <p className="text-sm text-gray-600 italic">
              2019/20 m. mažiausiųjų „Neodenta“ turnyro rungtynės
            </p>

            {/* Trenerio antraštė */}
            <p className="text-lg font-semibold text-gray-900">
              Trenerio Tomo komentaras:
            </p>

            {/* Citata */}
            <p className="text-lg text-gray-800 leading-relaxed">
              „Šį sekmadienį dalyvavome <strong>„Neodenta“</strong> futbolo turnyre, kuris tapo tikra švente mūsų komandai.
              Kiekvienas rungtynių momentas buvo pilnas džiaugsmo ir kovos. Svarbiausia – ne tik laimėti, bet ir mėgautis
              žaidimu bei tobulėti kaip komanda. Esame motyvuoti ir pasiryžę toliau siekti pergalės ir augti tiek aikštėje,
              tiek už jos ribų.“
            </p>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-black font-semibold"
          >
            FA Kaunas – nuo svajonės iki realybės!
          </motion.p>
        </motion.div>

        {/* Karuselė su rodyklėmis ir orbais */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Neodenta turnyro nuotrauka"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md hover:scale-110 transition"
              aria-label="Ankstesnė nuotrauka"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md hover:scale-110 transition"
              aria-label="Kita nuotrauka"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-white' : 'bg-transparent border border-white'
                  } transition transform hover:scale-110`}
                  aria-label={`Perjungti į ${index + 1}-ą nuotrauką`}
                />
              ))}
            </div>
          </div>

          <Link to="/naujienos" className="inline-block text-sky-600 hover:underline font-medium">
            ← Grįžti į naujienas
          </Link>
        </div>
      </div>
    </section>
  );
}
