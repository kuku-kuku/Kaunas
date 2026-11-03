// Facilities & training technology. Technology copy comes from the original Akademija page.
// TODO(content): pitches, surfaces, winter venue, directions (TODO-content.md → Facilities).

export const technology = [
  {
    num: '01',
    title: 'Stats4Sport',
    desc: 'Siekdami nuolat tobulėti, kasdieniame darbe naudojame „Stats4Sport" sistemą. Ši platforma leidžia planuoti treniruotes, kurti žaidėjo profilį, sekti kiekvieno auklėtinio progresą ir stebėti ilgalaikius pokyčius. Sistema naudinga ne tik treneriams – tai ir puikus įrankis tėvams, leidžiantis matyti treniruočių grafiką, lankomumą bei artėjančius renginius.',
  },
  {
    num: '02',
    title: 'VEO Sports technology',
    desc: 'VEO Sports technology – pažangių technologijų pagalba filmuojamos treniruotės ir rungtynės. Dirbtinis intelektas apdoroja medžiagą, kurios pagalba galime peržiūrėti, analizuoti, koreguoti ir pritaikyti surinktą informaciją kasdieniame treniruočių procese.',
  },
  {
    num: '03',
    title: 'LiveTagPRO',
    desc: 'LiveTagPRO – video analizių programa, leidžianti efektyviai ir sklandžiai perteikti informaciją žaidėjams, vykdyti treniruočių ir rungtynių analizes su treneriais.',
  },
];

export const facilitiesPage = {
  seo: {
    title: 'Bazė ir technologijos',
    description:
      'Kur treniruojasi FA Kaunas: treniruočių vieta Kaune, žemėlapis ir technologijos – Stats4Sport, VEO kameros ir LiveTagPRO video analizė.',
  },
  eyebrow: 'Akademija',
  title: 'Bazė ir technologijos',
  lead: 'Treniruojamės Kaune ir kiekvieną treniruotę bei rungtynes analizuojame su profesionaliais įrankiais.',
  location: {
    index: '01',
    eyebrow: 'Vieta',
    title: 'Kur treniruojamės',
    // TODO(content): confirm Žeimenos g. 165 is the training venue
    intro: 'Treniruotės vyksta Žeimenos gatvėje, Kaune. Tikslų treniruotės laiką ir vietą suderins jūsų vaiko treneris.',
    // TODO(content): parking / public transport tips, e.g. { title: 'Automobiliu', text: '…' }
    directions: [],
  },
  venues: {
    index: '02',
    eyebrow: 'Aikštės',
    title: 'Treniruočių aplinka',
    // TODO(content): real venues, e.g. { name, surface, image }. While empty, placeholders show.
    items: [],
    placeholders: ['Pagrindinė aikštė', 'Žiemos treniruočių vieta', 'Persirengimo patalpos'],
  },
  tech: {
    index: '03',
    eyebrow: 'Technologijos',
    title: 'Duomenys ir video kiekvienam žaidėjui',
    intro: 'Siekdami nuolat tobulėti, treniruočių planavimui, žaidėjų progresui ir rungtynių analizei naudojame profesionalius įrankius.',
  },
};
