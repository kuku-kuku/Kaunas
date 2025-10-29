// src/news/ZalgirisFutsalCup.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/zalgiris.jpg',
  '/naujienos/zalgiris1.jpg',
  '/naujienos/zalgiris2.jpg',
  '/naujienos/zalgiris3.jpg',
  '/naujienos/zalgiris4.jpg',
];

export default function ZalgirisFutsalCup() {
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
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
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
          >
            Žalgiris Futsal CUP
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Žalgiris Futsal CUP turnyras
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-500 font-medium -mt-2"
          >
            28/09/2025
          </motion.p>

          {/* Įžanga */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            Rugsėjo 28 d. vyko „Žalgiris Futsal CUP“ turnyras.
          </motion.p>

          {/* Trenerių komentarai dėžutėje */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Luko komentaras:</strong><br />
              „Gal po ilgesnio laiko jautėsi žaidybinės praktikos trūkumas. Norėjosi, kad vaikai žaistų nuo pat
              turnyro pradžios taip, kaip žaidė paskutines dvejas rungtynes. Tačiau yra ir daug pozityvių dalykų –
              pelnėme daug įvarčių tiek individualiais, tiek komandiniais veiksmais.
              Pagrindinė problema buvo koncentracijos stoka ir per lengvai dovanojami įvarčiai varžovams. Su vaikinais
              pasikalbėjome, kad, kaip ir treniruotėse, dažnai prarandame susikaupimą gynyboje. To stengsimės išvengti
              treniruočių procese – dirbsime, kad kiekvienas rungtynes žaistume nuo pradžios iki galo su didesne
              motyvacija ir užsidegimu kiekviename aikštės centimetre.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Tomo komentaras:</strong><br />
              „Vaikai gavo daug žaidybinio laiko. Viso turnyro metu komandoje vyravo gera nuotaika, daug bendravome –
              tai jautėsi ir aikštelėje. Vaikai stengiasi padėti vieni kitiems, žaidžia kietai, bet kartu pagarbiai ir
              kultūringai elgiasi su varžovais.
              <br /><br />
              Aikštelėje jaunieji sportininkai labai stengėsi – jiems didžiausia pagarba. Taip, yra dalykų, kurie dar
              nesiseka, darome klaidų, bet vaikai atiduoda viską, ką esame juos išmokę. O kartais – net daugiau. Turime
              labai gerą kolektyvą. Turime dėl jo pasistengti, duoti vaikams kuo daugiau, ir viskas bus gerai.“
            </p>
          </motion.div>

          {/* Mažųjų pastraipa */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            Mažieji – 2019/20 m. grupė – nepraleidžia turnyrų ir taip pat dalyvavo „Žalgiris Futsal Cup“ turnyre.
          </motion.p>

          {/* Šūkis */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-black font-semibold"
          >
            FA KAUNAS – nuo svajonės iki realybės!
          </motion.p>
        </motion.div>

        {/* Karuselė su rodyklėm ir orbais */}
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

          <Link to="/naujienos" className="inline-block text-sky-600 hover:underline font-medium">
            ← Grįžti į naujienas
          </Link>
        </div>
      </div>
    </section>
  );
}
