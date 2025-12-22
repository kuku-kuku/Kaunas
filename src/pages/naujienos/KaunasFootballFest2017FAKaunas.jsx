import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Nuotraukos (įkelk į /public/naujienos ir pataisyk pavadinimus jei reikia)
const images = [
  "/naujienos/kff2017_1.jpg",
  "/naujienos/kff2017_2.jpg",
  "/naujienos/kff2017_3.jpg",
  "/naujienos/kff2017_4.jpg",
];

export default function KaunasFootballFest2017FAKaunas() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  // SEO / Social
  const pageTitle =
    "FA Kaunas 2017 m. komanda dalyvavo „Kaunas Football Fest“ turnyre";
  const pageDescription =
    "FA Kaunas 2017 m. gimimo komanda dviejų dienų turnyre „Kaunas Football Fest“ sužaidė daug rungtynių, pelnė įvarčių ir sukaupė vertingos patirties. Trenerio Ernesto Bernotos komentaras ir naudingiausias žaidėjas – Matas Petkevičius.";
  const canonicalUrl =
    "https://www.fakaunas.lt/naujienos/kaunas-football-fest-2017";
  const imageUrl = "https://www.fakaunas.lt/naujienos/kff2017_1.jpg";

  useEffect(() => {
    if (!isManual && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual]);

  const handleManualChange = (newIndex) => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent(newIndex);
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent((current + 1) % images.length);
  };

  const isSingle = images.length === 1;

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pb-12 sm:pb-16 pt-28 md:pt-36 relative z-10">
      {/* Meta tik šiam puslapiui */}
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalUrl} />

        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FA KAUNAS" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

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
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md mt-16 md:mt-0"
          >
            Turnyras „Kaunas Football Fest“
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            FA Kaunas 2017 m. komandos patirtis turnyre „Kaunas Football Fest“
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            {/* Jei turi tikslią datą – įrašyk ją čia */}
            2025-12-19
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>FA Kaunas 2017 m. gimimo</strong> komanda dalyvavo dviejų
              dienų turnyre <strong>„Kaunas Football Fest“</strong>. 🔥⚽️
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Daug rungtynių, daug įvarčių ir didelis bagažas patirties įgautas
              per savaitgalį. 🏅
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Ernesto Bernotos komentaras apie turnyrą:</strong>
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Pirmą dieną turėjome 8 rungtynes ir sekėsi ne taip gerai kaip
              norėjome — išėjome į aikštelę kažko išsigandę, bandėme žaisti
              futbolą stovėdami vietoje, sprendimai irgi nebuvo patys geriausi.
              Nemažai turėjome ką aptarti su berniukais.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Antrąją dieną žaidėme 4 rungtynes visai kitaip nusiteikę — visi
              stengėsi pagerinti savo žaidimą, buvom pasiruošę ir vaizdas
              aikštelėje iškarto buvo žymiai geresnis.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Komandos naudingiausiu žaidėju išrinktas vartininkas{" "}
              <strong>Matas Petkevičius</strong>. 🥳
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Tėveliai verti atskiro padėkojimo už išskirtinį garsų palaikymą —
              vaikams tai labai svarbu. Ačiū Jums! 💪⚽️🩵
            </p>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl text-black font-semibold"
          >
            FA Kaunas – nuo svajonės iki realybės! 💙🤍
          </motion.p>
        </motion.div>

        {/* Karuselė */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Kaunas Football Fest nuotrauka"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <button
              onClick={handlePrev}
              disabled={isSingle}
              aria-disabled={isSingle}
              className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md transition ${
                isSingle ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              disabled={isSingle}
              aria-disabled={isSingle}
              className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md transition ${
                isSingle ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
              }`}
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
                      ? "bg-white"
                      : "bg-transparent border border-white"
                  } transition transform ${
                    isSingle ? "opacity-50 cursor-default" : "hover:scale-110"
                  }`}
                  disabled={isSingle}
                  aria-disabled={isSingle}
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
