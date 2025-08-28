import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/mragowo.jpg',
  '/naujienos/mragowo1.jpg',
  '/naujienos/mragowo2.jpg',
  '/naujienos/mragowo3.jpg',
  '/naujienos/mragowo4.jpg',
  '/naujienos/mragowo5.jpg',
  '/naujienos/mragowo6.jpg',
  '/naujienos/mragowo7.jpg',
  '/naujienos/mragowo8.jpg',
  '/naujienos/mragowo9.jpg',
  '/naujienos/mragowo10.jpg',
  '/naujienos/mragowo11.jpg',
];

export default function VasarosStovyklaMragowo2025() {
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
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center">
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
            Vasaros stovykla Lenkijoje
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Sėkminga FA Kaunas vasaros stovykla Lenkijoje: kokybė, darbas ir komandinė dvasia.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            04/08/2025
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              Vos pasibaigus vasaros atostogoms, FA Kaunas 2015 m. Mėlinųjų grupė išvyko į sportinę stovyklą Lenkijoje, Mrągowo mieste. Savaitę trukusi stovykla buvo skirta fiziniam pasirengimui, techninių įgūdžių tobulinimui bei komandos vienybės stiprinimui.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Gabrieliaus komentaras:</strong> „Po vasaros visi sugrįžta šiek tiek ,,apsunkę"– tai natūralu. Bet jau nuo pirmų dienų matėme, kaip greitai vaikai įeina į ritmą. Dirbome du kartus per dieną, o per savaitę sužaidėme net penkerias kontrolines rungtynes. Progresas – akivaizdus“.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Be intensyvių treniruočių, daug dėmesio skirta ir kokybiškam laisvalaikiui. Vaikai žaidė stalo žaidimus, mini golfą, linksminosi ant batutų, maudėsi baseine ir ežere, o svarbiausia – stiprino tarpusavio ryšius, kurie ne mažiau svarbūs aikštelėje nei už jos ribų.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              „Tokios stovyklos prilygsta keliems mėnesiams įprasto darbo Lietuvoje. Per trumpą laiką galime padaryti daug: tiek fiziškai, tiek psichologiškai pasiruošti sezonui, sustiprinti komandą kaip vienetą. Tokių stovyklų norėtųsi kuo daugiau“, – akcentavo treneris.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Grįžusi komanda tęsia pasiruošimą artėjančiam sezonui Kaune, o jau šį savaitgalį vyks į tarptautinį turnyrą Latvijoje – Dobrecova CUP, kur galės pasitikrinti jėgas prieš stiprias užsienio komandas.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              FA Kaunas vyr. treneris nuoširdžiai dėkoja visiems tėveliams už pasitikėjimą ir suteikiamas galimybes auginti jaunąją futbolo kartą!
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

        {/* Karuselė su rodyklėm ir orbais */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
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
