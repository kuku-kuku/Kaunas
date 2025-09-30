// src/news/RudensTaure.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/rudens.jpg',
  '/naujienos/rudens1.jpg',
  '/naujienos/rudens2.jpg',
  '/naujienos/rudens3.jpg',
  '/naujienos/rudens4.jpg',
];

export default function RudensTaure() {
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
    <section className="relative z-10 w-full min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 pt-24 md:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tekstas */}
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
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md mt-16 md:mt-0"
          >
            FM „Ąžuolas“ – „Rudens taurė“
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            FM „Ąžuolas“ turnyras „Rudens taurė“
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-500 font-medium -mt-2"
          >
            27/09/2025
          </motion.p>

          {/* Įžanga */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            Rugsėjo 27 d. vyko FM „Ąžuolas“ futbolo turnyras „Rudens taurė“.
          </motion.p>

          {/* Papildoma pastraipa */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            2015 m. Juodųjų grupė šiame turnyre kovojo iki paskutinės minutės.
          </motion.p>

          {/* Trenerių komentarai (vienoje dėžutėje – kaip Žalgirio naujienoje) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-6"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Tomo komentaras:</strong><br />
              „Mūsų komandai turnyras nebuvo lengvas, tačiau vaikinai puikiai atsilaikė – parodė charakterį ir kovojo
              iki paskutinės turnyro sekundės. Manau, kad tokie turnyrai jiems yra labai svarbūs – čia jie susiduria su
              kitokiais iššūkiais nei treniruotėse. Artimiausiu metu stengsimės kuo daugiau dalyvauti varžybose,
              semtis patirties ir tobulėti.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Ernesto komentaras:</strong><br />
              „Dar prieš rungtynes su vaikais aptarėme žaidimo planą ir jo nuosekliai laikėmės. Džiaugiuosi, kad
              gynyboje žaidėme drausmingai – vieni kitiems padėdami ir neleisdami varžovams lengvai pelnyti įvarčių.
              Kovojome dėl kiekvieno kamuolio su maksimaliu atsidavimu.
              <br /><br />
              Taip pat pademonstravome, kad gebame ne tik gintis, bet ir kurti atakas. Pasinaudodami laisvu žaidėju
              greitai keitėme žaidimo kryptį iš vieno krašto į kitą, o tai leido pelnyti nemažai įvarčių. Visą
              turnyrą lydėjo gera nuotaika – vaikai mėgavosi žaidimu ir rodė norą tobulėti.
              <br /><br />
              Toliau treniruotėse nuosekliai dirbsime, kad kiekvienas žaidėjas stiprintų savo individualius futbolo
              įgūdžius, o komandinis žaidimas taptų dar brandesnis.“
            </p>
          </motion.div>

          {/* 2018 m. grupė + padėka */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            Taip pat 2018 m. grupė grįžo namo be pralaimėjimų!
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="font-medium text-gray-900"
          >
            Didelis ačiū tėveliams už jų kantrybę ir nuolatinį palaikymą! ⚽
          </motion.p>

          {/* Šūkis – kaip prašei */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-black font-semibold"
          >
            FA Kaunas – nuo svajonės iki realybės!
          </motion.p>
        </motion.div>

        {/* Karuselė su rodyklėm ir taškais – identiška kaip Žalgirio naujienoje */}
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
                    index === current ? 'bg-white' : 'bg-transparent border border-white'
                  } transition transform hover:scale-110`}
                />
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
