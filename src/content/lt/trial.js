// /registracija – trial training sign-up.
// TODO(content): response time, whether the first session is free, what to bring
// (TODO-content.md → Trial registration flow). Nothing here promises any of those yet.

export const trialPage = {
  seo: {
    title: 'Registracija į bandomąją treniruotę',
    description:
      'Užregistruokite vaiką į bandomąją FA Kaunas futbolo treniruotę. Užpildykite trumpą formą – treneris susisieks ir pasiūlys tinkamą grupę bei laiką.',
  },
  eyebrow: 'Bandomoji treniruotė',
  title: 'Registracija į treniruotę',
  lead: 'Užpildykite trumpą formą – treneris susisieks su jumis ir pasiūlys tinkamą grupę bei laiką.',
  alt: 'Norite paklausti iš karto? Skambinkite arba rašykite:',

  form: {
    childSection: 'Vaikas',
    parentSection: 'Tėvai / globėjai',
    childName: { label: 'Vaiko vardas ir pavardė', autoComplete: 'off' },
    birthYear: {
      label: 'Gimimo metai',
      placeholder: 'Pasirinkite metus',
      other: 'Kiti metai',
      groupHint: (label) => `Grupė: ${label} m. gimusieji`,
      otherHint: 'Pasitarsime, kuri grupė tinkamiausia.',
    },
    parentName: { label: 'Jūsų vardas', autoComplete: 'name' },
    phone: { label: 'Telefonas', autoComplete: 'tel', hint: 'Treneris paskambins šiuo numeriu.' },
    email: { label: 'El. paštas', autoComplete: 'email' },
    message: {
      label: 'Papildoma informacija',
      placeholder: 'Pvz. ar vaikas jau žaidė futbolą, patogios dienos, sveikatos ypatumai',
    },
    consent: 'Sutinku, kad mano pateikti duomenys būtų naudojami susisiekti dėl treniruotės, kaip aprašyta',
    consentLink: 'privatumo politikoje',
    submit: 'Siųsti registraciją',
    sending: 'Siunčiama…',
    required: 'Laukai, pažymėti *, privalomi.',
  },

  errors: {
    childName: 'Įrašykite vaiko vardą.',
    birthYear: 'Pasirinkite vaiko gimimo metus.',
    parentName: 'Įrašykite savo vardą.',
    phone: 'Įrašykite telefono numerį, pvz. +370 600 00000.',
    email: 'Patikrinkite el. pašto adresą.',
    consent: 'Reikia jūsų sutikimo, kad galėtume susisiekti.',
    send: 'Nepavyko išsiųsti registracijos. Bandykite dar kartą arba susisiekite telefonu ar el. paštu.',
  },

  success: {
    title: (name) => (name ? `Ačiū, ${name}!` : 'Ačiū!'),
    lead: 'Registraciją gavome. Štai kas bus toliau:',
    steps: [
      'Treneris susisieks su jumis nurodytu telefonu.',
      'Kartu suderinsite tinkamą grupę ir treniruotės laiką.',
      'Atvykite į treniruotę – vaikas susipažins su treneriu ir komanda.',
    ],
    another: 'Registruoti dar vieną vaiką',
    programs: 'Ugdymo programa',
  },
};
