import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name */}
          <div>
            <h3 className="text-xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 mb-4">Meraki Nation</h3>
            <p className="text-white text-gray-400">Creating memorable events since 2024</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400 transition">Events</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white">
              <li>Pune</li>
              <li>Maharashtra, India</li>
              <li>Phone: <span className="text-white">7758095284</span></li>
              <li>Email: <a href="mailto:gauravchindhe1806@gmail.com" className="text-white hover:text-yellow-400 transition">gauravchindhe1806@gmail.com</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition">
                <Facebook className="h-6 w-6 border-2 border-yellow-500 p-1 rounded-full hover:bg-yellow-400 transition" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition">
                <Twitter className="h-6 w-6 border-2 border-yellow-500 p-1 rounded-full hover:bg-yellow-400 transition" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition">
                <Instagram className="h-6 w-6 border-2 border-yellow-500 p-1 rounded-full hover:bg-yellow-400 transition" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition">
                <Mail className="h-6 w-6 border-2 border-yellow-500 p-1 rounded-full hover:bg-yellow-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
          <p>&copy; 2025 <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">Meraki Nation</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
