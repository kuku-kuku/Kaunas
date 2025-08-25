import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

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
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Centruotas tekstas */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 text-white">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FA KAUNAS
          </motion.h1>

          <motion.p
            className="text-lg sm:text-2xl md:text-3xl text-white mb-6 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuo svajonės iki realybės!
          </motion.p>

          <MotionLink
            to="/apie"
            className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Apie mus
          </MotionLink>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#b3e5fc] via-[#e1f5fe] to-[#ffffff] animate-pulseGradient overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 uppercase whitespace-nowrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Prisijunk prie mūsų futbolo šeimos
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            FA KAUNAS kviečia vaikus į profesionalias ir linksmas futbolo treniruotes.
            Kartu auginkime asmenybes, talentą ir meilę sportui.
          </motion.p>
          <MotionLink
            to="/kontaktai"
            className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Registruokis treniruotėms
          </MotionLink>
        </div>

        <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#4fc3f7] opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#81d4fa] opacity-20 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* PARTNERIAI su UNOMEDA */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-black">Mūsų partneriai</h2>
        <div
          className="grid gap-8 justify-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {[
            { href: 'https://unomeda.lt/', src: '/partners/unomeda.png', alt: 'Unomeda' },
            { href: 'https://www.med-us.eu/', src: '/partners/medus.png', alt: 'Medus' },
            { href: 'https://camelia.lt/', src: '/partners/camelia.png', alt: 'Camelia' },
            { href: 'https://brandus.lt/', src: '/partners/brandus.png', alt: 'Brandus' },
          ].map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-105 hover:opacity-100"
            >
              <div className="flex items-center justify-center bg-white p-4 h-52">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-40 object-contain mx-auto"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
