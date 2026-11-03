import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { partners, stats } from "../content";

const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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
      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-screen overflow-hidden bg-academy-black">
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt="FA Kaunas"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-academy-black via-academy-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-academy-black/60 to-transparent z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="section-label mb-4 text-white/60"
            >
              Futbolo akademija &mdash; Kaunas
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] text-white mb-4"
            >
              FA KAUNAS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-8 max-w-xl"
            >
              Nuo svajonės iki realybės!
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/apie" className="btn-academy">
                Apie mus <span className="btn-arrow">&rarr;</span>
              </Link>
              <Link to="/kontaktai" className="btn-blue">
                Registruokis treniruotėms <span className="btn-arrow">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-6 right-6 md:right-12 lg:right-24 z-20 flex items-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-px transition-all duration-500 ${
                i === currentImage ? 'w-12 bg-white' : 'w-6 bg-white/30'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
          <span className="text-[11px] font-mono text-fg-subtle ml-2">
            {String(currentImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="relative bg-academy-black py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle pitch line decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-academy-line to-transparent" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Tapk dalimi</p>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Prisijunk prie mūsų futbolo šeimos
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              FA KAUNAS kviečia vaikus į profesionalias ir linksmas futbolo treniruotes.
              Kartu auginkime asmenybes, talentą ir meilę sportui.
            </p>
            <Link to="/kontaktai" className="btn-academy">
              Registruokis treniruotėms <span className="btn-arrow">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-academy-line"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-academy-black p-8 md:p-10">
                <p className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="bg-academy-black border-t border-academy-line py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="section-label mb-2">Bendradarbiavimas</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                Mūsų partneriai
              </h2>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-academy-line ml-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-academy-line">
            {partners.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-academy-black flex items-center justify-center p-8 md:p-12 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 md:h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
