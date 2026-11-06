// /prisijunk – community, 1.2% income-tax support and sponsorship. Copy from the original page.
import { site } from './site';

export const supportPage = {
  seo: {
    title: 'Prisijunk: parama ir rėmimas',
    description: 'Skirkite 1,2% GPM FA Kaunas arba tapkite rėmėju – prisidėkite prie vaikų futbolo ugdymo Kaune.',
  },
  eyebrow: 'Prisijunk',
  title: 'Prisijunk prie mūsų šeimos',
  lead: 'Kviečiame tapti mūsų akademijos dalimi – skirdami 1,2% GPM arba tapdami rėmėjais, prisidedate prie vaikų svajonių įgyvendinimo.',
  community: {
    index: '01',
    eyebrow: 'Bendruomenė',
    title: 'Mūsų bendruomenė',
    paragraphs: [
      'Kartu kuriame aplinką, kurioje vaikai jaučiasi saugiai, drąsiai ir motyvuotai. Mūsų bendruomenė – tai tėvai, treneriai, savanoriai ir rėmėjai, kasdien prisidedantys prie augančių talentų.',
      'Prisidėdami jūs padedate mums organizuoti turnyrus, gerinti treniruočių bazę, aprūpinti inventoriumi ir atverti daugiau galimybių vaikams sporte bei gyvenime.',
    ],
    image: '/bendruomene.jpg',
    imageAlt: 'FA Kaunas bendruomenė',
  },
  taxSupport: {
    index: '02',
    eyebrow: 'Parama',
    title: 'Skirkite 1,2% GPM',
    text: 'Skirdami 1,2% savo pajamų mokesčio FA Kaunas, prisidedate prie jaunimo ugdymo, sportinių sąlygų gerinimo ir vaikų svajonių įgyvendinimo.',
    eds: { label: 'VMI Elektroninio deklaravimo sistema (EDS)', href: 'https://deklaravimas.vmi.lt/' },
    stepsTitle: 'Kaip skirti 1,2% – žingsnis po žingsnio',
    steps: [
      { text: 'Prisijunkite prie EDS sistemos' },
      { text: 'Pasirinkite: Prašymas skirti paramą' },
      { text: 'Forma', value: 'FR0512 v.5' },
      { text: 'E1 (paramos gavėjas)', value: '2' },
      { text: 'E2 (paramos gavėjo kodas)', value: site.companyCode, copy: true },
      { text: 'E3', value: 'FA Kaunas' },
      { text: 'E4', value: '1,2%' },
      { text: 'Pateikite deklaraciją' },
    ],
  },
  sponsors: {
    index: '03',
    eyebrow: 'Rėmėjams',
    title: 'Norite tapti rėmėjais ar partneriais?',
    text: 'Juridiniai ir fiziniai asmenys, norintys remti futbolo vystymą ir jaunimo ugdymą – susisiekite su mumis:',
  },
};
