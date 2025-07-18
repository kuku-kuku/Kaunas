import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Kontaktai from './pages/Kontaktai';

import Tikslai from './pages/apie/Tikslai';
import EtikosKodeksas from './pages/apie/EtikosKodeksas';

import Treneriai from './pages/akademija/Treneriai';
import UgdymoPrograma from './pages/akademija/UgdymoPrograma';

import Prisijunk from './pages/Prisijunk';
import Naujienos from './pages/Naujienos';
import Stovykla2025 from './pages/naujienos/Stovykla2025';
import HegelmanTurnyras from "./pages/naujienos/HegelmanTurnyras";
import SummerVictory2025 from './pages/naujienos/SummerVictory';


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
      {/* Fiksuotas logotipas viršuje kairėje */}
      <Link to="/" className="fixed top-4 left-56 z-[9999]">
        <img
          src="/logo.png"
          alt="FA Kaunas logotipas"
          className="h-32 w-auto object-contain"
        />
      </Link>

      <Navbar />
      <ScrollToTop />

      {/* Layout turinys */}
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/apie/tikslai" element={<Tikslai />} />
          <Route path="/apie/etikos-kodeksas" element={<EtikosKodeksas />} />
          <Route path="/akademija/treneriai" element={<Treneriai />} />
          <Route path="/akademija/ugdymo-programa" element={<UgdymoPrograma />} />
          <Route path="/prisijunk" element={<Prisijunk />} />
          <Route path="/naujienos" element={<Naujienos />} />
          <Route path="/naujienos/stovykla-2025" element={<Stovykla2025 />} />
          <Route path="/naujienos/hegelman-turnyras" element={<HegelmanTurnyras />} />
          <Route path="/naujienos/summer-victory" element={<SummerVictory2025 />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
      </LayoutWrapper>

      {/* Footer visiems puslapiams */}
      <Footer />
    </div>
  );
}

export default App;
