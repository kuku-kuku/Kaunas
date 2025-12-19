import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/naujienos/kidscup1.jpg",
];

export default function KidsCupVilnius2025() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  // SEO / Social
  const pageTitle =
    "Mūsų akademijos 2019–20 m. gim. grupė dalyvavo „Kids Cup“ turnyre Vilniuje";
  const pageDescription =
    "FA KAUNAS 2019–20 m. gim. grupė Gruodžio 7 d. dalyvavo „Kids Cup“ turnyre Vilniuje, sužaidė su komandomis iš visos Lietuvos ir pasisėmė vertingos patirties. Trenerio Tomo Macelio įžvalgos po turnyro.";
  const canonicalUrl = "https://www.fakaunas.lt/naujienos/kids-cup-vilnius-2025";
  const imageUrl = "https://www.fakaunas.lt/naujienos/kidscup1.jpg";

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
    // PRATĘSTAS PADDING-TOP DĖL NAVIGACIJOS, ypač mobiliojoje versijoje
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 flex items-center">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Tekstas */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
          >
            „Kids Cup“ turnyras
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Mūsų akademijos 2019-20m. gim. grupė dalyvavo Kids Cup turnyre Vilniuje 🏆⚽️
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-500 font-medium -mt-2"
          >
            07/12/2025
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            {/* SUMAŽINTAS ŠRIFTO DYDIS IKI text-base (buvo text-lg) */}
            <p className="text-base text-gray-800 leading-relaxed">
              Gruodžio 7d. vieni jauniausių mūsų akademijos futbolininkų sėkmingai sužaidė su
              komandomis iš visos Lietuvos ir pasisėmė puikios patirties 💪
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Mintimis apie turnyrą dalinasi treneris Tomas Macelis:</strong>
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              „Labai džiaugiuosi vaikų pastangomis. Mačiau, kad paskutinėse rungtynėse vaikai jau
              buvo pavargę, bet žaidė su gera energija iki pat pabaigos.
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              Taip pat labai džiaugiuosi, kad vaikai patobulėjo žaidime vienas prieš vieną. Daro vis
              daugiau triukų, staigiau apsivarinėja varžovus.
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              Visada stengiamės žaisti kietai. Matau, kad paskutiniu metu esame šiek tiek mažiau
              kibūs gynyboje. Tą bandysime pagerinti treniruotėse ir stengsimės sukelti kuo daugiau
              nepatogumų varžovams puolant.
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              O daugiausiai dėmesio turime skirti intensyvumui treniruotėse. Turime didinti tempą,
              priversti vaikus greičiau mąstyti, reaguoti ir atiduoti visas jėgas.“
            </p>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-black font-semibold"
          >
            FA Kaunas - Nuo svajonės iki realybės 💙🤍
          </motion.p>
        </motion.div>

        {/* Karuselė (5 nuotraukos) */}
        <div className="flex flex-col items-center gap-6 md:mt-24">
          <div className="relative h-64 sm:h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md flex items-center justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Kids Cup turnyro nuotrauka"
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
                    index === current ? "bg-white" : "bg-transparent border border-white"
                  } transition transform ${isSingle ? "opacity-50 cursor-default" : "hover:scale-110"}`}
                  disabled={isSingle}
                  aria-disabled={isSingle}
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
