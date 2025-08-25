import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function Prisijunk() {
  const shouldReduce = useReducedMotion();
  const communityImg = "/bendruomene.jpg"; // <-- pakeisk, jei failas kitur

  // Sklandžios, profesionalios animacijos
  const blockFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };

  const cardSmooth = {
    hidden: shouldReduce
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.985, filter: "blur(6px)" },
    show: shouldReduce
      ? { opacity: 1, transition: { duration: 0.25 } }
      : {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <main className="text-black font-sans">
      {/* HERO – vienodai su kitais puslapiais */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prisijunk prie mūsų šeimos</h1>
          <p className="text-lg font-light max-w-2xl">
            Kviečiame tapti mūsų akademijos dalimi – skirdami 1,2% GPM arba tapdami rėmėjais, prisidedate
            prie vaikų svajonių įgyvendinimo.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* BENDRUOMENĖ: tekstas kairėje, nuotrauka dešinėje */}
            <motion.div
              variants={blockFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Tekstas (kairė) */}
              <motion.div
                variants={cardSmooth}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">
                  Mūsų bendruomenė
                </h2>
                <div className="space-y-5 text-lg text-gray-800 leading-relaxed">
                  <p>
                    Kartu kuriame aplinką, kurioje vaikai jaučiasi saugiai, drąsiai ir motyvuotai. Mūsų
                    bendruomenė – tai tėvai, treneriai, savanoriai ir rėmėjai, kasdien prisidedantys prie
                    augančių talentų.
                  </p>
                  <p>
                    Prisidėdami jūs padedate mums organizuoti turnyrus, gerinti treniruočių bazę, aprūpinti
                    inventoriumi ir atverti daugiau galimybių vaikams sporte bei gyvenime.
                  </p>
                </div>
              </motion.div>

              {/* Nuotrauka (dešinė) */}
              <motion.div
                variants={cardSmooth}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Dekoratyvus švytėjimas už nuotraukos */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#b3e5fc] to-transparent rounded-[28px] blur-2xl opacity-40 pointer-events-none" />
                <img
                  src={communityImg}
                  alt="FA Kaunas bendruomenė"
                  loading="lazy"
                  className="relative w-full h-auto rounded-3xl shadow-xl border border-gray-100 object-cover"
                />
              </motion.div>
            </motion.div>

            {/* 1,2% parama */}
            <motion.div
              variants={blockFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">1,2% parama</h2>
              <div className="space-y-5 text-lg text-gray-800 leading-relaxed text-justify">
                <p>
                  Skirdami 1,2% savo pajamų mokesčio FA Kaunas, prisidedate prie jaunimo ugdymo, sportinių
                  sąlygų gerinimo ir vaikų svajonių įgyvendinimo.
                </p>
                <p>
                  VMI Elektroninio deklaravimo sistema (EDS):
                  <br />
                  <a
                    href="https://deklaravimas.vmi.lt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007bb5] underline hover:text-[#005e8c]"
                  >
                    https://deklaravimas.vmi.lt/
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Instrukcija */}
            <motion.div
              variants={cardSmooth}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-[#f0f9ff] border border-[#b3e5fc] rounded-xl p-6 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-[#007bb5]">
                Kaip skirti 1,2% – žingsnis po žingsnio:
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-gray-800 text-base">
                <li>Prisijunkite prie EDS sistemos</li>
                <li>Pasirinkite: Prašymas skirti paramą</li>
                <li>Forma: FR0512 v.5</li>
                <li>E1: 2 (paramos gavėjas)</li>
                <li>E2: 306181717</li>
                <li>E3: FA Kaunas</li>
                <li>E4: 1,2%</li>
                <li>Pateikite deklaraciją</li>
              </ul>
            </motion.div>

            {/* Partnerystė */}
            <motion.div
              variants={cardSmooth}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-100 p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-3 text-[#007bb5]">
                Norite tapti rėmėjais ar partneriais?
              </h2>
              <p className="mb-3 text-gray-800">
                Juridiniai ir fiziniai asmenys, norintys remti futbolo vystymą ir jaunimo ugdymą –
                susisiekite su mumis:
              </p>
              <p>
                <strong>Tel.:</strong>{" "}
                <a href="tel:+37066527501" className="text-[#007bb5] underline">
                  +370 665 27501
                </a>
              </p>
              <p>
                <strong>El. paštas:</strong>{" "}
                <a
                  href="mailto:administracija@fakaunas.lt"
                  className="text-[#007bb5] underline"
                >
                  administracija@fakaunas.lt
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
