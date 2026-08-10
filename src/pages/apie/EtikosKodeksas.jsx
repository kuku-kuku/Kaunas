import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    num: '01',
    title: 'FA KAUNAS UŽSIĖMIMUS LANKANTIEMS VAIKAMS',
    items: [
      "Žaiskite dėl paties žaidimo džiaugsmo, ne dėl noro įsiteikti treneriams ar tėvams.",
      "Visada prisiminkite, jog futbolo žaidimo tikslas yra gerai praleisti laiką, pagerinti savo įgūdžius ir jaustis gerai tarp kitų.",
      "Žaiskite pagal žaidimo taisykles, laikykitės žaidimo „Fair Play“ taisyklių.",
      "Visada gerbkite ir priimkite teisėjų sprendimus, net ir tada kai su jais nesutinkate.",
      "Gerbkite savo varžovą, kad ir koks jis būtų. Rodykite jam pagarbą, nepriklausomai nuo varžovo atsako.",
      "Bendradarbiaukite su treneriu, komandos draugais ir net varžovais ne tik aikštelėje, bet ir už jos ribų.",
      "Žaidimo metu nevartokite necenzūrinių žodžių, nerodykite nepadorių gestų, nedemonstruokite paniekos ar nepagarbos.",
      "Niekada specialiai netraumuokite savo oponento dėl rezultato ar kitų savanaudiškų tikslų.",
      "Pasibaigus varžyboms, būtinai padėkokite varžovams, jų treneriui, teisėjui, sirgaliams.",
      "Nepaisant atstovaujamos, bei varžovų komandos lygio, stenkitės panaudoti visus savo įgūdžius ir pasimėgauti žaidimu.",
      "Rungtynių metu net ir būdami už aikštės palaikykite savo komandos draugus.",
      "Laimėkite su šypsena, tačiau mokėkite ir oriai pralaimėti.",
    ],
  },
  {
    num: '02',
    title: 'FA KAUNAS VAIKŲ TĖVAMS',
    items: [
      "Leiskite savo vaikui žaisti ir mėgautis žaidimu taip, kaip nori Jūsų vaikas ir komandos treneris, o ne Jūs.",
      "Vaikas negali vienu metu vykdyti trenerio, Jūsų ir savo sprendimų – pasitikėkite treneriu.",
      "Skatinkite ir palaikykite vaiką pozityviai, nešaukite ir nežeminkite.",
      "Rodykite pagarbą visiems: teisėjui, varžovui, komandai.",
      "Nevartokite neleistinų medžiagų ar alkoholio aplink vaikų sportą.",
      "Pagirkite už pastangas, nesureikšminkite pralaimėjimų ar rezultatų.",
      "Gerbkite trenerių darbą, laikykitės taisyklių ir futbolo vertybių.",
      "Visada elkitės taip, kaip norėtumėte, kad vaikas elgtųsi aikštelėje.",
      "Nepamirškite – svarbiausia ugdymas, ne pergalės.",
    ],
  },
  {
    num: '03',
    title: 'FA KAUNAS TRENERIAMS',
    items: [
      "Vaiko saugumas ir gera emocija svarbiausia.",
      "Rezultatas nėra svarbiau nei tobulėjimas.",
      "Suteikite galimybę žaisti visiems.",
      "Būkite pavyzdys ir autoritetas vaikams.",
      "Ugdykite vertybes ir motyvuokite pagyrimais, ne kritika.",
      "Skatinkite „Fair Play“, gerbkite visus žaidimo dalyvius.",
      "Saugokite vaikus nuo grubių veiksmų ir sukčiavimo.",
      "Būkite atsakingi ir už vaikų tėvų elgesį rungtynių metu.",
    ],
  },
];

export default function EtikosKodeksas() {
  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">01 / Etika</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Etikos kodeksas
            </h1>
            <p className="text-lg text-white/40 font-light max-w-xl">
              Vaikams, tėvams ir treneriams skirti bendri elgesio principai
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTIONS ═══ */}
      {sections.map((section, sIdx) => (
        <section key={section.num} className={`px-6 md:px-12 lg:px-24 py-16 md:py-20 ${sIdx < sections.length - 1 ? 'border-b border-academy-line' : ''}`}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-[11px] font-mono text-academy-blue">{section.num}</span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight mt-2">
                {section.title}
              </h2>
              <div className="w-12 h-px bg-academy-blue mt-4" />
            </motion.div>

            <div className="space-y-0">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-start gap-5 py-4 border-b border-academy-line/50"
                >
                  <span className="text-[12px] font-mono text-white/20 w-6 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/60 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
