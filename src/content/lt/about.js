// Copy for the "Apie mus" section (About, Tikslai / Vizija, Etikos kodeksas) and the
// Akademija hub. Text is carried over from the original pages.

export const aboutPage = {
  seo: {
    title: 'Apie mus',
    description: 'FA Kaunas įkurta 2022 m. lapkritį. Sužinokite, kaip gimė akademija ir kokiomis vertybėmis vadovaujamės kasdien.',
  },
  eyebrow: 'Apie mus',
  title: 'Apie akademiją',
  lead: 'Sužinokite, kaip gimė mūsų akademija ir kokiomis vertybėmis vadovaujamės kasdien.',
  history: {
    index: '01',
    eyebrow: 'Istorija',
    title: 'Įkurta 2022 m. lapkritį',
    paragraphs: [
      '„FA KAUNAS“ įkurta 2022 m. lapkritį. Akademijos steigėjais tapo buvęs profesionalus futbolininkas **Gabrielius Zagurskas** ir medikas, futbolo entuziastas **Vytautas Jakubauskas**.',
      'Vedami milžiniško entuziazmo ir svajonės suteikti galimybę jauniesiems futbolininkams tapti profesionalais, steigėjai įkūrė savo futbolo akademiją, kurioje dirbama pagal europinius standartus, siekiant vaikų svajonę paversti realybe.',
    ],
  },
  valuesSection: { index: '02', eyebrow: 'Vertybės', title: 'Kuo vadovaujamės' },
  more: [
    { to: '/apie/tikslai', title: 'Tikslai ir vizija', text: 'FA Kaunas augimo kryptys ir vertybiniai siekiai.' },
    { to: '/apie/etikos-kodeksas', title: 'Etikos kodeksas', text: 'Vaikams, tėvams ir treneriams skirti bendri elgesio principai.' },
  ],
};

// `center` is the core value and is shown first and highlighted
export const values = [
  { id: 'center', label: 'PAGARBA', desc: 'Gerbti vieni kitus, komandos draugus, varžovus, aplinką kurioje esame.' },
  { id: 'top', label: 'Bendruomeniškumas', desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.' },
  { id: 'right', label: 'Disciplina', desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.' },
  { id: 'bottom', label: 'Supratingumas', desc: 'Kantrybė vieni kitų atžvilgiu.' },
  { id: 'left', label: 'Dėkingumas', desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.' },
];

export const goalsPage = {
  seo: {
    title: 'Tikslai ir vizija',
    description: 'FA Kaunas tikslai: masiškumas, individualus dėmesys kiekvienam sportininkui ir elitinio lygio futbolininkų ugdymas.',
  },
  eyebrow: 'Apie mus',
  title: 'Tikslai ir vizija',
  lead: 'FA Kaunas augimo kryptys ir vertybiniai siekiai.',
  heading: 'Futbolo, kaip sporto šakos populiarinimas ir puoselėjimas',
  goals: [
    {
      title: 'Masiškumas',
      text: 'Į futbolo užsiėmimus pritraukti kuo daugiau berniukų bei mergaičių. Kiekvienoje treniruojamoje amžiaus grupėje turėti minimum po 2 komandas – taip kursime konkurencingą aplinką, kurioje vaikai greičiau tobulės.',
    },
    {
      title: 'Individualus dėmesys kiekvienam sportininkui',
      text: 'Komandos parinkimas atsižvelgiant į futbolininko stažą, motyvaciją, fizinę brandą ir kt.',
    },
    {
      title: 'Iš visų sportuojančių vaikų pastebėti „deimantus“',
      text: 'Jiems skirti papildomą dėmesį ir dėti visas pastangas, kad sportininkas ateityje turėtų kuo didesnius šansus tapti profesionaliu futbolininku.',
    },
    {
      title: 'Užauginti elitinio lygio futbolininką',
      text: 'Lietuvos nacionalinei rinktinei bei užsienio klubams, rungtyniaujantiems TOP Europos lygose.',
    },
  ],
};

export const ethicsPage = {
  seo: {
    title: 'Etikos kodeksas',
    description: 'FA Kaunas etikos kodeksas: bendri elgesio principai vaikams, tėvams ir treneriams.',
  },
  eyebrow: 'Apie mus',
  title: 'Etikos kodeksas',
  lead: 'Vaikams, tėvams ir treneriams skirti bendri elgesio principai.',
};

export const ethicsSections = [
  {
    num: '01',
    id: 'vaikams',
    short: 'Vaikams',
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
    id: 'tevams',
    short: 'Tėvams',
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
    id: 'treneriams',
    short: 'Treneriams',
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

export const academyPage = {
  seo: {
    title: 'Akademija',
    description: 'FA Kaunas – daugiau nei futbolas: asmenybės ugdymas, UEFA licencijas turintys treneriai, aiški ugdymo programa ir profesionalūs analizės įrankiai.',
  },
  eyebrow: 'Akademija',
  title: 'Daugiau nei futbolas',
  lead: 'FA KAUNAS – daugiau nei futbolas. Čia ugdome stiprias asmenybes, ne tik žaidėjus.',
  personality: {
    index: '01',
    eyebrow: 'Požiūris',
    title: 'Asmenybės ugdymas',
    paragraphs: [
      'Akademijos prioritetas – ne tik sportiniai rezultatai, bet ir **vaikų asmenybės augimas**.',
      'Treniruočių metu treneriai vengia griežtų nurodymų – vietoj to užduoda atvirus klausimus, kurie skatina vaikus mąstyti, priimti savarankiškus sprendimus ir ugdyti pasitikėjimą savimi bei kūrybiškumą.',
    ],
  },
  explore: {
    index: '02',
    eyebrow: 'Akademijoje',
    title: 'Sužinokite daugiau',
    links: [
      { to: '/akademija/ugdymo-programa', title: 'Ugdymo programa', text: 'Metodika ir treniruojamos amžiaus grupės. Raskite grupę pagal vaiko gimimo metus.' },
      { to: '/akademija/treneriai', title: 'Treneriai', text: 'Buvę profesionalūs futbolininkai su UEFA A, B ir C licencijomis.' },
      { to: '/akademija/baze', title: 'Bazė ir technologijos', text: 'Kur treniruojamės ir kaip naudojame Stats4Sport, VEO bei LiveTagPRO.' },
    ],
  },
};
