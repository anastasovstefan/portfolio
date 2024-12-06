import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import your images
import heroImage from '../images/hero.jpg';  // You'll add this image
import project1 from '../images/bedroom2.jpg';  // You'll add this image
import project2 from '../images/2.jpg';  // You'll add this image
import project3 from '../images/3.jpg';  // You'll add this image
import project4 from '../images/render9.jpg';  // You'll add this image
import Footer from './Footer';

const DesignWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: 'Modern Living Room', 
      type: 'Interior', 
      image: project3,
      description: 'Contemporary design with minimalist aesthetics'
    },
    { 
      id: 2, 
      title: 'Garden Landscape', 
      type: 'Exterior', 
      image: project4,
      description: 'Sustainable garden design with native plants'
    },
    { 
      id: 3, 
      title: 'Kitchen Renovation', 
      type: 'Interior', 
      image: project1,
      description: 'Modern kitchen with smart appliances'
    }
  ];

  const university = [
    { 
      id: 1, 
      title: 'Modern Living Room', 
      type: 'Interior', 
      image: project3,
      description: 'Contemporary design with minimalist aesthetics'
    },
    { 
      id: 2, 
      title: 'Garden Landscape', 
      type: 'Exterior', 
      image: project4,
      description: 'Sustainable garden design with native plants'
    },
    { 
      id: 3, 
      title: 'Kitchen Renovation', 
      type: 'Interior', 
      image: project1,
      description: 'Modern kitchen with smart appliances'
    }
  ];

  const drawings = [
    { 
      id: 1, 
      title: 'Modern Living Room', 
      type: 'Interior', 
      image: project3,
      description: 'Contemporary design with minimalist aesthetics'
    },
    { 
      id: 2, 
      title: 'Garden Landscape', 
      type: 'Exterior', 
      image: project4,
      description: 'Sustainable garden design with native plants'
    },
    { 
      id: 3, 
      title: 'Kitchen Renovation', 
      type: 'Interior', 
      image: project1,
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
                <p className="text-gray-600 mb-2">{project.type} Design</p>
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
                <p className="text-gray-600 mb-2">{project.type} Design</p>
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
          {projects.map(project => (
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
                <p className="text-gray-600 mb-2">{project.type} Design</p>
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