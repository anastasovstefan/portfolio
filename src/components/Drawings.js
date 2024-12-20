import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

// Import your project images (you'll need to add these)
import projectImage1 from '../images/drawing1.png';
import projectImage2 from '../images/drawing2.png';
import projectImage3 from '../images/drawing5.jpg';
import projectImage4 from '../images/drawing3.png';
import projectImage5 from '../images/drawing4.png';



const Drawings = () => {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Project details data
  const projectDetails = {
    1: {
      title: 'Electrical and Lighting Layout Plan',
      type: '',
      description: 'A detailed residential floor plan illustrating the layout of electrical outlets, switches, and lighting fixtures for each room.',
      images: [
        projectImage3
      ]
    },
    2: {
        title: 'Residential Electrical Layout',
        type: '',
        description: 'A complete residential electrical plan covering all rooms, including bedrooms, bathrooms, and common areas, with labeled fixtures, switches, and their connections.',
        images: [
          projectImage4,
          projectImage5
          
        ]
      },
      3: {
        title: 'Carpentry Layout',
        type: '',
        description: 'Carpentry plan detailing design of cabinets, furniture, and wooden elements for optimized space utilization.',
        images: [
          projectImage1,
          projectImage2
        ]
      }
    // Add more project details as needed
  };

  const project = projectDetails[projectId];

  if (!project) {
    return <div className="container mx-auto px-4 py-16">Project not found</div>;
  }

  return (
    <div>
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.type}</p>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.images.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <a
            href={image} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
            >
            <img 
              src={image} 
              alt={`${project.title} Design ${index + 1}`} 
              className="w-full h-64 object-contain transform transition-transform duration-500 group-hover:scale-110"
            />
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Drawings;