// src/pages/Naujienos.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

const fallbackNews = [
    {
    id: 11,
    date: "2025-10-06",
    title: "Puikus žaidimas ir vienybė aikštėje – „Balcia Cup“ 2019/20 m. turnyro akimirkos",
    summary:
      "Smagus sekmadienio rytas, daug įvarčių ir tikra komandinė dvasia. Treneris Tomas: „Turnyre pelnėme nemažai įvarčių ir džiaugsmingai juos šventėme. Džiaugiuosi, kad vaikai aikštėje elgiasi kaip tikri futbolininkai – švenčia įvarčius, palaiko vieni kitus. Turime nuostabius vaikus ir labai laukiame kitų turnyrų.“",
    link: "/naujienos/balcia-cup-2025",
    image: "/naujienos/balcia.jpg",
  },
  {
    id: 10,
    date: "2025-09-28",
    title: "Žalgiris Futsal CUP turnyras",
    summary: "Vyresniems jautėsi žaidybinės praktikos trūkumas, bet pelnėme daug įvarčių ir išsigryninome užduotis treniruotėms. Mažieji 2019/20 m. taip pat dalyvavo ir demonstravo puikią nuotaiką bei komandinį žaidimą.",
    link: "/naujienos/zalgiris-futsal-cup",
    image: "/naujienos/zalgiris.jpg",
  },
  {
    id: 9,
    date: "2025-09-27",
    title: "FM Ąžuolas turnyras Rudens taurė",
    summary: "2015 m. Juodųjų grupė kovojo iki paskutinės minutės, o 2018 m. grupė grįžo be pralaimėjimų. Trenerių komentarai apie charakterį, discipliną gynyboje ir tolesnį tobulėjimą.",
    link: "/naujienos/rudens-taure",
    image: "/naujienos/rudens.jpg",
  },
  {
    id: 8,
    date: "2025-09-21",
    title: "FA Kaunas 2019/20 m. grupė dalyvavo KAFF Prezidento taurėje",
    summary: "Turnyras pažymėtas geromis nuotaikomis, puikiu oru ir drąsiais debiutais. Berniukai pademonstravo drąsą ir ryžtą!",
    link: "/naujienos/kaff-prezidento-2025",
    image: "/naujienos/kaff1.jpg",
  },
  {
    id: 7,
    date: "2025-09-14",
    title: "FA Kaunas komanda dalyvavo Neodenta turnyre",
    summary: "Šį sekmadienį dalyvavome Neodenta futbolo turnyre, kuris tapo tikra švente mūsų komandai. Džiaugsmas, kova ir noras tobulėti kartu!",
    link: "/naujienos/neodenta-2025",
    image: "/naujienos/neodenta.jpg",
  },
  {
    id: 6,
    date: "2025-09-09",
    title: "Net penki FA KAUNAS auklėtiniai - LFF regioniniame talentų centre!",
    summary: "2015-2016 m. gimimo grupės berniukai įveikė atrankas ir pradės treniruotis LFF regioniniame talentų centre, siekdami dar sparčiau tobulėti.",
    link: "/naujienos/lff-talentu-centras",
    image: "/naujienos/talentai.jpg",
  },
  {
    id: 5,
    date: "2025-08-04",
    title: "Sėkminga FA Kaunas vasaros stovykla Lenkijoje",
    summary: "Mrągowo mieste vykusi savaitės stovykla: fizinis pasirengimas, technikos tobulinimas ir stipri komandinė dvasia.",
    link: "/naujienos/vasaros-stovykla-mragowo-2025",
    image: "/naujienos/mragowo.jpg",
  },
  {
    id: 4,
    date: "2025-08-11",
    title: "Dobrecova CUP Latvijoje (2015 m.)",
    summary: "Dvi FA Kaunas komandos tarp 48 dalyvių: White - 32 vieta, Blue - per plauką nuo prizininkų, 4 vieta.",
    link: "/naujienos/dobrecova-cup-2025",
    image: "/naujienos/dobrecova.jpg",
  },
  {
    id: 1,
    date: "2025-06-30",
    title: "Startavo vaikų vasaros stovykla!",
    summary: "Šią savaitę prasidėjo FA Kaunas vasaros stovykla, kurioje dalyvauja virš 60 vaikų iš įvairių amžiaus grupių.",
    link: "/naujienos/stovykla-2025",
    image: "/naujienos/stovykla.jpg",
  },
  {
    id: 2,
    date: "2025-06-30",
    title: "2019/20m. auklėtiniai užbaigė sezoną turnyre",
    summary: "Mūsų komanda sezoną uždarė Hegelman organizuotame turnyre - pasiektas aukštas intensyvumas ir motyvuojantis žaidimas.",
    link: "/naujienos/hegelman-turnyras",
    image: "/naujienos/hegelman.jpg",
  },
  {
    id: 3,
    date: "2025-06-23",
    title: "Summer Victory CUP Garliavoje",
    summary: "Trijų FA Kaunas komandų pasirodymai Garliavos turnyre - išskirtinis nusiteikimas ir bręstanti žaidimo kokybė.",
    link: "/naujienos/summer-victory",
    image: "/naujienos/summervictory.jpg",
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("lt-LT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function sortByDateDesc(arr) {
  return [...arr].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export default function Naujienos() {
  const items = useMemo(() => sortByDateDesc(fallbackNews), []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.04,
        delayChildren: 0.1
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    },
  };

  return (
    <main className="text-black font-sans">
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-20 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.05
          }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-3">Naujienos</h1>
          <p className="text-lg/7 font-light">Naujausia informacija iš FA KAUNAS gyvenimo</p>
        </motion.div>
      </section>

      <BackgroundWrapper>
        <section className="max-w-7xl mx-auto py-16 px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {items.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl"
              >
                <motion.div
                  variants={card}
                  className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-md transition-shadow h-full flex flex-col"
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-gray-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-gray-500 mb-1">{formatDate(item.date)}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-4">
                      {item.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sky-700 font-medium">
                      Skaityti daugiau <span aria-hidden>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}