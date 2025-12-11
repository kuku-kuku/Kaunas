import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Nuotraukos (įkelk į /public/naujienos ir pataisyk pavadinimus jei reikia)
const images = [
  "/naujienos/kaunasfest1.jpg",
  "/naujienos/kaunasfest2.jpg",
  "/naujienos/kaunasfest3.jpg",
  "/naujienos/kaunasfest4.jpg",
  "/naujienos/kaunasfest5.jpg",
  "/naujienos/kaunasfest6.jpg",
  "/naujienos/kaunasfest7.jpg",
  "/naujienos/kaunasfest8.jpg",
  "/naujienos/kaunasfest9.jpg",
  "/naujienos/kaunasfest10.jpg",
];

export default function KaunasFootballFest2025() {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  // SEO / Social
  const pageTitle =
    "Dviguba FA Kaunas 2015 m. komandos sėkmė tarptautiniame „Kaunas Football Fest“ turnyre";
  const pageDescription =
    "FA Kaunas 2015 m. komanda puikiai pasirodė „Kaunas Football Fest“: Blue tapo turnyro vicečempionais, o White laimėjo „konferencijų lygą“. Treneriai džiaugiasi vaikų darbu ir atsidavimu.";
  const canonicalUrl =
    "https://www.fakaunas.lt/naujienos/kaunas-football-fest-2025";
  const imageUrl = "https://www.fakaunas.lt/naujienos/kaunasfest1.jpg";

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
            Tarptautinis turnyras „Kaunas Football Fest“
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Dviguba FA Kaunas 2015 m. komandos sėkmė turnyre „Kaunas Football
            Fest“
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 font-medium -mt-2"
          >
            08/12/2025
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              Praėjusį savaitgalį FA Kaunas 2015 m. komanda dalyvavo viename
              didžiausių tarptautinių futbolo turnyrų Lietuvoje –{" "}
              <strong>„Kaunas Football Fest“</strong>, kuriame rungtyniavo
              komandos iš Lietuvos, Latvijos, Estijos, Lenkijos, Ukrainos ir
              net Gruzijos. 💪
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>FA Kaunas Blue</strong> komanda po puikaus pasirodymo
              turnyre ir įnirtingos kovos finale tapo turnyro{" "}
              <strong>vicečempionais</strong>! 🏆🥈
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>FA Kaunas White</strong> komanda turnyro „konferencijų
              lygoje“ iškovojo <strong>1-ąją vietą</strong> 🥇, o bendroje
              įskaitoje turnyre užėmė 17-tą vietą. ⚽️
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Geriausiais komandų žaidėjais buvo išrinkti{" "}
              <strong>Matas Ruočkus</strong> ir{" "}
              <strong>Jonas Vaivilavičius</strong>. 💪
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Gabrieliaus Zagursko komentaras:</strong> „Esu
              patenkintas auklėtinių pasirodymu. Visi 20 vaikų parodė, kad gali
              konkuruoti prieš bet kuriuos varžovus. Džiugina vaikų darbas
              gynyboje – praleidome labai mažai įvarčių, tai sunkaus darbo
              treniruotėse vaisiai.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Galbūt negalime pasigirti kažkokiu išskirtiniu talentu, bet noras,
              maksimalios pastangos, azartas ir kovingumas šiame turnyre buvo
              aukščiausio lygio. Matau savo auklėtinius beveik kasdien, žinau,
              kaip sunkiai jie dirba treniruotėse, kiek daug darbo įdedam visi
              kartu, todėl džiugu, kad berniukams šį kartą pavyko pralaužti 4
              vietos „prakeiksmą“ ir tapti turnyro vicečempionais.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Toliau disciplinuotai ir kryptingai dirbsime treniruotėse ir
              tikiu, kad šių vaikų laukia šviesi ateitis. Labai noriu padėkoti
              tėveliams, kurie kaip ir visuomet mus nuostabiai palaikė – jūs
              esate mūsų papildomas žaidėjas aikštėje. AČIŪ!“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Remigijaus Mikalainio komentaras:</strong> „Tai
              pirmas toks turnyras, į kurį vykau su šia komanda. Vaikai parodė
              ir įrodė, kad turi noro ir galimybių kovoti su absoliučiai visais.
              Smagu matyti, jog laikomės savo plano ir taisyklių – tai parodo
              mūsų disciplinos lygį.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Taip pat džiaugiuosi už mūsų vartininkus, kurie daugybę kartų
              gelbėjo mus nuo pavojingų atakų ir smūgių. Turime dar daug darbo,
              bet judame labai teisinga kryptimi.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Trenerio Tomo Macelio komentaras:</strong> „Komanda
              turėjo daug gerų momentų. Mūsų sportininkai labai stengėsi – kai
              kuriuos pirmą kartą mačiau taip pavargusius. Deja, iš to didelio
              noro darėme nemažai klaidų. Kažkur pritrūko sėkmės, ir kalbant
              apie rezultatą, manau, kad jis neatspindi mūsų žaidimo.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Labiausiai džiaugiuosi vaikų atsidavimu. Linkiu ir toliau rodyti
              tokį norą ir tokias pastangas varžybose bei kiekvienoje
              treniruotėje.“
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>FA Kaunas</strong> dėkoja visiems sergantiems už mus
              varžybose ir turnyruose. 💙 AČIŪ JUMS!
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

