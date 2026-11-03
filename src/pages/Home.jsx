import React from "react";
import Seo from "../components/Seo";
import { site } from "../content";
import HomeHero from "../components/home/HomeHero";
import Philosophy from "../components/home/Philosophy";
import Pathway from "../components/home/Pathway";
import CoachesPreview from "../components/home/CoachesPreview";
import Results from "../components/home/Results";
import Facilities from "../components/home/Facilities";
import LatestNews from "../components/home/LatestNews";
import TrialCta from "../components/home/TrialCta";
import Partners from "../components/home/Partners";

// Structured data for search engines: the academy as a sports club with address and contacts
const organization = {
  "@type": ["SportsOrganization", "SportsClub"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/og-default.jpg`,
  description: site.description,
  sport: "Soccer",
  foundingDate: "2022-11",
  telephone: site.contact.phone.replace(/\s/g, ""),
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
  sameAs: site.social.map((s) => s.href),
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "lt-LT",
  publisher: { "@id": `${site.url}/#organization` },
};

// Testimonials are not rendered yet: none have been supplied (see TODO-content.md).
export default function HomePage() {
  return (
    <main>
      <Seo jsonLd={[organization, website]} />
      <HomeHero />
      <Philosophy />
      <Pathway />
      <CoachesPreview />
      <Results />
      <Facilities />
      <LatestNews />
      <TrialCta />
      <Partners />
    </main>
  );
}
