
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../icons/facebook.png';
import instagramIcon from '../icons/instagram.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center py-4">
          <Link to="/" className="text-2xl font-bold text-orange-500 h-1">
            HasAcademy
          </Link>
        </div>

        <div className="flex justify-between items-center h-10">
          {/* Social Media Icons */}
          <div className="flex items-center">
            <img src={facebookIcon} alt="Facebook Icon" className="h-7 mr-4" />
            <img src={instagramIcon} alt="Instagram Icon" className="h-7" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
  <Link
    to="/about"
    className="nav-link text-lg font-medium text-white hover:text-orange-500 transition duration-300"
  >
    Studio Kadru
  </Link>
  <Link
    to="/about"
    className="nav-link text-lg font-medium text-white hover:text-orange-500 transition duration-300"
  >
    O nas
  </Link>
  <Link
    to="/cennik"
    className="nav-link text-lg font-medium text-white hover:text-orange-500 transition duration-300"
  >
    Oferta
  </Link>
  <Link
    to="/kontakt"
    className="nav-link text-lg font-medium text-white hover:text-orange-500 transition duration-300"
  >
    Kontakt
  </Link>
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-orange-500 focus:outline-none">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/home" className="mobile-nav-link">Home</Link>
          <Link to="/price" className="mobile-nav-link">Price</Link>
          <Link to="/kontakt" className="mobile-nav-link">About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* Utility Classes */
// Add these utility classes to your CSS or Tailwind configuration
// .nav-link {
//   @apply text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium;
// }
// .mobile-nav-link {
//   @apply text-white hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium;
// }