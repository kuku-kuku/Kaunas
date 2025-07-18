import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Apie FA Kaunas */}
        <div>
          <h3 className="text-xl font-bold mb-3">FA Kaunas</h3>
          <p className="text-sm text-gray-400">
            Jaunimo futbolo akademija, skirta ugdyti ne tik sportininkus, bet ir atsakingas asmenybes.
          </p>
        </div>

        {/* Nuorodos */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Puslapiai</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/apie" className="hover:text-white">Apie mus</Link></li>
            <li><Link to="/akademija/treneriai" className="hover:text-white">Treneriai</Link></li>
            <li><Link to="/akademija/ugdymo-programa" className="hover:text-white">Ugdymo programa</Link></li>
            <li><Link to="/naujienos" className="hover:text-white">Naujienos</Link></li>
            <li><Link to="/kontaktai" className="hover:text-white">Kontaktai</Link></li>
            <li><Link to="/prisijunk" className="hover:text-white">Parama ir rėmimas</Link></li>
          </ul>
        </div>

        {/* Kontaktai */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Kontaktai</h4>
          <p className="text-sm text-gray-300">Žeimenos g. 165, 49332 Kaunas</p>
          <p className="text-sm text-gray-300 mt-1">info@fakaunas.lt</p>
          <p className="text-sm text-gray-300">+370 600 00000</p>
        </div>

        {/* Social media */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Sekite mus</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/people/FA-Kaunas/100087548214643/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/fakaunas/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Apatinė eilutė su misija */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {year} FA Kaunas. Visos teisės saugomos. <br />
        Padėkite auginti jaunąją kartą – skirkite 1,2% arba tapkite rėmėju.
      </div>
    </footer>
  );
}
