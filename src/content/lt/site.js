// Organisation facts used across the site (navbar, footer, contacts, structured data).
// Change contact details here, not in components.

export const site = {
  name: 'FA Kaunas',
  legalName: 'FA KAUNAS',
  url: 'https://fakaunas.lt',
  slogan: 'Nuo svajonės iki realybės!',
  description:
    'FA Kaunas – jaunimo futbolo akademija Kaune. Treniruotės vaikams, UEFA licencijas turintys treneriai, turnyrai Lietuvoje ir užsienyje.',
  foundingYear: 2022,
  // Paramos gavėjo kodas (VMI FR0512 forma)
  companyCode: '306181717',
  logo: '/logo.png',

  contact: {
    phone: '+370 665 27501',
    phoneHref: 'tel:+37066527501',
    email: 'administracija@fakaunas.lt',
    emailHref: 'mailto:administracija@fakaunas.lt',
  },

  address: {
    street: 'Žeimenos g. 165',
    postalCode: '49332',
    city: 'Kaunas',
    country: 'LT',
    full: 'Žeimenos g. 165, 49332 Kaunas',
    // Map pin from the Google Maps embed; TODO(content): confirm exact pitch coordinates
    geo: { lat: 54.938988, lng: 23.915255 },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.5365087714223!2d23.915254976763413!3d54.938988372840025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722a202feec5d%3A0x9e8f7c28479d5d76!2s%C5%BDeimenos%20g.%20165%2C%2049332%20Kaunas!5e0!3m2!1slt!2slt!4v1721208852185!5m2!1slt!2slt',
  },

  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/people/FA-Kaunas/100087548214643/' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/fakaunas/' },
  ],
};
