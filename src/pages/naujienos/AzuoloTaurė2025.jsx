import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/azuolo1.jpg',
  '/naujienos/azuolo2.jpg',
  '/naujienos/azuolo3.jpg',
];

export default function AzuoloTaure2025() {
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
    // ✅ svarbiausia — kompensuojam fixed navbar aukštį:
    // pt-28 ~ 112px mobile, md:pt-36 ~ 144px desktop (pasireguliuok, jei tavo navbar kitokio aukščio)
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
            // ❌ buvo mt-16 md:mt-0 — nuimam, kad dvigubai nekeltų turinio
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
          >
            Ąžuolo rudens taurė
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            // scroll-mt, jei į šį headingą būtų skrolinama per anchor
            className="scroll-mt-36 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Savaitgalinis „Ąžuolo rudens taurės“ turnyras!
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            14/10/2025
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>2018 m. komanda dalyvavo „Ąžuolo“ turnyre.</strong>
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Treneris Tomas:</strong> „Prie komandos prisijungė keli 2019 m. gimimo vaikai. 
              Jiems tai buvo pirmieji kartai žaidžiant 5x5 futbolą, tačiau jie visiškai neišsigando – 
              degė noru žaisti ir padėjo komandai. Manau, labai svarbu suteikti tokią progą tobulėti vaikams, 
              kurie kiekvienoje treniruotėje rodo, kad nori ir jau gali žengti žingsnį į priekį, žaisdami su vyresniais. 
              Likusiems vaikams turnyras taip pat buvo sėkmingas. Tikiu, kad kiekvienas išsinešė ką nors naudingo. 
              Visi be išimties labai stengėsi – manau, tai ir yra svarbiausia. Visa kita paliekame treniruotėms.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>2017/2018 m. komanda – po čempionato į turnyrą!</strong>
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Treneris Ernestas:</strong> „Po įtemptų čempionato rungtynių mūsų berniukams pavyko 
              sėkmingai reabilituotis „Ąžuolo rudens taurės“ turnyre. Nors pirmąsias rungtynes pralaimėjome, 
              pakoregavus žaidimo stilių visos likusios dvikovos buvo laimėtos. Smagu matyti, kad komanda vis 
              labiau susižaidžia – žaidėjai vieni kitus labiau palaiko gynyboje, perėmę kamuolį stengiasi jį 
              išlaikyti, o ne tiesiog spirt bet kur. Tai rodo augantį komandinį supratimą ir brandą aikštėje. 
              Turnyras tapo puikia patirtimi visai komandai. Džiaugiamės, kad vaikai klausėsi, stengėsi įgyvendinti 
              užduotis ir turnyrą užbaigė geros nuotaikos bei šiek tiek paaugę – tiek kaip žaidėjai, tiek kaip komandos nariai.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Nuoširdžiai dėkojame tėveliams</strong> už didžiulį palaikymą ir buvimą kartu!
            </p>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl text-black font-semibold"
          >
            FA Kaunas – auga kartu su vaikais!
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
