import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from '../../components/BackgroundWrapper';

export default function EtikosKodeksas() {
  return (
    <main className="text-black font-sans">
      {/* HERO sekcija */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Etikos kodeksas</h1>
          <p className="text-lg font-light max-w-2xl">
            Vaikams, tėvams ir treneriams skirti bendri elgesio principai
          </p>
        </motion.div>
      </section>

      {/* TURINYS su linijų fono efektu */}
      <BackgroundWrapper>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
            <Section
              title="FA KAUNAS UŽSIĖMIMUS LANKANTIEMS VAIKAMS"
              items={[
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
              ]}
            />

            <Section
              title="FA KAUNAS VAIKŲ TĖVAMS"
              items={[
                "Leiskite savo vaikui žaisti ir mėgautis žaidimu taip, kaip nori Jūsų vaikas ir komandos treneris, o ne Jūs.",
                "Vaikas negali vienu metu vykdyti trenerio, Jūsų ir savo sprendimų – pasitikėkite treneriu.",
                "Skatinkite ir palaikykite vaiką pozityviai, nešaukite ir nežeminkite.",
                "Rodykite pagarbą visiems: teisėjui, varžovui, komandai.",
                "Nevartokite neleistinų medžiagų ar alkoholio aplink vaikų sportą.",
                "Pagirkite už pastangas, nesureikšminkite pralaimėjimų ar rezultatų.",
                "Gerbkite trenerių darbą, laikykitės taisyklių ir futbolo vertybių.",
                "Visada elkitės taip, kaip norėtumėte, kad vaikas elgtųsi aikštelėje.",
                "Nepamirškite – svarbiausia ugdymas, ne pergalės.",
              ]}
            />

            <Section
              title="FA KAUNAS TRENERIAMS"
              items={[
                "Vaiko saugumas ir gera emocija svarbiausia.",
                "Rezultatas nėra svarbiau nei tobulėjimas.",
                "Suteikite galimybę žaisti visiems.",
                "Būkite pavyzdys ir autoritetas vaikams.",
                "Ugdykite vertybes ir motyvuokite pagyrimais, ne kritika.",
                "Skatinkite „Fair Play“, gerbkite visus žaidimo dalyvius.",
                "Saugokite vaikus nuo grubių veiksmų ir sukčiavimo.",
                "Būkite atsakingi ir už vaikų tėvų elgesį rungtynių metu.",
              ]}
            />
          </div>
        </motion.section>
      </BackgroundWrapper>
    </main>
  );
}

// Atskiras komponentas kiekvienai sekcijai
function Section({ title, items }) {
  return (
    <div className="flex-1 min-w-[280px]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0077cc]">{title}</h2>
      <ul className="list-decimal list-inside space-y-3 text-gray-800 text-md leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
