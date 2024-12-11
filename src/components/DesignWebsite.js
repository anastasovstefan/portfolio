import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import your images
import heroImage from '../images/hero.jpg';  // You'll add this image
import project1 from '../images/bedroom2.jpg';  // You'll add this image
import project2 from '../images/drawing1.png';  // You'll add this image
import project3 from '../images/3.jpg';  // You'll add this image
import project4 from '../images/render9.jpg';  // You'll add this image
import project5 from '../images/drawing3.png';  // You'll add this image
import project6 from '../images/park/3.jpg';  // You'll add this image
import project7 from '../images/restorant/render 1.jpg';  // You'll add this image
import project8 from '../images/drawing5.jpg';  // You'll add this image
import project9 from '../images/bath/1.jpg';  // You'll add this image
import Footer from './Footer';
import { ArrowDown } from 'lucide-react';

const DesignWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: 'Sleek and Sophisticated Apartment', 
      type: 'Apartment design that features a modern, minimalist aesthetic with a combination of muted tones and natural wood elements.', 
      image: project3,
      description: 'Click here to see more'
    },
    { 
      id: 2, 
      title: 'Elegant and Refined Living', 
      type: 'This interior design showcases a harmonious blend of modern and luxury elements.', 
      image: project4,
      description: 'Click here to see more'
    },
    { 
      id: 3, 
      title: 'Serene Bedroom Retreat', 
      type: 'Modern and cozy bedroom design with a mix of natural wood, plush textiles, and sleek lighting.', 
      image: project1,
      description: 'Click here to see more'
    },
    { 
      id: 4, 
      title: 'Modern Bathroom Oasis', 
      type: 'This minimalist bathroom design features a combination of sleek, modern elements and warm, natural wood accents.', 
      image: project9,
      description: 'Click here to see more'
    }
  ];

  const university = [
    { 
      id: 1, 
      title: 'Vibrant and Chic Lounge', 
      type: 'Restaurant design with a vibrant blend of bold colors, geometric patterns, and sleek modern furnishings.', 
      image: project7,
      description: 'Click here to see more'
    },
    { 
      id: 2, 
      title: 'Community Recreation Park', 
      type: 'This outdoor park design represents a visually striking blend of modern architecture.', 
      image: project6,
      description: 'Click here to see more'
    }
  ];

  const drawings = [
    { 
      id: 1, 
      title: 'Electrical and Lighting Layout Plan', 
      type: 'A detailed residential floor plan illustrating the layout of electrical outlets, switches, and lighting fixtures for each room.', 
      image: project8,
      description: 'Click here to see more'
    },
    { 
      id: 2, 
      title: 'Residential Electrical Layout', 
      type: 'A complete residential electrical plan covering all rooms, including bedrooms, bathrooms, and common areas.', 
      image: project5,
      description: 'Click here to see more'
    },
    { 
      id: 3, 
      title: 'Carpentry Layout', 
      type: 'Carpentry plan detailing design of cabinets, furniture, and wooden elements for optimized space utilization.', 
      image: project2,
      description: 'Click here to see more'
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
      title: 'Various Skills',
      description: 'AutoCad, SketchUp, Vray for SketchUp,Lumion 3D, Adobe Photoshop, Adobe Lightroom',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
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
          Creative Space Innovations
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
          Composing Environments That Breathe, Whisper, and Inspire
        </p>
        <div className="flex justify-center">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group">
            Get Started
            <ArrowDown className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
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
              <Link to={`/portfolio/project/${project.id}`}>
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
                <p className="text-gray-600 mb-2">{project.type}</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* University Section */}
      <div className="max-w-6xl mx-auto px-4 py-16" id="university-projects">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          University Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {university.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <Link to={`/portfolio/project2/${project.id}`}>
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
                <p className="text-gray-600 mb-2">{project.type}</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
        {/* Detail drawings Section */}
        <div className="max-w-6xl mx-auto px-4 py-16" id="detail-drawings">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Detail Drawings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drawings.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <Link to={`/portfolio/drawings/${project.id}`}>
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
                <p className="text-gray-600 mb-2">{project.type}</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
      {/* About me Section */}
      <div className="max-w-6xl mx-auto px-4 py-16" id="about-me">
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
        {/* Contact Section */}
      <Footer/>
    </div>
  );
};

export default DesignWebsite;