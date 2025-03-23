import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import facebookIconBlack from '../icons/facebookB.png';
import instagramIconBlack from '../icons/instagramB.png';
import logoNobg from '../images/logoNobg.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link to="https://www.facebook.com/hasacademytorun/" target="_blank">
              <img src={facebookIconBlack} alt="Facebook Icon" className="h-8 transition transform hover:scale-110 hover:opacity-80" />
            </Link>
            <Link to="https://www.instagram.com/hasacademypl" target="_blank">
              <img src={instagramIconBlack} alt="Instagram Icon" className="h-8 transition transform hover:scale-110 hover:opacity-80" />
            </Link>
          </div>

          {/* Centered Logo with Link */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center justify-center">
              <img src={logoNobg} alt="HAS Academy Logo" className="h-20 drop-shadow-lg transition transform hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/cennik" className="text-lg font-bold transition transform hover:scale-110 hover:text-orange-500">Cennik</Link>
            <Link to="/kontakt" className="text-lg font-bold transition transform hover:scale-110 hover:text-orange-500">Kontakt</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-orange-500 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-3 bg-gray-800 transition-all duration-300">
          <Link to="/cennik" className="block text-lg text-white py-2 hover:text-orange-500 transition">Cennik</Link>
          <Link to="/kontakt" className="block text-lg text-white py-2 hover:text-orange-500 transition">Kontakt</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
