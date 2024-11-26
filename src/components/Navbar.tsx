// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-orange-500">HasAcademy</Link>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">O nas</Link>
            <Link to="/cennik" className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Cennik</Link>
            <Link to="/kontakt" className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Kontakt</Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-orange-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/home" className="text-white hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/price" className="text-white hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">Price</Link>
            <Link to="/kontakt" className="text-white hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
