import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Home is eager (most visits land there); every other route is its own chunk.
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Kontaktai = lazy(() => import('./pages/Kontaktai'));
const PrivatumoPolitika = lazy(() => import('./pages/PrivatumoPolitika'));
const Registracija = lazy(() => import('./pages/Registracija'));
const Naujiena = lazy(() => import("./pages/naujienos/Naujiena"));
const Tikslai = lazy(() => import('./pages/apie/Tikslai'));
const EtikosKodeksas = lazy(() => import('./pages/apie/EtikosKodeksas'));

const Akademija = lazy(() => import('./pages/Akademija'));
const Treneriai = lazy(() => import('./pages/akademija/Treneriai'));
const UgdymoPrograma = lazy(() => import('./pages/akademija/UgdymoPrograma'));

const Prisijunk = lazy(() => import('./pages/Prisijunk'));
const Naujienos = lazy(() => import('./pages/Naujienos'));
const Stovykla2025 = lazy(() => import('./pages/naujienos/Stovykla2025'));
const HegelmanTurnyras = lazy(() => import('./pages/naujienos/HegelmanTurnyras'));
const SummerVictory2025 = lazy(() => import('./pages/naujienos/SummerVictory'));
const Neodenta2025 = lazy(() => import('./pages/naujienos/Neodenta2025'));
const KaffPrezidento2025 = lazy(() => import('./pages/naujienos/KaffPrezidento2025'));

const LFFTalentuCentras = lazy(() => import('./pages/naujienos/LFFTalentuCentras'));
const DobrecovaCup2025 = lazy(() => import('./pages/naujienos/DobrecovaCup2025'));
const VasarosStovyklaMragowo2025 = lazy(() => import('./pages/naujienos/VasarosStovyklaMragowo2025'));
const RudensTaure = lazy(() => import('./pages/naujienos/RudensTaure'));
const ZalgirisFutsalCup = lazy(() => import('./pages/naujienos/ZalgirisFutsalCup'));
const BalciaCup2025 = lazy(() => import('./pages/naujienos/BalciaCup2025'));
const SportfanTurnyras = lazy(() => import('./pages/naujienos/SportfanTurnyras'));
const KickOff2025 = lazy(() => import('./pages/naujienos/KickOff2025'));
const KaunoRajonoTaure2025 = lazy(() => import('./pages/naujienos/KaunoRajonoTaure2025'));
const AzuoloTaure2025 = lazy(() => import('./pages/naujienos/AzuoloTaure2025'));
const ResortNiegocinCup2025 = lazy(() => import('./pages/naujienos/ResortNiegocinCup2025'));
const NeodentaBlitzCup2025 = lazy(() => import('./pages/naujienos/NeodentaBlitzCup2025'));
const RemigijusMikalainis2025 = lazy(() => import('./pages/naujienos/RemigijusMikalainis2025'));
const KaunasFootballFest2025 = lazy(() => import("./pages/naujienos/KaunasFootballFest2025"));
const KidsCupVilnius2025 = lazy(() => import('./pages/naujienos/KidsCupVilnius2025'));
const KaunasFootballFest2017FAKaunas = lazy(() => import("./pages/naujienos/KaunasFootballFest2017FAKaunas"));
const IBRAFriendlyMatch = lazy(() => import("./pages/naujienos/IBRAFriendlyMatch"));
const AzuolasTurnyras2015 = lazy(() => import("./pages/naujienos/AzuolasTurnyras2015"));

function App() {
  return (
    // reducedMotion="user": framer-motion skips transform animations for visitors who
    // ask their OS for reduced motion (CSS transitions are handled in index.css)
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen flex flex-col bg-academy-black">
      <a href="#turinys" className="skip-link">Pereiti prie turinio</a>
      <Navbar />
      <ScrollToTop />

      <div id="turinys" tabIndex={-1} className="flex-grow outline-none">
        <Suspense fallback={<div className="min-h-screen bg-surface" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/apie/tikslai" element={<Tikslai />} />
          <Route path="/apie/etikos-kodeksas" element={<EtikosKodeksas />} />
          <Route path="/akademija" element={<Akademija />} />
          <Route path="/akademija/treneriai" element={<Treneriai />} />
          <Route path="/akademija/ugdymo-programa" element={<UgdymoPrograma />} />
          <Route path="/prisijunk" element={<Prisijunk />} />
          <Route path="/naujienos" element={<Naujienos />} />
          <Route path="/naujienos/:slug" element={<Naujiena />} />

          {/* Statiniai naujienų puslapiai */}
          <Route path="/naujienos/stovykla-2025" element={<Stovykla2025 />} />
          <Route path="/naujienos/hegelman-turnyras" element={<HegelmanTurnyras />} />
          <Route path="/naujienos/summer-victory" element={<SummerVictory2025 />} />
          <Route path="/naujienos/dobrecova-cup-2025" element={<DobrecovaCup2025 />} />
          <Route path="/naujienos/vasaros-stovykla-mragowo-2025" element={<VasarosStovyklaMragowo2025 />} />
          <Route path="/naujienos/lff-talentu-centras" element={<LFFTalentuCentras />} />
          <Route path="/naujienos/neodenta-2025" element={<Neodenta2025 />} />
          <Route path="/naujienos/kaff-prezidento-2025" element={<KaffPrezidento2025 />} />
          <Route path="/naujienos/rudens-taure" element={<RudensTaure />} />
          <Route path="/naujienos/zalgiris-futsal-cup" element={<ZalgirisFutsalCup />} />
          <Route path="/naujienos/balcia-cup-2025" element={<BalciaCup2025 />} />
          <Route path="/naujienos/sportfan-turnyras" element={<SportfanTurnyras />} />
          <Route path="/naujienos/kick-off-2025" element={<KickOff2025 />} />
          <Route path="/naujienos/kauno-rajono-taure-2025" element={<KaunoRajonoTaure2025 />} />
          <Route path="/naujienos/azuolo-rudens-taure-2025" element={<AzuoloTaure2025 />} />
          <Route path="/naujienos/resort-niegocin-cup-2025" element={<ResortNiegocinCup2025 />} />
          <Route path="/naujienos/neodenta-blitz-cup-2025" element={<NeodentaBlitzCup2025 />} />
          <Route path="/naujienos/remigijus-mikalainis-2025" element={<RemigijusMikalainis2025 />} />
          <Route path="/naujienos/kaunas-football-fest-2025" element={<KaunasFootballFest2025 />} />
          <Route path="/naujienos/kids-cup-vilnius-2025" element={<KidsCupVilnius2025 />} />
          <Route path="/naujienos/kaunas-football-fest-2017" element={<KaunasFootballFest2017FAKaunas />} />
          <Route path="/naujienos/friendly-match-ibra" element={<IBRAFriendlyMatch />} />
          <Route path="/naujienos/azuolo-turnyras-2015" element={<AzuolasTurnyras2015 />} />

          <Route path="/kontaktai" element={<Kontaktai />} />
          <Route path="/privatumo-politika" element={<PrivatumoPolitika />} />
          <Route path="/registracija" element={<Registracija />} />
        </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
