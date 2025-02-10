import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Import the logo image
import logo from '../assests/logo.png'; // Corrected path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg relative"> {/* Even darker navy blue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* Use the imported logo image */}
              <img
                src={logo} // The imported logo
                alt="Logo"
                className="h-8 w-8"
              />
               <p className=" text-sm md:text-2xl text-white font-bold">The <span className="text-purple-400">M</span>eraki <span className="text-purple-400">Nation</span></p>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-600">Home</Link>
            <Link to="/events" className="text-white hover:text-purple-600">Events</Link>
            <Link to="/services" className="text-white hover:text-purple-600">Services</Link>
            <Link to="/about" className="text-white hover:text-purple-600">About</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-16 right-0 bottom-0 w-48 bg-white shadow-xl transform transition-transform ease-in-out duration-300 z-50 md:hidden`} 
      >
        <div className="flex flex-col py-4">
          <Link
            to="/"
            className="px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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
