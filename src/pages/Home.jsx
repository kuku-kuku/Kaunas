import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['/hero.jpg', '/hero2.jpg', '/hero3.jpg'];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO sekcija */}
      <section className="relative w-full h-[70vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-fill"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FA Kaunas – futbolo akademija vaikams
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white max-w-2xl mb-6 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kur ugdomas charakteris, komanda ir aistra nuo mažens.
          </motion.p>
          <motion.a
            href="/apie"
            className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sužinoti daugiau apie mus
          </motion.a>
        </div>
      </section>

      {/* CTA sekcija – pulsacinis gradientas */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#b3e5fc] via-[#e1f5fe] to-[#ffffff] animate-pulseGradient overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Prisijunk prie mūsų futbolo šeimos
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            FA Kaunas kviečia vaikus į profesionalias ir linksmas futbolo treniruotes. Kartu auginkime talentą, komandinį dvasią ir meilę sportui.
          </motion.p>
          <motion.a
            href="/kontaktai"
            className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Registruokis treniruotėms
          </motion.a>
        </div>

        <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#4fc3f7] opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#81d4fa] opacity-20 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* PARTNERIAI */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">Mūsų partneriai</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {[
            { href: 'https://kaunas.ciopciop.lt/', src: '/partners/ciopciop.png', alt: 'Čiop Čiop' },
            { href: 'https://www.med-us.eu/', src: '/partners/medus.png', alt: 'Medus' },
            { href: 'https://camelia.lt/', src: '/partners/camelia.png', alt: 'Camelia' },
            { href: 'https://brandus.lt/', src: '/partners/brandus.png', alt: 'Brandus' },
            { href: 'https://servisasmobilis.lt/', src: '/partners/mobilis.png', alt: 'Mobilis' },
            { href: 'https://unomeda.lt/', src: '/partners/unomeda.png', alt: 'Unomeda' },
          ].map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition hover:scale-110 hover:opacity-90"
            >
              <img src={partner.src} alt={partner.alt} className="h-16 mx-auto object-contain" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
