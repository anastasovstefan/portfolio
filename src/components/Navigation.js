import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useHandleNavClick } from '../functions/HandleNavigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = useHandleNavClick();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Home link */}
          <div className="flex items-center space-x-2">
        <Link
            id="home"
            to="/portfolio"
            className="flex items-center space-x-2"
            onClick={() => handleNavClick('home')} // Add this click handler for Home
         >
            <Home className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</span>
        </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Projects', id: 'projects' },
              { label: 'University Projects', id: 'university-projects' },
              { label: 'Sketches', id: 'detail-drawings' },
              { label: 'About me', id: 'about-me' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { label: 'Projects', id: 'projects' },
              { label: 'University Projects', id: 'university-projects' },
              { label: 'Sketches', id: 'detail-drawings' },
              { label: 'About me', id: 'about-me' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleNavClick(item.id);
                }}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
