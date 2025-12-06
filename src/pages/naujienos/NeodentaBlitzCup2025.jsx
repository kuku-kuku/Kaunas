// src/pages/naujienos/NeodentaBlitzCup2025.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/naujienos/blitz1.jpg',
    '/naujienos/blitz2.jpg',
    '/naujienos/blitz3.jpg',
    '/naujienos/blitz4.jpg',
    '/naujienos/blitz5.jpg',
    '/naujienos/blitz6.jpg',
];

function NeodentaBlitzCup2025() {
    const [current, setCurrent] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isManual) {
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
                        2019/2020 m. komandos turnyras
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="scroll-mt-36 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        FA Kaunas 2019/2020 m. komandos Neodenta „Blitz Cup" turnyre ⚽️💙
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: -5 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-gray-500 font-medium -mt-2"
                    >
                        2025-11-29/30
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
                    >
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Lapkričio 29–30 dienomis FA Kaunas 2019/2020 metų gimimo komandos dalyvavo
                            Neodenta „Blitz Cup" turnyre. Mažieji mūsų akademijos auklėtiniai
                            sužaidė didelį kiekį rungtynių, pasisėmė puikių emocijų ir, svarbiausia,
                            įgavo daug žaidybinės patirties 👏
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            Apie turnyrą ir įspūdžius pasakoja akademijos treneriai{' '}
                            <strong>Lukas Sipavičius</strong> ir <strong>Tomas Macelis</strong>:
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Tomas Macelis:</strong> „Turnyras nebuvo lengvas. Žaidėme 4x4,
                            ką darome retai. Taip pat susitikome su vyresniais ir fiziškai
                            stipresniais varžovais. Tačiau džiaugiuosi, kad mūsų vaikai neišsigando
                            ir kovojo kaip ir pridera. Jaučiame, kad turime gerinti techniką. Vaikai
                            judrūs, greiti, tačiau silpnai valdome kamuolį. Ties tuo ir dirbsime." 💪
                        </p>

                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Lukas Sipavičius:</strong> „Džiugina, kad visi vaikai turi daug
                            noro ir energijos, veržiasi į aikštelę žaisti, drąsiai žaidžia vienas
                            prieš vieną, naudoja tai, ką mokomės treniruotėse. Daugumai vaikinų tai
                            buvo pirmas turnyras ant tokios dangos, tad komandinio žaidimo nebuvo
                            daug, tačiau individualūs vaikų sugebėjimai tikrai džiugino. Dėjome dar
                            vieną žingsnį į priekį savo futbolo kelionėje ir su kiekvienu turnyru
                            vis labiau stengsimės tobulėti." 🙏🏼⚽️
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
                    <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-sky-50 to-blue-50">
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
                                    alt="Turnyro nuotrauka"
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                                        } z-10`}
                                />
                            </React.Fragment>
                        ))}

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

export default NeodentaBlitzCup2025;