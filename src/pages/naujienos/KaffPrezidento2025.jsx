import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/kaff1.jpg',
  '/naujienos/kaff2.jpg',
  '/naujienos/kaff3.jpg',
  '/naujienos/kaff4.jpg',
  '/naujienos/kaff5.jpg',
];

export default function KaffPrezidento2025() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
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
            KAFF Prezidento taurė
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Rugsėjo 21 d. 2019–20 m. grupė dalyvavo turnyre „KAFF Prezidento taurė“
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-500 font-medium -mt-2"
          >
            21/09/2025
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            {/* Įžanga su amžiaus grupe */}
            <p className="text-sm text-gray-600 italic">
              2019/20 m. grupės dalyvavimas turnyre
            </p>

            {/* Trenerio antraštė */}
            <p className="text-lg font-semibold text-gray-900">
              Trenerio Tomo komentaras:
            </p>

            {/* Citata */}
            <p className="text-lg text-gray-800 leading-relaxed">
              „Turnyras pažymėtas geromis nuotaikomis, puikiu oru ir drąsiais debiutais. 
              Turėjome berniukų, kuriems šis turnyras buvo pirmasis ir jie puikiai susitvarkė su šiuo iššūkiu.
              <br /><br />
              Kaip jau ir įprasta, berniukai buvo kovingi ir drąsūs. Ateityje norime, kad artimose dvikovose 
              mums nereikėtų kovoti su varžovais „per jėgą“, o galėtume juos įveikti dėl aukštesnio meistriškumo. 
              Tuo ir dirbsime toliau!“
            </p>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-black font-semibold"
          >
            FA KAUNAS – nuo svajonės iki realybės!
          </motion.p>
        </motion.div>

        {/* Karuselė */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="KAFF Prezidento taurės nuotrauka"
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
