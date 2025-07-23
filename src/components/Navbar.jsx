import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ChevronLeft } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [forceClose, setForceClose] = useState(false);
  const [accordion, setAccordion] = useState(null); // 'apie' or 'akademija'

  const handleDropdownClick = () => {
    setForceClose(true);
    setTimeout(() => setForceClose(false), 200);
    setMobileOpen(false);
    setAccordion(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium mx-auto">
          {/* Apie mus */}
          <div className={`relative group ${forceClose ? 'pointer-events-none' : ''}`}>
            <Link
              to="/apie"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all"
            >
              Apie mus
              <ChevronDown size={16} />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                to="/apie/tikslai"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition"
              >
                Tikslai / Vizija
              </Link>
              <Link
                to="/apie/etikos-kodeksas"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition"
              >
                Etikos kodeksas
              </Link>
            </div>
          </div>

          {/* Akademija */}
          <div className={`relative group ${forceClose ? 'pointer-events-none' : ''}`}>
            <Link
              to="/akademija"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all"
            >
              Akademija
              <ChevronDown size={16} />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                to="/akademija/treneriai"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition"
              >
                Treneriai
              </Link>
              <Link
                to="/akademija/ugdymo-programa"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition"
              >
                Ugdymo programa
              </Link>
            </div>
          </div>

          <Link to="/prisijunk" className="hover:text-[#4fc3f7] transition">Tapk akademijos dalimi</Link>
          <Link to="/naujienos" className="hover:text-[#4fc3f7] transition">Naujienos</Link>
          <Link to="/kontaktai" className="hover:text-[#4fc3f7] transition">Kontaktai</Link>
        </nav>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.facebook.com/people/FA-Kaunas/100087548214643/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-[#4fc3f7]" size={20} />
          </a>
          <a href="https://www.instagram.com/fakaunas/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[#4fc3f7]" size={22} />
          </a>
        </div>

        {/* MOBILE BURGER RIGHT */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white absolute right-6 z-50"
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white text-right py-6 space-y-4 pr-6">
          <Link to="/apie" onClick={() => setMobileOpen(false)} className="block">Apie mus</Link>
          <Link to="/apie/tikslai" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300">– Tikslai / Vizija</Link>
          <Link to="/apie/etikos-kodeksas" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300">– Etikos kodeksas</Link>

          <Link to="/akademija" onClick={() => setMobileOpen(false)} className="block mt-4">Akademija</Link>
          <Link to="/akademija/treneriai" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300">– Treneriai</Link>
          <Link to="/akademija/ugdymo-programa" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300">– Ugdymo programa</Link>

          <Link to="/prisijunk" onClick={() => setMobileOpen(false)} className="block mt-4">Tapk akademijos dalimi</Link>
          <Link to="/naujienos" onClick={() => setMobileOpen(false)} className="block">Naujienos</Link>
          <Link to="/kontaktai" onClick={() => setMobileOpen(false)} className="block">Kontaktai</Link>

          {/* Social icons */}
          <div className="flex justify-end items-center gap-4 pt-6">
            <a
              href="https://www.facebook.com/people/FA-Kaunas/100087548214643/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4fc3f7]"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/fakaunas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4fc3f7]"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
