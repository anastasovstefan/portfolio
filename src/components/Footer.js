import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Anastasov Design</h3>
            <p className="text-gray-400 mb-4">
              Creating innovative interior and exterior design solutions that transform spaces and inspire living.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about-me" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#university-projects" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  University Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-gray-400">Shtip, North Macedonia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500" />
                <span className="text-gray-400">+389 77 589 637</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500" />
                <span className="text-gray-400">contact@anastasovdesign.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Anastasov Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;