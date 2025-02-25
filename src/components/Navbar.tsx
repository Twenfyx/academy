import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../icons/facebook.png';
import instagramIcon from '../icons/instagram.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link to="#">
              <img src={facebookIcon} alt="Facebook Icon" className="h-8 transition transform hover:scale-110" />
            </Link>
            <Link to="#">
              <img src={instagramIcon} alt="Instagram Icon" className="h-8 transition transform hover:scale-110" />
            </Link>
          </div>
          
          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-3xl font-extrabold text-orange-500">
              HasAcademy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* <Link to="/studio" className="nav-link">Studio Kadru</Link> */}
            <Link to="/about" className="nav-link">O nas</Link>
            <Link to="/cennik" className="nav-link">Oferta</Link>
            <Link to="/kontakt" className="nav-link">Kontakt</Link>
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
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-900">
          <Link to="/studio" className="mobile-nav-link">Studio Kadru</Link>
          <Link to="/about" className="mobile-nav-link">O nas</Link>
          <Link to="/cennik" className="mobile-nav-link">Oferta</Link>
          <Link to="/kontakt" className="mobile-nav-link">Kontakt</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

