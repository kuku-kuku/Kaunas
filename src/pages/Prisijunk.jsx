import React from "react";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function Prisijunk() {
  return (
    <main className="text-black font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tapk akademijos dalimi</h1>
          <p className="text-lg font-light max-w-2xl">
            Prisidėkite prie jaunimo futbolo vystymo – Jūsų parama mums labai svarbi.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* 1,2% raginimas */}
            <div className="space-y-5 text-lg text-gray-800 leading-relaxed">
              <p>
                <strong>Skirkite 1,2%</strong> savo gyventojų pajamų mokesčio futbolo akademijai
                VŠĮ „FA Kaunas“ ir tapkite mūsų šeimos dalimi!
              </p>
              <p>
                Tai padaryti galite per VMI Elektroninio deklaravimo sistemą (EDS):
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

            {/* Instrukcija */}
            <div className="bg-[#f0f9ff] border border-[#b3e5fc] rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-[#007bb5]">
                Kaip skirti 1,2% – žingsnis po žingsnio:
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-gray-800 text-base">
                <li>Prisijunkite prie EDS ir pasirinkite „Pildyti formą“</li>
                <li>
                  Pasirinkite: <strong>Prašymas skirti paramą</strong>
                </li>
                <li>
                  Paspauskite: <em>„Pildyti formą tiesiogiai portale“</em>
                </li>
                <li>
                  <strong>Laukelis 5</strong>: mokestinis laikotarpis – <strong>2022</strong>
                </li>
                <li>
                  <strong>6S</strong>: pažymėkite – „Mokesčio dalį skiriu paramos gavėjui“
                </li>
                <li>
                  <strong>E1</strong>: įrašykite – <strong>2</strong> (Paramos gavėjas)
                </li>
                <li>
                  <strong>E2</strong>: gavėjo kodas – <strong>306181717</strong>
                </li>
                <li>
                  <strong>E3</strong>: paskirtis – <strong>vaikų VšĮ „FA Kaunas“</strong>
                </li>
                <li>
                  <strong>E4</strong>: procentas – <strong>1,2%</strong>
                </li>
                <li>
                  <strong>E5</strong>: iki kada skiriate paramą
                </li>
                <li>
                  <strong>Pateikite deklaraciją</strong>
                </li>
              </ul>
            </div>

            {/* Padėka */}
            <p className="text-lg text-center font-semibold text-[#007bb5]">
              Ačiū, kad padedate mums auginti ne tik sportininkus, bet ir asmenybes!
            </p>

            {/* Partnerystės kvietimas */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
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
            </div>
          </motion.div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
