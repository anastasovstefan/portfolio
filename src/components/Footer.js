import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter,
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { useHandleNavClick } from '../functions/HandleNavigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleNavClick = useHandleNavClick();

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
                href="https://www.facebook.com/stefko.anastasov.9/?locale=mk_MK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/anastasov.stefan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://mk.linkedin.com/in/stefan-anastasov-51b2842b5?trk=people-guest_people_search-card" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            {[
                { label: 'About Me', id: 'about-me' },
                { label: 'Projects', id: 'projects' },
                { label: 'University Projects', id: 'university-projects' },
            ].map((item) => (
                <li key={item.id} id={item.id}>
                <button
                    className = "text-gray-400 hover:text-white transition-colors"
                    onClick={() => handleNavClick(item.id)}
                >
                    {item.label}
                </button>
                </li>
            ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-gray-400">Radovis, North Macedonia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500" />
                <span className="text-gray-400">+389 78 893 768</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500" />
                <span className="text-gray-400">stefan.anastasov97@hotmail.com</span>
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