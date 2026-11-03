import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchNewsList, cmsUrl } from "../lib/cms";

const fallbackNews = [
  { id: 23, date: "2025-12-21", title: "FA Kaunas 2015 m. komanda dalyvavo „Ąžuolo“ turnyre", summary: "Trenerio Tomo Macelio treniruojama FA Kaunas 2015 m. gimimo komanda dalyvavo „Ąžuolo“ turnyre. Komanda siekė išlikti susikaupusi ir žaisti maksimaliomis pastangomis viso turnyro metu. Treneris pasidžiaugė vaikų nusiteikimu, pažymėjo tobulintinas vietas ir akcentavo tokių turnyrų svarbą jaunųjų futbolininkų ugdymui.", link: "/naujienos/azuolo-turnyras-2015", image: "/naujienos/azuolas1.jpg" },
  { id: 22, date: "2025-12-20", title: "FA Kaunas auklėtiniai sužaidė draugiškas rungtynes su IBRA Football Academy", summary: "Mažieji FA Kaunas auklėtiniai sužaidė draugiškas rungtynes su IBRA Football Academy komanda, siekdami įgauti daugiau patirties. Treneris Tomas Macelis pasidžiaugė vaikų progresu žaidžiant 4 prieš 4, didėjančiu įvarčių skaičiumi ir jaunųjų futbolininkų noru mokytis bei tobulėti.", link: "/naujienos/friendly-match-ibra", image: "/naujienos/ibra1.jpg" },
  { id: 21, date: "2025-12-19", title: "FA Kaunas 2017 m. komanda dalyvavo „Kaunas Football Fest“ turnyre", summary: "FA Kaunas 2017 m. gimimo komanda dalyvavo dviejų dienų „Kaunas Football Fest“ turnyre. Jaunieji futbolininkai sužaidė daug rungtynių, įgijo vertingos patirties ir parodė progresą aikštėje. Treneris Ernestas Bernota akcentavo komandos nusiteikimą antrąją turnyro dieną bei džiaugėsi vaikų pastangomis ir tėvų palaikymu.", link: "/naujienos/kaunas-football-fest-2017", image: "/naujienos/kff2017_1.jpg" },
  { id: 20, date: "2025-12-07", title: "FA Kaunas 2019–20 m. gim. grupė dalyvavo „Kids Cup“ turnyre Vilniuje", summary: "FA Kaunas 2019–20 m. gim. grupė gruodžio 7 d. dalyvavo „Kids Cup“ turnyre Vilniuje. Jauniausi akademijos futbolininkai sužaidė su komandomis iš visos Lietuvos ir pasisėmė vertingos patirties. Treneris Tomas Macelis pasidžiaugė vaikų pastangomis, progresu žaidime vienas prieš vieną ir akcentavo intensyvumo svarbą treniruotėse.", link: "/naujienos/kids-cup-vilnius-2025", image: "/naujienos/kidscup1.jpg" },
  { id: 19, date: "2025-12-06", title: 'Dviguba FA Kaunas 2015 m. komandos sėkmė „Kaunas Football Fest“ turnyre', summary: 'FA Kaunas 2015 m. komanda dalyvavo tarptautiniame „Kaunas Football Fest“ turnyre, kuriame varžėsi komandos iš Lietuvos ir užsienio. FA Kaunas Blue tapo turnyro vicečempionais, o FA Kaunas White laimėjo „konferencijų lygą“. Treneriai džiaugėsi vaikų darbu gynyboje, kovingumu ir disciplina.', link: "/naujienos/kaunas-football-fest-2025", image: "/naujienos/kaunasfest1.jpg" },
  { id: 18, date: "2025-12-02", title: "Prie FA Kaunas prisijungė vartininkų treneris Remigijus Mikalainis 🧤⚽️", summary: "Džiaugiamės galėdami pranešti, kad prie FA Kaunas trenerių kolektyvo prisijungė Remigijus Mikalainis. Treneris rūpinsis vartininkų įgūdžių tobulinimu, o jo patirtis FK Sūduva, Hedensted IF (Danija) ir FC Hegelmann klubuose leis dar labiau auginti akademijos vartininkų kartą.", link: "/naujienos/remigijus-mikalainis-2025", image: "/naujienos/remigijus1.jpg" },
  { id: 17, date: "2025-11-30", title: 'FA Kaunas 2019/2020 m. komandos Neodenta „Blitz Cup“ turnyre ⚽️💙', summary: "Lapkričio 29–30 dienomis FA Kaunas 2019/2020 metų gimimo komandos dalyvavo Neodenta „Blitz Cup“ turnyre. Mažieji auklėtiniai sužaidė daug rungtynių, pasisėmė puikių emocijų ir įgavo vertingos žaidybinės patirties. Treneriai Lukas Sipavičius ir Tomas Macelis pabrėžė vaikų drąsą, energiją ir nuolatinį tobulėjimą su kiekvienu turnyru.", link: "/naujienos/neodenta-blitz-cup-2025", image: "/naujienos/blitz1.jpg" },
  { id: 16, date: "2025-11-30", title: 'FA KAUNAS 2017 m. komandos turnyras „Resort Niegocin Cup“ Lenkijoje 🇵🇱', summary: 'FA Kaunas 2017 m. komanda dalyvavo 3 dienų „Resort Niegocin Cup“ turnyre Lenkijoje. Treneris Ernestas Bernota džiaugėsi berniukų drausme, kovingumu, augančiu komandinio žaidimo supratimu ir stiprėjančiu tarpusavio ryšiu aikštėje ir už jos ribų. Rungtynių MVP apdovanojimus pelnė Radvilas Juodis, Matas Petkevičius, Arijus Ročka ir Marko Bjelan, o naudingiausiu žaidėju komandoje išrinktas Arijus Ročka.', link: "/naujienos/resort-niegocin-cup-2025", image: "/naujienos/lenkija1.jpg" },
  { id: 15, date: "2025-10-27", title: "Savaitgalinis „Ąžuolo rudens taurės“ turnyras!", summary: "2018 m. komanda dalyvavo „Ąžuolo“ turnyre. Treneris Tomas: „Pirmieji 5x5 žingsniai 2019 m. gimusiems vaikams – drąsa ir noras žaisti padėjo komandai.“ Treneris Ernestas: „Pakoregavus žaidimo stilių – visos likusios dvikovos laimėtos; augantis komandos susižaidimas ir brandumas aikštėje.“", link: "/naujienos/azuolo-rudens-taure-2025", image: "/naujienos/azuolo1.jpg" },
  { id: 14, date: "2025-10-20", title: "Tobulėjimas su kiekvienu turnyru: 2019/2020 m. grupės pasirodymas „Kauno rajono taurė“", summary: "Trenerio Tomo komentaras: „Labiausiai džiugina tai, kad tai, ko mokomės treniruotėse, vaikai pritaiko varžybose. Su kiekvienu turnyru matome jų tobulėjimą.“", link: "/naujienos/kauno-rajono-taure-2025", image: "/naujienos/kaunotaure1.jpg" },
  { id: 13, date: "2025-10-12", title: "Aukšto lygio iššūkiai ir didžiulė patirtis – FA KAUNAS U11 komanda „Kick Off CUP“ turnyre Lenkijoje", summary: "FA KAUNAS U11 komanda dalyvavo prestižiniame „Kick Off CUP“ turnyre Sianove, Lenkijoje, susitiko su Europos elito komandomis. Treneris Gabrielius: „Dar kartą įsitikinome, kad, įdedant maksimalias pastangas, galime konkuruoti su aukščiausio lygio varžovais.“", link: "/naujienos/kick-off-2025", image: "/naujienos/kickoff1.jpg" },
  { id: 12, date: "2025-10-12", title: "2019/2020 m. grupės „Sportfan“ futbolo turnyras!", summary: "Trenerio Tomo komentaras: „Puikiai praleidome sekmadienio pirmąją dienos pusę. Vaikų atsidavimas – puikus. Jie kovoja, stengiasi žaisti protingai, klausosi trenerių patarimų ir iš jų mokosi. Nuoširdžiai dėkojame tėveliams – turnyrai kiekvieną savaitgalį skatina tobulėti ir jūsų nenuvilti.“", link: "/naujienos/sportfan-turnyras", image: "/naujienos/sportfan.jpg" },
  { id: 11, date: "2025-10-06", title: "Puikus žaidimas ir vienybė aikštėje – „Balcia Cup“ 2019/20 m. turnyro akimirkos", summary: "Smagus sekmadienio rytas, daug įvarčių ir tikra komandinė dvasia. Treneris Tomas: „Turnyre pelnėme nemažai įvarčių ir džiaugsmingai juos šventėme. Džiaugiuosi, kad vaikai aikštėje elgiasi kaip tikri futbolininkai – švenčia įvarčius, palaiko vieni kitus. Turime nuostabius vaikus ir labai laukiame kitų turnyrų.“", link: "/naujienos/balcia-cup-2025", image: "/naujienos/balcia.jpg" },
  { id: 10, date: "2025-09-28", title: "Žalgiris Futsal CUP turnyras", summary: "Vyresniems jautėsi žaidybinės praktikos trūkumas, bet pelnėme daug įvarčių ir išsigryninome užduotis treniruotėms. Mažieji 2019/20 m. taip pat dalyvavo ir demonstravo puikią nuotaiką bei komandinį žaidimą.", link: "/naujienos/zalgiris-futsal-cup", image: "/naujienos/zalgiris.jpg" },
  { id: 9, date: "2025-09-27", title: "FM Ąžuolas turnyras Rudens taurė", summary: "2015 m. Juodųjų grupė kovojo iki paskutinės minutės, o 2018 m. grupė grįžo be pralaimėjimų. Trenerių komentarai apie charakterį, discipliną gynyboje ir tolesnį tobulėjimą.", link: "/naujienos/rudens-taure", image: "/naujienos/rudens.jpg" },
  { id: 8, date: "2025-09-21", title: "FA Kaunas 2019/20 m. grupė dalyvavo KAFF Prezidento taurėje", summary: "Turnyras pažymėtas geromis nuotaikomis, puikiu oru ir drąsiais debiutais. Berniukai pademonstravo drąsą ir ryžtą!", link: "/naujienos/kaff-prezidento-2025", image: "/naujienos/kaff1.jpg" },
  { id: 7, date: "2025-09-14", title: "FA Kaunas komanda dalyvavo Neodenta turnyre", summary: "Šį sekmadienį dalyvavome Neodenta futbolo turnyre, kuris tapo tikra švente mūsų komandai. Džiaugsmas, kova ir noras tobulėti kartu!", link: "/naujienos/neodenta-2025", image: "/naujienos/neodenta.jpg" },
  { id: 6, date: "2025-09-09", title: "Net penki FA KAUNAS auklėtiniai - LFF regioniniame talentų centre!", summary: "2015-2016 m. gimimo grupės berniukai įveikė atrankas ir pradės treniruotis LFF regioniniame talentų centre, siekdami dar sparčiau tobulėti.", link: "/naujienos/lff-talentu-centras", image: "/naujienos/talentai.jpg" },
  { id: 5, date: "2025-08-04", title: "Sėkminga FA Kaunas vasaros stovykla Lenkijoje", summary: "Mrągowo mieste vykusi savaitės stovykla: fizinis pasirengimas, technikos tobulinimas ir stipri komandinė dvasia.", link: "/naujienos/vasaros-stovykla-mragowo-2025", image: "/naujienos/mragowo.jpg" },
  { id: 4, date: "2025-08-11", title: "Dobrecova CUP Latvijoje (2015 m.)", summary: "Dvi FA Kaunas komandos tarp 48 dalyvių: White - 32 vieta, Blue - per plauką nuo prizininkų, 4 vieta.", link: "/naujienos/dobrecova-cup-2025", image: "/naujienos/dobrecova.jpg" },
  { id: 1, date: "2025-06-30", title: "Startavo vaikų vasaros stovykla!", summary: "Šią savaitę prasidėjo FA Kaunas vasaros stovykla, kurioje dalyvauja virš 60 vaikų iš įvairių amžiaus grupių.", link: "/naujienos/stovykla-2025", image: "/naujienos/stovykla.jpg" },
  { id: 2, date: "2025-06-30", title: "2019/20m. auklėtiniai užbaigė sezoną turnyre", summary: "Mūsų komanda sezoną uždarė Hegelman organizuotame turnyre - pasiektas aukštas intensyvumas ir motyvuojantis žaidimas.", link: "/naujienos/hegelman-turnyras", image: "/naujienos/hegelman.jpg" },
  { id: 3, date: "2025-06-23", title: "Summer Victory CUP Garliavoje", summary: "Trijų FA Kaunas komandų pasirodymai Garliavos turnyre - išskirtinis nusiteikimas ir bręstanti žaidimo kokybė.", link: "/naujienos/summer-victory", image: "/naujienos/summervictory.jpg" },
];

function formatDateShort(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("lt-LT", { year: "numeric", month: "2-digit", day: "2-digit" });
}

function sortByDateDesc(arr) {
  return [...arr].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export default function Naujienos() {
  const [cmsItems, setCmsItems] = useState(null);
  const [cmsError, setCmsError] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setCmsError(false);
        const list = await fetchNewsList();
        const normalized = (list || []).map((n) => {
          const cover = n.coverImage?.url ? cmsUrl(n.coverImage.url) : null;
          return { id: n.id, date: n.date, title: n.title, summary: n.excerpt || "", slug: n.slug, image: cover, source: "cms" };
        });
        if (!alive) return;
        setCmsItems(normalized);
      } catch (e) {
        console.error(e);
        if (!alive) return;
        setCmsError(true);
        setCmsItems([]);
      }
    }
    load();
    return () => { alive = false; };
  }, []);

  const items = useMemo(() => {
    const cms = Array.isArray(cmsItems) && !cmsError ? cmsItems : [];
    const merged = [...cms, ...fallbackNews.map((n) => ({ ...n, source: "static" }))];
    const seen = new Set();
    const deduped = merged.filter((n) => {
      const key = n.slug ? `cms:${n.slug}` : `static:${n.link}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    return sortByDateDesc(deduped);
  }, [cmsItems, cmsError]);

  const featured = items[0];
  const rest = items.slice(1);

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO HEADER ═══ */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Naujienos / {new Date().getFullYear()}</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Naujienos
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              Naujausia informacija iš FA KAUNAS gyvenimo
            </p>
            {cmsError && (
              <p className="mt-4 text-[12px] text-fg-subtle uppercase tracking-wider">
                Šiuo metu rodomos statinės naujienos (CMS nepasiekiamas).
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED ARTICLE ═══ */}
      {featured && (
        <section className="px-6 md:px-12 lg:px-24 py-12 border-b border-academy-line">
          <div className="max-w-7xl mx-auto">
            <Link
              to={featured.slug ? `/naujienos/${featured.slug}` : featured.link}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] overflow-hidden bg-academy-dark rounded-lg"
                >
                  {featured.image && (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-academy-blue text-white px-3 py-1 font-medium">
                      Naujausia
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-[12px] uppercase tracking-[0.15em] text-fg-subtle font-mono">
                    {formatDateShort(featured.date)}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-fg-subtle leading-relaxed line-clamp-3">
                    {featured.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-accent-bright font-medium pt-2">
                    Skaityti daugiau <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </span>
                </motion.div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ═══ NEWS ARCHIVE ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {rest.map((item, i) => {
            const link = item.slug ? `/naujienos/${item.slug}` : item.link;
            const num = String(i + 2).padStart(2, '0');
            const isReversed = i % 2 === 1;
            const isFullWidth = i % 5 === 2;

            if (isFullWidth) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="border-b border-academy-line"
                >
                  <Link to={link} className="group block py-8">
                    <div className="relative aspect-video overflow-hidden bg-academy-dark rounded-lg mb-6">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-academy-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="section-number">{num}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-fg-subtle font-mono mb-2">
                          {formatDateShort(item.date)}
                        </p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-fg-subtle group-hover:text-accent-bright group-hover:translate-x-1 transition-all duration-200 mt-2 flex-shrink-0">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="border-b border-academy-line"
              >
                <Link to={link} className="group block py-8">
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center ${isReversed ? '' : ''}`}>
                    <div className={`${isReversed ? 'md:col-start-7 md:col-span-6 md:order-2' : 'md:col-span-5'}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-academy-dark rounded-lg">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>

                    <div className={`${isReversed ? 'md:col-start-1 md:col-span-5 md:order-1' : 'md:col-start-7 md:col-span-6'} space-y-3`}>
                      <div className="flex items-center gap-4">
                        <span className="section-number">{num}</span>
                        <div className="h-px flex-1 bg-academy-line" />
                        <span className="text-[11px] uppercase tracking-[0.12em] text-fg-subtle font-mono">
                          {formatDateShort(item.date)}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-fg-subtle leading-relaxed line-clamp-2 hidden md:block">
                        {item.summary}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-fg-subtle group-hover:text-accent-bright font-medium transition-colors duration-200">
                        Skaityti daugiau <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
