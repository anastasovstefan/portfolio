import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import your images
import heroImage from '../images/hero.jpg';  // You'll add this image
import project1 from '../images/1.jpg';  // You'll add this image
import project2 from '../images/2.jpg';  // You'll add this image
import project3 from '../images/3.jpg';  // You'll add this image

const DesignWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: 'Modern Living Room', 
      type: 'Interior', 
      image: project1,
      description: 'Contemporary design with minimalist aesthetics'
    },
    { 
      id: 2, 
      title: 'Garden Landscape', 
      type: 'Exterior', 
      image: project2,
      description: 'Sustainable garden design with native plants'
    },
    { 
      id: 3, 
      title: 'Kitchen Renovation', 
      type: 'Interior', 
      image: project3,
      description: 'Modern kitchen with smart appliances'
    }
  ];

  const renders = [
    {
      id: 1,
      title: 'Bachelor Degree in Architecture and Design',
      description: 'University Goce Delcev',
      icon: '🎓'
    },
    {
      id: 2,
      title: '5 Years of Work Experience',
      description: 'Positions: Architect Designer/Architect',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Varios Skills',
      description: 'AutoCad, SketchUp, Vray for SketchUp,Lumion 3D, Adobe Photoshop, Adobe Lightroom',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
            <a href="#hero" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Portfolio Design </span>
            </a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About me', 'Projects', 'University Projects', 'Detail Drawings', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About me', 'Projects', 'University Projects', 'Detail Drawings', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section with Background Image */}
      <div 
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Transform Your Space
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
          Interior and Exterior Design Solutions
        </p>
      </div>
    </div>
        {/* About me Section */}
        <div className="max-w-6xl mx-auto px-4 py-16" id="about me">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renders.map(service => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
        {/* Projects Section */}
        <div className="max-w-6xl mx-auto px-4 py-16" id="projects">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <Link to={`/project/${project.id}`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2">{project.type} Design</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* University Section */}
      <div className="max-w-6xl mx-auto px-4 py-16" id="university projects">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          University Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2">{project.type} Design</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Detail drawings Section */}
        <div className="max-w-6xl mx-auto px-4 py-16" id="detail drawings">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Detail Drawings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2">{project.type} Design</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Contact Section */}
        <div className="bg-gray-100 h-screen w-full flex items-center" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">+389 77 589 637</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">contact@anastasovdesign.com</span>
              </div>
            </div>
            <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transform transition-transform duration-200 hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignWebsite;