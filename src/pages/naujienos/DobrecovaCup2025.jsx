import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/naujienos/dobrecova.jpg',
  '/naujienos/dobrecova1.jpg',
  '/naujienos/dobrecova2.jpg',
  '/naujienos/dobrecova3.jpg',
  '/naujienos/dobrecova4.jpg',
  '/naujienos/dobrecova5.jpg',
];

export default function DobrecovaCup2025() {
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
            Dobrecova CUP
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Rugpjūčio 8–10 dienomis FA KAUNAS auklėtiniai dalyvavo „Dobrecova CUP“ turnyre Latvijoje.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            11/08/2025
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              Rugpjūčio 8–10 dienomis FA KAUNAS auklėtiniai dalyvavo „Dobrecova CUP“ turnyre Latvijoje. 2015 m. gimimo futbolininkai, pasiskirstę į dvi grupes su treneriais Gabrielium ir Marium, varžėsi su dar 46 komandomis iš Latvijos, Estijos ir Lietuvos.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              FA „Kaunas White“ grupė galutinėje lentelėje iš 48 komandų užėmė 32-ąją vietą, o FA „Kaunas Blue“ per plauką liko nuo nugalėtojų pakylos ir tenkinosi 4-ąja vieta.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Gabrieliaus komentaras:</strong>
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              „Kai prieš keliaujant į šį turnyrą pasakiau, kad mūsų tikslas – jį laimėti, daug kas šypsojosi, net ir patys vaikai nelabai tikėjo tuo, ką kalba treneris.
              Akademijoje visą dėmesį skiriame futbolininkų ugdymui, o ne rezultatui, bet šį kartą norėjome, kad vaikai patys pajustų ir suprastų, jog jų sunkus darbas treniruotėse ir rungtynėse nėra veltui.
              Labai gaila berniukų, kad tik per plauką liko nuo nugalėtojų pakylos. Pusfinalyje po baudinių serijos pralaimėjome FC Riga akademijai, o rungtynėse dėl trečios vietos prieš Liepojos futbolininkus, pirmaujant 2:0, leidome varžovams rezultatą išlyginti ir baudinių serijoje vėl buvome silpnesni.
              Puiki patirtis, aukšto lygio varžovai, baudinių serijos – visa tai išryškina stipriąsias ir silpnąsias sportininkų savybes. Lemiamais momentais berniukai vis dar susiduria su psichologiniais sunkumais, trūksta lyderystės, sportinio pykčio, tam tikro „naglumo“. Tačiau viso turnyro metu matėme, kad kai vyrukai nusiteikę ir demonstruoja tvirtą charakterį, juos įveikti yra be galo sunku, o kartais net beveik neįmanoma.
              Matau savo auklėtinius kasdien, žinau, kiek mes su treneriais įdedame darbo į jų rengimą, žinau, kaip sunkiai berniukai dirba treniruotėse. Net nėra abejonių, kad rezultatai anksčiau ar vėliau ateis. O dabar, pasisėmę motyvacijos ir naujos patirties, toliau augsime ir tobulėsime.
              Noriu padėkoti tėveliams, kurie mus išleidžia į keliones užsienyje, palaiko vaikus, padeda už aikštės ribų. Turime pačią šauniausią bendruomenę Lietuvoje. AČIŪ!“
            </p>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
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
