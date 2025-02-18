import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Import the logo image
import logo from '../assests/pictures/meraki_logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <p className="text-sm md:text-2xl font-bold text-gradient">
                The <span className="text-gradient">M</span>eraki <span className="text-gradient">Creations</span>
              </p>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gradient hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-yellow-500" />
              ) : (
                <Menu className="h-6 w-6 text-yellow-500" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gradient hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="/events" className="text-gradient hover:text-yellow-400 transition">
              Events
            </Link>
            <Link to="/services" className="text-gradient hover:text-yellow-400 transition">
              Services
            </Link>
            <Link to="/about" className="text-gradient hover:text-yellow-400 transition">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-16 right-0 bottom-0 w-48 bg-black shadow-xl transform transition-transform ease-in-out duration-300 z-50 md:hidden`} 
      >
        <div className="flex flex-col py-4">
          <Link
            to="/"
            className="px-6 py-3 text-gradient hover:bg-yellow-500 hover:text-black transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="px-6 py-3 text-gradient hover:bg-yellow-500 hover:text-black transition"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 text-gradient hover:bg-yellow-500 hover:text-black transition"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 text-gradient hover:bg-yellow-500 hover:text-black transition"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
