import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [forceClose, setForceClose] = useState(false);

  const handleDropdownClick = () => {
    setForceClose(true);
    setTimeout(() => setForceClose(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-8 py-4 z-50 shadow-md">
      <div className="relative flex justify-center items-center">
        {/* NAVIGATION - CENTRE */}
        <nav className="flex items-center gap-8 text-lg font-medium">
          {/* --- Apie mus --- */}
          <div className={`relative group ${forceClose ? 'pointer-events-none' : ''}`}>
            <Link
              to="/apie"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all duration-200"
            >
              Apie mus
              <ChevronDown size={16} />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden"
            >
              <Link
                to="/apie/tikslai"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition-all"
              >
                Tikslai / Vizija
              </Link>
              <Link
                to="/apie/etikos-kodeksas"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition-all"
              >
                Etikos kodeksas
              </Link>
            </div>
          </div>

          {/* --- Akademija --- */}
          <div className={`relative group ${forceClose ? 'pointer-events-none' : ''}`}>
            <Link
              to="/akademija"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all duration-200"
            >
              Akademija
              <ChevronDown size={16} />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden"
            >
              <Link
                to="/akademija/treneriai"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition-all"
              >
                Treneriai
              </Link>
              <Link
                to="/akademija/ugdymo-programa"
                onClick={handleDropdownClick}
                className="block px-5 py-3 hover:bg-[#e0f7ff] hover:text-[#007bb5] transition-all"
              >
                Ugdymo programa
              </Link>
            </div>
          </div>

          {/* --- Tapk akademijos dalimi --- */}
          <Link
            to="/prisijunk"
            className="px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all duration-200"
          >
            Tapk akademijos dalimi
          </Link>

          {/* --- Naujienos --- */}
          <Link
            to="/naujienos"
            className="px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all duration-200"
          >
            Naujienos
          </Link>

          {/* --- Kontaktai --- */}
          <Link
            to="/Kontaktai"
            className="px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#4fc3f7] transition-all duration-200"
          >
            Kontaktai
          </Link>
        </nav>

        {/* SOCIAL ICONS - ABSOLUTE RIGHT */}
        <div className="absolute right-0 flex items-center gap-4 pr-2">
          <a
            href="https://www.facebook.com/people/FA-Kaunas/100087548214643/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4fc3f7] transition-colors duration-200"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/fakaunas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4fc3f7] transition-colors duration-200"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}
