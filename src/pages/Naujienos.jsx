// src/pages/Naujienos.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

const fallbackNews = [
    {
        id: 19,
        date: "2025-12-08",
        title: 'Dviguba FA Kaunas 2015 m. komandos sėkmė „Kaunas Football Fest“ turnyre',
        summary:
            'FA Kaunas 2015 m. komanda dalyvavo tarptautiniame „Kaunas Football Fest“ turnyre, kuriame varžėsi komandos iš Lietuvos ir užsienio. FA Kaunas Blue tapo turnyro vicečempionais, o FA Kaunas White laimėjo „konferencijų lygą“. Treneriai džiaugėsi vaikų darbu gynyboje, kovingumu ir disciplina.',
        link: "/naujienos/kaunas-football-fest-2025",
        image: "/naujienos/kaunasfest1.jpg",
    },
    {
        id: 18,
        date: "2025-12-02",
        title: "Prie FA Kaunas prisijungė vartininkų treneris Remigijus Mikalainis 🧤⚽️",
        summary:
            "Džiaugiamės galėdami pranešti, kad prie FA Kaunas trenerių kolektyvo prisijungė Remigijus Mikalainis. Treneris rūpinsis vartininkų įgūdžių tobulinimu, o jo patirtis FK Sūduva, Hedensted IF (Danija) ir FC Hegelmann klubuose leis dar labiau auginti akademijos vartininkų kartą.",
        link: "/naujienos/remigijus-mikalainis-2025",
        image: "/naujienos/remigijus1.jpg",
    },
    {
        id: 17,
        date: "2025-11-30",
        title: 'FA Kaunas 2019/2020 m. komandos Neodenta „Blitz Cup“ turnyre ⚽️💙',
        summary:
            "Lapkričio 29–30 dienomis FA Kaunas 2019/2020 metų gimimo komandos dalyvavo Neodenta „Blitz Cup“ turnyre. Mažieji auklėtiniai sužaidė daug rungtynių, pasisėmė puikių emocijų ir įgavo vertingos žaidybinės patirties. Treneriai Lukas Sipavičius ir Tomas Macelis pabrėžė vaikų drąsą, energiją ir nuolatinį tobulėjimą su kiekvienu turnyru.",
        link: "/naujienos/neodenta-blitz-cup-2025",
        image: "/naujienos/blitz1.jpg",
    },
    {
        id: 16,
        date: "2025-11-30",
        title: 'FA KAUNAS 2017 m. komandos turnyras „Resort Niegocin Cup“ Lenkijoje 🇵🇱',
        summary:
            'FA Kaunas 2017 m. komanda dalyvavo 3 dienų „Resort Niegocin Cup“ turnyre Lenkijoje. Treneris Ernestas Bernota džiaugėsi berniukų drausme, kovingumu, augančiu komandinio žaidimo supratimu ir stiprėjančiu tarpusavio ryšiu aikštėje ir už jos ribų. Rungtynių MVP apdovanojimus pelnė Radvilas Juodis, Matas Petkevičius, Arijus Ročka ir Marko Bjelan, o naudingiausiu žaidėju komandoje išrinktas Arijus Ročka.',
        link: "/naujienos/resort-niegocin-cup-2025",
        image: "/naujienos/lenkija1.jpg",
    },
    {
        id: 15,
        date: "2025-10-27",
        title: "Savaitgalinis „Ąžuolo rudens taurės“ turnyras!",
        summary:
            "2018 m. komanda dalyvavo „Ąžuolo“ turnyre. Treneris Tomas: „Pirmieji 5x5 žingsniai 2019 m. gimusiems vaikams – drąsa ir noras žaisti padėjo komandai.“ Treneris Ernestas: „Pakoregavus žaidimo stilių – visos likusios dvikovos laimėtos; augantis komandos susižaidimas ir brandumas aikštėje.“",
        link: "/naujienos/azuolo-rudens-taure-2025",
        image: "/naujienos/azuolo1.jpg"
    },
    {
        id: 14,
        date: "2025-10-20",
        title: "Tobulėjimas su kiekvienu turnyru: 2019/2020 m. grupės pasirodymas „Kauno rajono taurė“",
        summary:
            "Trenerio Tomo komentaras: „Labiausiai džiugina tai, kad tai, ko mokomės treniruotėse, vaikai pritaiko varžybose. Su kiekvienu turnyru matome jų tobulėjimą.“",
        link: "/naujienos/kauno-rajono-taure-2025",
        image: "/naujienos/kaunotaure1.jpg",
    },
    {
        id: 13,
        date: "2025-10-12",
        title: "Aukšto lygio iššūkiai ir didžiulė patirtis – FA KAUNAS U11 komanda „Kick Off CUP“ turnyre Lenkijoje",
        summary:
            "FA KAUNAS U11 komanda dalyvavo prestižiniame „Kick Off CUP“ turnyre Sianove, Lenkijoje, susitiko su Europos elito komandomis. Treneris Gabrielius: „Dar kartą įsitikinome, kad, įdedant maksimalias pastangas, galime konkuruoti su aukščiausio lygio varžovais.“",
        link: "/naujienos/kick-off-2025",
        image: "/naujienos/kickoff1.jpg",
    },
    {
        id: 12,
        date: "2025-10-12",
        title: "2019/2020 m. grupės „Sportfan“ futbolo turnyras!",
        summary:
            "Trenerio Tomo komentaras: „Puikiai praleidome sekmadienio pirmąją dienos pusę. Vaikų atsidavimas – puikus. Jie kovoja, stengiasi žaisti protingai, klausosi trenerių patarimų ir iš jų mokosi. Nuoširdžiai dėkojame tėveliams – turnyrai kiekvieną savaitgalį skatina tobulėti ir jūsų nenuvilti.“",
        link: "/naujienos/sportfan-turnyras",
        image: "/naujienos/sportfan.jpg",
    },
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
        summary:
            "Vyresniems jautėsi žaidybinės praktikos trūkumas, bet pelnėme daug įvarčių ir išsigryninome užduotis treniruotėms. Mažieji 2019/20 m. taip pat dalyvavo ir demonstravo puikią nuotaiką bei komandinį žaidimą.",
        link: "/naujienos/zalgiris-futsal-cup",
        image: "/naujienos/zalgiris.jpg",
    },
    {
        id: 9,
        date: "2025-09-27",
        title: "FM Ąžuolas turnyras Rudens taurė",
        summary:
            "2015 m. Juodųjų grupė kovojo iki paskutinės minutės, o 2018 m. grupė grįžo be pralaimėjimų. Trenerių komentarai apie charakterį, discipliną gynyboje ir tolesnį tobulėjimą.",
        link: "/naujienos/rudens-taure",
        image: "/naujienos/rudens.jpg",
    },
    {
        id: 8,
        date: "2025-09-21",
        title: "FA Kaunas 2019/20 m. grupė dalyvavo KAFF Prezidento taurėje",
        summary:
            "Turnyras pažymėtas geromis nuotaikomis, puikiu oru ir drąsiais debiutais. Berniukai pademonstravo drąsą ir ryžtą!",
        link: "/naujienos/kaff-prezidento-2025",
        image: "/naujienos/kaff1.jpg",
    },
    {
        id: 7,
        date: "2025-09-14",
        title: "FA Kaunas komanda dalyvavo Neodenta turnyre",
        summary:
            "Šį sekmadienį dalyvavome Neodenta futbolo turnyre, kuris tapo tikra švente mūsų komandai. Džiaugsmas, kova ir noras tobulėti kartu!",
        link: "/naujienos/neodenta-2025",
        image: "/naujienos/neodenta.jpg",
    },
    {
        id: 6,
        date: "2025-09-09",
        title: "Net penki FA KAUNAS auklėtiniai - LFF regioniniame talentų centre!",
        summary:
            "2015-2016 m. gimimo grupės berniukai įveikė atrankas ir pradės treniruotis LFF regioniniame talentų centre, siekdami dar sparčiau tobulėti.",
        link: "/naujienos/lff-talentu-centras",
        image: "/naujienos/talentai.jpg",
    },
    {
        id: 5,
        date: "2025-08-04",
        title: "Sėkminga FA Kaunas vasaros stovykla Lenkijoje",
        summary:
            "Mrągowo mieste vykusi savaitės stovykla: fizinis pasirengimas, technikos tobulinimas ir stipri komandinė dvasia.",
        link: "/naujienos/vasaros-stovykla-mragowo-2025",
        image: "/naujienos/mragowo.jpg",
    },
    {
        id: 4,
        date: "2025-08-11",
        title: "Dobrecova CUP Latvijoje (2015 m.)",
        summary:
            "Dvi FA Kaunas komandos tarp 48 dalyvių: White - 32 vieta, Blue - per plauką nuo prizininkų, 4 vieta.",
        link: "/naujienos/dobrecova-cup-2025",
        image: "/naujienos/dobrecova.jpg",
    },
    {
        id: 1,
        date: "2025-06-30",
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
            "Mūsų komanda sezoną uždarė Hegelman organizuotame turnyre - pasiektas aukštas intensyvumas ir motyvuojantis žaidimas.",
        link: "/naujienos/hegelman-turnyras",
        image: "/naujienos/hegelman.jpg",
    },
    {
        id: 3,
        date: "2025-06-23",
        title: "Summer Victory CUP Garliavoje",
        summary:
            "Trijų FA Kaunas komandų pasirodymai Garliavos turnyre - išskirtinis nusiteikimas ir bręstanti žaidimo kokybė.",
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
                duration: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.03,
            },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
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
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
                    >
                        {items.map((item) => (
                            <Link
                                to={item.link}
                                key={item.id}
                                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl"
                            >
                                <motion.div
                                    variants={card}
                                    className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden"
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.15, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-gray-100">
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
                                        <p className="text-sm text-gray-500 mb-1">
                                            {formatDate(item.date)}
                                        </p>
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
