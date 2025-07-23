import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [forceClose, setForceClose] = useState(false);

  const handleDropdownClick = () => {
    setForceClose(true);
    setTimeout(() => setForceClose(false), 200);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-5 md:py-4 z-50 shadow-md">
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

        {/* MOBILE BURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-md hover:bg-white/10 transition-all"
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black text-white py-6 px-6 space-y-2 text-right z-40 shadow-lg"
          >
            {[
              { to: "/apie", label: "Apie mus" },
              { to: "/apie/tikslai", label: "Tikslai / Vizija" },
              { to: "/apie/etikos-kodeksas", label: "Etikos kodeksas" },
              { to: "/akademija", label: "Akademija" },
              { to: "/akademija/treneriai", label: "Treneriai" },
              { to: "/akademija/ugdymo-programa", label: "Ugdymo programa" },
              { to: "/prisijunk", label: "Tapk akademijos dalimi" },
              { to: "/naujienos", label: "Naujienos" },
              { to: "/kontaktai", label: "Kontaktai" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium py-2 border-b border-white/10 hover:text-blue-400 transition-all"
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex justify-end items-center gap-6 pt-6 pr-1">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
