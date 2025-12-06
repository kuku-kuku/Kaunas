// src/pages/naujienos/RemigijusMikalainis2025.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/naujienos/remigijus1.jpg',
];

function RemigijusMikalainis2025() {
    const [current, setCurrent] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isManual && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % images.length);
            }, 4000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isManual]);

    const handleManualChange = (newIndex) => {
        setIsManual(true);
        setCurrent(newIndex);
    };

    const handlePrev = () => {
        handleManualChange(current === 0 ? images.length - 1 : current - 1);
    };

    const handleNext = () => {
        handleManualChange((current + 1) % images.length);
    };

    return (
        <section className="w-full min-h-screen bg-white px-4 sm:px-6 pb-12 sm:pb-16 pt-28 md:pt-36 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Teksto dalis */}
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
                        className="inline-block bg-gradient-to-r from-sky-500 to-sky-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md"
                    >
                        Naujas treneris akademijoje
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="scroll-mt-36 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        Prie FA Kaunas prisijungė vartininkų treneris Remigijus Mikalainis 🧤⚽️
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: -5 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-gray-500 font-medium -mt-2"
                    >
                        2025-12-02
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
                    >
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Džiaugiamės galėdami pranešti, kad prie mūsų akademijos trenerių
                            kolektyvo prisijungė <strong>Remigijus Mikalainis</strong>! Treneris
                            akademijoje rūpinsis vartininkų įgūdžių tobulinimu 🧤⚽️
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            Remigijus turi sukaupęs nemažą patirtį jaunųjų futbolininkų ir ypač
                            vartininkų ugdyme. Savo futbolininko karjeroje Remigijus atstovavo
                            tokius klubus kaip <strong>FK Sūduva</strong>,{' '}
                            <strong>Hedensted IF (Danija)</strong>, <strong>FC Hegelmann</strong>.
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            Didžiuojamės galimybe suteikti savo akademijos vartininkams
                            specializuotas vartininkų treniruotes, taip augindami dar
                            profesionalesnę futbolininkų kartą ⚽️
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
                    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-sky-50 to-blue-50">
                        {images.map((img, index) => (
                            <React.Fragment key={index}>
                                {/* Blurred background */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover blur-2xl scale-110 opacity-30"
                                    />
                                </div>
                                {/* Main image */}
                                <img
                                    src={img}
                                    alt="Trenerio nuotrauka"
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                                        } z-10`}
                                />
                            </React.Fragment>
                        ))}

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-20"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-20"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                                </button>

                                <div className="absolute bottom-3 sm:bottom-4 w-full flex justify-center gap-1.5 sm:gap-2 z-20">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleManualChange(index)}
                                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === current
                                                    ? 'bg-white scale-110'
                                                    : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <Link
                        to="/naujienos"
                        className="inline-block text-sky-600 hover:text-sky-700 hover:underline font-medium transition-colors"
                    >
                        ← Grįžti į naujienas
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default RemigijusMikalainis2025;