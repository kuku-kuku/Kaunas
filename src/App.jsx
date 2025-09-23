import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Kontaktai from './pages/Kontaktai';

import Tikslai from './pages/apie/Tikslai';
import EtikosKodeksas from './pages/apie/EtikosKodeksas';

import Akademija from './pages/Akademija';
import Treneriai from './pages/akademija/Treneriai';
import UgdymoPrograma from './pages/akademija/UgdymoPrograma';

import Prisijunk from './pages/Prisijunk';
import Naujienos from './pages/Naujienos';
import Stovykla2025 from './pages/naujienos/Stovykla2025';
import HegelmanTurnyras from "./pages/naujienos/HegelmanTurnyras";
import SummerVictory2025 from './pages/naujienos/SummerVictory';
import Neodenta2025 from './pages/naujienos/Neodenta2025';
import KaffPrezidento2025 from './pages/naujienos/KaffPrezidento2025';

import LFFTalentuCentras from './pages/naujienos/LFFTalentuCentras';
import DobrecovaCup2025 from './pages/naujienos/DobrecovaCup2025';
import VasarosStovyklaMragowo2025 from './pages/naujienos/VasarosStovyklaMragowo2025';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundWrapper from './components/BackgroundWrapper';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return isHome ? (
    children
  ) : (
    <BackgroundWrapper>
      <div className="flex-grow">{children}</div>
    </BackgroundWrapper>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fiksuotas logotipas kairėje, responsyviai mažėjantis */}
      <Link
        to="/"
        className="fixed top-4 left-0 z-[9999] ml-2 
                   w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]"
      >
        <img
          src="/logo.png"
          alt="FA Kaunas logotipas"
          className="w-full h-auto object-contain"
        />
      </Link>

      <Navbar />
      <ScrollToTop />

      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/apie/tikslai" element={<Tikslai />} />
          <Route path="/apie/etikos-kodeksas" element={<EtikosKodeksas />} />
          <Route path="/akademija" element ={<Akademija />} />
          <Route path="/akademija/treneriai" element={<Treneriai />} />
          <Route path="/akademija/ugdymo-programa" element={<UgdymoPrograma />} />
          <Route path="/prisijunk" element={<Prisijunk />} />
          <Route path="/naujienos" element={<Naujienos />} />
          <Route path="/naujienos/stovykla-2025" element={<Stovykla2025 />} />
          <Route path="/naujienos/hegelman-turnyras" element={<HegelmanTurnyras />} />
          <Route path="/naujienos/summer-victory" element={<SummerVictory2025 />} />
          <Route path="/naujienos/dobrecova-cup-2025" element={<DobrecovaCup2025 />} />
          <Route path="/naujienos/vasaros-stovykla-mragowo-2025" element={<VasarosStovyklaMragowo2025 />} />
          <Route path="/naujienos/lff-talentu-centras" element={<LFFTalentuCentras />} />
          <Route path="/naujienos/neodenta-2025" element={<Neodenta2025 />} />
          <Route path="/naujienos/kaff-prezidento-2025" element={<KaffPrezidento2025 />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
      </LayoutWrapper>

      <Footer />
    </div>
  );
}

export default App;
