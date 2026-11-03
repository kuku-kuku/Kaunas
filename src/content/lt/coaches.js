// Coach profiles. Older fields are Lithuanian to match the existing pages.
// licencija / highlight are taken from each coach's own bio below.
// TODO(content): portraits for everyone except Remigijus Mikalainis are on the shoot list in
// TODO-content.md; his photo (club kit, plain wall) is the reference style. Coaches without
// a `portrait` show an initials tile.

export const coaches = [
  {
    id: 1,
    vardas: 'Gabrielius Zagurskas',
    slug: 'gabrielius-zagurskas',
    licencija: 'UEFA A',
    role: 'Akademijos įkūrėjas',
    highlight: 'LFF U15 rinktinės trenerio asistentas',
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
- 2023–dabar LFF Regioninių talentų centras U10/U11 — vyr. treneris
- 2024–dabar LFF U15 — nacionalinės rinktinės asistentas
- 2025–dabar LFF 2 lyga — Kybartų „Sveikata" vyr. treneris`,
  },
  {
    id: 4,
    vardas: 'Marius Činikas',
    slug: 'marius-cinikas',
    licencija: 'UEFA B',
    highlight: '3 kartus Lietuvos čempionas',
    // TODO(content): real portrait; null renders an initials tile on the home page
    portrait: null,
    trumpai: 'Buvęs profesionalus futbolininkas, per savo karjerą sukaupęs nemenką žinių bagažą.',
    aprasymas: `UEFA B licencija

Nuolat tobulinantis savo kompetencijas, pasiruošęs patirtį perduoti jauniesiems futbolininkams.

Pasiekimai:
- 3 kart Lietuvos čempionas
- Supertaurės laimėtojas
- Estijos aukščiausios lygos 2 vietos laimėtojas

Žaidėjo karjera:
- U-17; U-19; U-21 Lietuvos jaunimo rinktinių narys
- 2006–2007 FK Nevėžis (Lietuva)
- 2008–2010 FBK Kaunas (Lietuva)
- 2009–2010 Heart of Midlothian FC (Škotija)
- 2010–2011 Partizan Minsk (Baltarusija)
- 2011–2012 Metalurgs (Latvija)
- 2012–2013 FK Minsk (Baltarusija)
- 2013–2014 Sillamäe Kalev (Estija)
- 2014–2017 FK „Sūduva" (Lietuva) / Sillamäe Kalev (Estija)
- 2017–2019 FK „Sūduva" (Lietuva) / FK „Jonava" (Lietuva)
- 2019–2021 FK „Atlantas" (Lietuva) / FK „Jonava" (Lietuva)`,
  },
  {
    id: 2,
    vardas: 'Lukas Sipavičius',
    slug: 'lukas-sipavicius',
    licencija: 'UEFA C',
    highlight: 'Lietuvos salės futbolo čempionas',
    // TODO(content): real portrait; null renders an initials tile on the home page
    portrait: null,
    trumpai: 'Lietuvos salės futbolo rinktinės narys, UEFA C licencijos treneris.',
    aprasymas: `UEFA C licencija

Lukas – jaunas treneris, sukaupęs didelę patirtį dirbdamas su jaunimu. Buvęs Kauno „Žalgirio" futsal komandos žaidėjas, atstovavęs I lygos klubams.

Pasiekimai:
- Lietuvos salės futbolo čempionas
- 2 kartus LFF taurės nugalėtojas
- LFF supertaurės nugalėtojas
- Baltijos taurės nugalėtojas`,
  },
  {
    id: 5,
    vardas: 'Tomas Macelis',
    slug: 'tomas-macelis',
    licencija: 'UEFA C',
    highlight: 'Kauno „Žalgirio“ akademijos auklėtinis',
    // TODO(content): real portrait; null renders an initials tile on the home page
    portrait: null,
    trumpai: 'Kauno Žalgirio akademijos auklėtinis, patirtį kaupęs jaunimo komandose ir LFF 2 lygoje.',
    aprasymas: `UEFA C licencija

Kauno Žalgirio akademijos auklėtinis rungtyniavęs jaunimo komandose.
Vėliau treneris rungtyniavo LFF 2 lygoje VJFM Fortūnos komandoje, tuo pačiu pradėjo treniruoti jaunąją kartą.

2022 prisijungė prie FA KAUNAS.

Studijuoja Lietuvos sporto universitete. Treniravimo sistemų programoje, pasirinkęs atletinio rengimo specializaciją.`,
  },
  {
    id: 3,
    vardas: 'Ernestas Bernota',
    slug: 'ernestas-bernota',
    licencija: 'LFF D',
    highlight: 'Buvęs vartininkas, Marijampolės „Sūduvos“ auklėtinis',
    // TODO(content): real portrait; null renders an initials tile on the home page
    portrait: null,
    trumpai: 'Ambicingas treneris, sukaupęs patirties Marijampolės Sūduvoje ir kitose komandose.',
    aprasymas: `Licencija: LFF D

Ernestas – ambicingas ir žingeidus treneris, visada siekiantis tobulėti. Futbolininko karjerą pradėjo Marijampolėje, kur perėjo visas amžiaus grupes. Sukaupė nemažą patirtį kaip vartininkas, treniruotas vieno geriausių vartininkų trenerių Lietuvoje – Audriaus Ramono.

Klubai:
- Marijampolės „Sūduvos" dubleriai
- Įvairūs II lygos ir žemesnių lygų klubai`,
  },
  {
    id: 6,
    vardas: 'Remigijus Mikalainis',
    slug: 'remigijus-mikalainis',
    // TODO(content): licence not published yet
    licencija: null,
    role: 'Vartininkų treneris',
    highlight: 'Žaidė FK „Sūduva“, Hedensted IF (Danija) ir FC Hegelmann',
    // From the 2025-12-02 news article announcing his arrival
    portrait: '/naujienos/remigijus1.jpg',
    trumpai: 'Vartininkų treneris, akademijoje rūpinasi vartininkų įgūdžių tobulinimu.',
    aprasymas: `Remigijus turi sukaupęs nemažą patirtį jaunųjų futbolininkų ir ypač vartininkų ugdyme. Prie FA Kaunas trenerių kolektyvo prisijungė 2025 m. gruodį.

Žaidėjo karjera:
- FK „Sūduva“ (Lietuva)
- Hedensted IF (Danija)
- FC Hegelmann (Lietuva)`,
  },
];

export const coachesPage = {
  seo: {
    title: 'Treneriai',
    description:
      'FA Kaunas treneriai: buvę profesionalūs futbolininkai ir jaunimo rinktinių nariai su UEFA A, B ir C licencijomis.',
  },
  eyebrow: 'Akademija',
  title: 'Treneriai',
  lead: 'Susipažinkite su mūsų komandos nariais – atsidavusiais, patyrusiais ir įkvepiančiais treneriais.',
};
