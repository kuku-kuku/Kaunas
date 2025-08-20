import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

const newsData = [
  {
    id: 1,
    date: "2025-07-17",
    title: "Startavo vaikų vasaros stovykla!",
    summary:
      "Šią savaitę prasidėjo FA Kaunas vasaros stovykla, kurioje dalyvauja virš 60 vaikų iš įvairių amžiaus grupių.",
    link: "/naujienos/stovykla-2025",
    image: "/naujienos/stovykla.jpg",
  },
  {
    id: 2,
    date: "2025-06-30",
    title: "2019/20m. auklėtiniai užbaigė sezoną turnyre",
    summary:
      "Mūsų komanda sezoną uždarė Hegelman organizuotame turnyre – pasiektas aukštas intensyvumas ir motyvuojantis žaidimas.",
    link: "/naujienos/hegelman-turnyras",
    image: "/naujienos/hegelman.jpg",
  },
  {
    id: 3,
    date: "2025-06-25",
    title: "Summer Victory CUP Garliavoje",
    summary:
      "Trijų FA Kaunas komandų pasirodymai Garliavos turnyre – išskirtinis nusiteikimas ir bręstanti žaidimo kokybė.",
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

export default function Naujienos() {
  return (
    <main className="text-black font-sans">
      {/* HERO sekcija */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Naujienos</h1>
          <p className="text-lg font-light max-w-2xl">
            Naujausia informacija iš FA KAUNAS gyvenimo
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="max-w-7xl mx-auto py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {newsData.map((item, index) => (
              <Link to={item.link} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(item.date)}
                    </p>
                    <h3 className="text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4 flex-grow">
                      {item.summary}
                    </p>
                    <p className="text-[#007bb5] font-medium mt-auto">
                      Skaityti daugiau →
                    </p>
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
