import React from "react";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function Kontaktai() {
  return (
    <main className="text-black font-sans">
      {/* HERO sekcija su gradientu */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Kontaktai</h1>
          <p className="mt-4 text-lg font-light">
            Susisiekite su mumis – atsakysime į visus klausimus!
          </p>
        </motion.div>
      </section>

      {/* TURINYS su foninėm linijom */}
      <BackgroundWrapper>
        <section className="min-h-screen px-6 py-24 text-black select-none">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Dvi dalys: Žinutės forma ir Žemėlapis */}
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Žinutės forma */}
              <div className="bg-[#f8fdff] p-8 rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-semibold text-[#007bb5]">Parašykite mums</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Vardas"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007bb5]"
                  />
                  <input
                    type="email"
                    placeholder="El. paštas"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007bb5]"
                  />
                  <textarea
                    placeholder="Jūsų žinutė..."
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007bb5]"
                  />
                  <button
                    type="button"
                    disabled
                    className="w-full bg-[#007bb5] text-white font-semibold px-6 py-2 rounded-md opacity-50 cursor-not-allowed"
                  >
                    Siųsti žinutę (neaktyvu)
                  </button>
                </form>
              </div>

              {/* Google Maps */}
              <div className="w-full h-[400px]">
                <iframe
                  title="FA Kaunas lokacija"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.5365087714223!2d23.915254976763413!3d54.938988372840025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722a202feec5d%3A0x9e8f7c28479d5d76!2s%C5%BDeimenos%20g.%20165%2C%2049332%20Kaunas!5e0!3m2!1slt!2slt!4v1721208852185!5m2!1slt!2slt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-md"
                ></iframe>
              </div>
            </motion.div>

            {/* Kontaktinė informacija apačioje */}
            <motion.div
              className="text-lg space-y-3 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p>
                <strong>Telefonas:</strong>{" "}
                <a href="tel:+37060000000" className="text-[#007bb5] hover:underline">
                  +37066527501
                </a>
              </p>
              <p>
                <strong>El. paštas:</strong>{" "}
                <a href="mailto:info@fakaunas.lt" className="text-[#007bb5] hover:underline">
                  administracija@fakaunas.lt
                </a>
              </p>
              <p>
                <strong>Adresas:</strong> Žeimenos g. 165, 49332 Kaunas
              </p>
            </motion.div>
          </div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
