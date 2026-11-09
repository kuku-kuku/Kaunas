// Coach profiles, in display order after sorting by licence (see lib/coaches.js).
// licencija / highlight are taken from each coach's own bio below; licencija: null shows no badge.
// Coaches without a `portrait` show an initials tile until a photo is added
// (put the photo in public/treneriai/, run `npm run images`, set `portrait`).
// Bios are plain text: blank line = new paragraph; a line ending in ":" followed by "- " lines
// becomes a titled list; a line ending in ":" followed by text becomes a titled paragraph.

export const coaches = [
  {
    id: 1,
    vardas: 'Gabrielius Zagurskas',
    slug: 'gabrielius-zagurskas',
    licencija: 'UEFA A',
    role: 'Akademijos įkūrėjas · 2015 vyr. treneris',
    highlight: 'LFF U19 rinktinės trenerio asistentas / analitikas',
    // TODO(content): real portrait; null renders an initials tile on the home page
    portrait: null,
    trumpai: 'Buvęs profesionalus futbolininkas, nuo 2021 metų visą dėmesį skiriantis futbolininkų treniravimui.',
    aprasymas: `UEFA A licencija

Gabrielius yra vienas iš akademijos įkūrėjų. Jaunas, kupinas energijos, nestokojantis geros nuotaikos treneris, profesionalaus futbolininko karjerą baigęs 2021 m. Nuo to laiko visą dėmesį skiria jaunųjų futbolininkų ugdymui.

Žaidėjo karjera:
- U-16; U-17; U-19 Lietuvos jaunimo rinktinės
- 2 rungtynės Lietuvos nacionalinėje B rinktinėje
- 2008–2009 HB Køge (Danija)
- 2011–2012 FK Nevėžis (Lietuva)
- 2012–2013 FK Atlantas (Lietuva)
- 2013–2014 Dotieas Agia (Graikija)
- 2014–2017 FK Utenis (Lietuva)
- 2017–2018 UMF Víkingur Ólafsvík (Islandija)
- 2018–2019 FK Kauno Žalgiris (Lietuva)
- 2019 UMF Snæfell (Islandija)
- 2019–2021 FC Hegelmann Litauen (Lietuva)

Trenerio karjera:
- 2016–2017 FA Utenis U-16; U-12 treneris
- 2020–2023 FM Fortūna U-15 treneris
- U-8 vyr. treneris
- 2021–2022 FM Fortūna — LFF 2 lyga vyr. treneris
- 2021–2023 HB Køge U-19 — Head of Analytics
- 2023–dabar LFF Regioninių talentų centras U11/U12 — vyr. treneris
- 2024–2025 LFF U15 — nacionalinės rinktinės asistentas
- 2025–2026 LFF 2 lyga — Kybartų „Sveikata“ vyr. treneris
- 2026 LFF nacionalinės rinktinės video analitikas
- 2026 LFF U19 nacionalinės rinktinės trenerio asistentas / analitikas`,
  },
  {
    id: 8,
    vardas: 'Rokas Mazur',
    slug: 'rokas-mazur',
    // TODO(content): licence not provided
    licencija: null,
    role: '2015–2017 vyr. treneris',
    highlight: 'Kauno „Žalgirio“ akademijos auklėtinis, 2 kartus elitinės U19 lygos čempionas',
    // TODO(content): portrait
    portrait: null,
    trumpai: 'Vis dar aktyviai sportuojantis Rokas siekia perduoti savo įgytas žinias jauniesiems auklėtiniams.',
    aprasymas: `Treneris turi išskirtinę techninę bazę, kurią puikiai perteikia savo treniruojamiems vaikams.

Pasiekimai:
- Kauno Žalgirio akademijos auklėtinis
- 2 kartus elitinės U19 lygos čempionas
- II lygos čempionas su Kauno Žalgiris B
- 2 vieta I lygoje su Be1 NFA

Atstovavo klubams:
- FK Kauno Žalgiris
- Be1 NFA
- FK Garliava
- FK Jonava
- FK Sveikata`,
  },
  {
    id: 9,
    vardas: 'Lukas Čerkauskas',
    slug: 'lukas-cerkauskas',
    // TODO(content): licence not provided
    licencija: null,
    role: '2019/2020 vyr. treneris · 2015–2017 trenerio asistentas',
    highlight: 'Lietuvos A lygos čempionas (2011, 2012), LFF taurės laimėtojas',
    // TODO(content): portrait
    portrait: null,
    trumpai: 'Futbolas mano gyvenime nuo penkerių metų.',
    aprasymas: `Per profesionalaus futbolininko karjerą atstovavau Lietuvos A lygos klubams – Panevėžio „Ekranui“, Kauno „Stumbrui“, FK „Panevėžiui“ ir Kauno rajono „Hegelmann“. Taip pat vilkėjau Lietuvos jaunimo rinktinių marškinėlius ir įgijau tarptautinių varžybų patirties.

Šiandien savo sukauptas žinias ir patirtį perduodu jauniesiems futbolininkams. Man svarbu ne tik ugdyti vaikų techninius gebėjimus, bet ir padėti jiems pamilti futbolą, auginti pasitikėjimą savimi, savarankiškumą bei komandinę dvasią.

Sportiniai pasiekimai:
- Lietuvos A lygos čempionų komandos narys – Panevėžio „Ekranas“ (2011 ir 2012 m.).
- Lietuvos futbolo federacijos taurės laimėtojas – FK „Panevėžys“ (2020 m.).
- Lietuvos Pirmos lygos čempionas – Kauno „Stumbras“ (2014 m.).
- Lietuvos U-17, U-19 ir U-21 jaunimo rinktinių žaidėjas.
- 8 rungtynės Lietuvos U-21 rinktinėje.
- 2013 m. Europos U-19 futbolo čempionato finalinio etapo dalyvis.
- UEFA Europos lygos ir Konferencijų lygos atrankos varžybų dalyvis.
- Daugiau nei 180 oficialių rungtynių Lietuvos A lygoje.`,
  },
  {
    id: 10,
    vardas: 'Eivydas Tumasas',
    slug: 'eivydas-tumasas',
    // TODO(content): licence not provided
    licencija: null,
    role: '2021/2022 vyr. treneris · 2015–2017 trenerio asistentas',
    highlight: 'Jaunimo U19 čempionas; 3 sezonai LFF 2 lygoje su „Širvėna“',
    // TODO(content): portrait
    portrait: null,
    trumpai: 'Jaunas, motyvuotas treneris, studijuojantis VDU sporto studijose.',
    aprasymas: `Kilęs iš Biržų, 3 sezonus LFF 2 lygoje atstovavo gimtojo miesto „Širvėną“, jaunimo U19 čempionas, bei kitų amžiaus grupių prizininkas.`,
  },
  {
    id: 6,
    vardas: 'Remigijus Mikalainis',
    slug: 'remigijus-mikalainis',
    // TODO(content): licence not provided
    licencija: null,
    role: 'Vartininkų treneris · 2015 trenerio asistentas',
    highlight: 'U-19 Lietuvos jaunimo rinktinė; žaidė FK „Sūduva“ ir Hedensted IF (Danija)',
    // Photo from the 2025-12-02 news article announcing his arrival
    portrait: '/naujienos/remigijus1.jpg',
    trumpai: 'Buvęs vartininkas, karjerą baigęs 2020 metais. Nuo 2021 m. treniruoja jaunuosius vartininkus.',
    aprasymas: `Remigijus specializuojasi vartininkų treniravime, didelį dėmesį skiriantis visiems reikalingiems šios pozicijos žaidėjų aspektams, t.y. techninis, fizinis bei psichologinis vartininkų pasiruošimas.

Žaidėjo karjera:
- U-19 Lietuvos jaunimo rinktinė
- 2011–2012 FK Sveikata (Lietuva)
- 2014–2017 FK Sūduva (Lietuva)
- 2017–2018 Hedensted IF (Danija)
- 2018–2020 FC Hegelmann (Lietuva)

Trenerio karjera:
- 2021 m. FA Geležinis Vilkas vartininkų treneris
- 2022–2025 m. FM Fortūna vartininkų treneris; U-8 vyr. treneris
- 2025–dabar FA Kaunas vartininkų treneris; U-11 trenerio asistentas`,
  },
  {
    id: 7,
    vardas: 'Paulius Sirotavičius',
    slug: 'paulius-sirotavicius',
    // TODO(content): licence not provided
    licencija: null,
    role: '2021/2022 trenerio asistentas',
    highlight: 'Lietuvos mažojo futbolo rinktinės narys (2022)',
    // TODO(content): portrait
    portrait: null,
    trumpai: 'Sukauptą žaidybinę patirtį ir žinias siekia perduoti jauniesiems futbolininkams, daug dėmesio skirdamas techniniam pasirengimui, individualiam tobulėjimui, žaidimo supratimui ir meilei futbolui.',
    aprasymas: `Žaidėjo karjeros stotelės:
- FK Nevėžis-2
- FK Nevėžis
- FBK Kaunas
- FC Hegelmann Minifootball

Svarbiausi pasiekimai:
- FK Nevėžis – Lietuvos čempionato sidabro medaliai.
- 2021 m. – rezultatyviausias Lietuvos mažojo futbolo 7x7 čempionato žaidėjas.
- Lietuvos mažojo futbolo 7x7 čempionato nugalėtojas su FC Hegelmann.
- 2022 m. – Lietuvos mažojo futbolo rinktinės narys, dalyvavo Socca pasaulio čempionate Budapešte, Vengrijoje.

Išsilavinimas:
Studijavo Lietuvos sporto universitete (LSU), treniravimo sistemų studijų programoje. Studijų metu gilino sporto, fizinio rengimo ir treniravimo žinias.`,
  },
];

export const coachesPage = {
  seo: {
    title: 'Treneriai',
    description:
      'FA Kaunas treneriai: buvę profesionalūs futbolininkai, Lietuvos A lygos žaidėjai ir jaunimo rinktinių nariai.',
  },
  eyebrow: 'Akademija',
  title: 'Treneriai',
  lead: 'Susipažinkite su mūsų komandos nariais – atsidavusiais, patyrusiais ir įkvepiančiais treneriais.',
};
