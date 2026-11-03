import React from "react";
import Seo from "../components/Seo";
import HomeHero from "../components/home/HomeHero";
import Philosophy from "../components/home/Philosophy";
import Pathway from "../components/home/Pathway";
import CoachesPreview from "../components/home/CoachesPreview";
import Results from "../components/home/Results";
import Facilities from "../components/home/Facilities";
import LatestNews from "../components/home/LatestNews";
import TrialCta from "../components/home/TrialCta";
import Partners from "../components/home/Partners";

// Testimonials are not rendered yet: none have been supplied (see TODO-content.md).
export default function HomePage() {
  return (
    <main>
      <Seo />
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
