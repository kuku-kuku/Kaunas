import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Home is eager (most visits land there); every other route is its own chunk.
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Kontaktai = lazy(() => import('./pages/Kontaktai'));
const PrivatumoPolitika = lazy(() => import('./pages/PrivatumoPolitika'));
const Registracija = lazy(() => import('./pages/Registracija'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Tikslai = lazy(() => import('./pages/apie/Tikslai'));
const EtikosKodeksas = lazy(() => import('./pages/apie/EtikosKodeksas'));

const Akademija = lazy(() => import('./pages/Akademija'));
const Treneriai = lazy(() => import('./pages/akademija/Treneriai'));
const UgdymoPrograma = lazy(() => import('./pages/akademija/UgdymoPrograma'));
const Baze = lazy(() => import('./pages/akademija/Baze'));

const Prisijunk = lazy(() => import('./pages/Prisijunk'));
const Naujienos = lazy(() => import('./pages/Naujienos'));
const NewsArticle = lazy(() => import('./pages/naujienos/NewsArticle'));

function App() {
  return (
    // LazyMotion + `m` components load only the animation features we use (no layout
    // animations), which keeps framer-motion small in the main bundle. `strict` makes a
    // stray full `motion` import fail loudly.
    // reducedMotion="user": framer-motion skips transform animations for visitors who
    // ask their OS for reduced motion (CSS transitions are handled in index.css)
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen flex flex-col bg-surface">
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
          <Route path="/akademija/baze" element={<Baze />} />
          <Route path="/prisijunk" element={<Prisijunk />} />
          <Route path="/naujienos" element={<Naujienos />} />
          {/* Archive articles (content/lt/articles.js) and CMS articles share one template */}
          <Route path="/naujienos/:slug" element={<NewsArticle />} />

          <Route path="/kontaktai" element={<Kontaktai />} />
          <Route path="/privatumo-politika" element={<PrivatumoPolitika />} />
          <Route path="/registracija" element={<Registracija />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;
