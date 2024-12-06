import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import your project images (you'll need to add these)
import projectImage1 from '../images/1.jpg';
import projectImage2 from '../images/2.jpg';
import projectImage3 from '../images/3.jpg';
import projectImage4 from '../images/4.jpg';
import projectImage5 from '../images/5.jpg';
import projectImage6 from '../images/6.jpg';

import projectImage7 from '../images/render1.jpg';
import projectImage8 from '../images/render2.jpg';
import projectImage9 from '../images/render3.jpg';
import projectImage10 from '../images/render4.jpg';
import projectImage11 from '../images/render5.jpg';
import projectImage12 from '../images/render6.jpg';
import projectImage13 from '../images/render7.jpg';
import projectImage14 from '../images/render8.jpg';
import projectImage15 from '../images/render9.jpg';

import projectImage16 from '../images/bedroom1.jpg';
import projectImage17 from '../images/bedroom2.jpg';
import projectImage18 from '../images/bedroom3.jpg';
import Footer from './Footer';

const Drawings = () => {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Project details data
  const projectDetails = {
    1: {
      title: 'Modern Living Room',
      type: 'Interior Design',
      description: 'A contemporary living space that blends minimalist aesthetics with functional design.',
      images: [
        projectImage1,
        projectImage2,
        projectImage3,
        projectImage4,
        projectImage5,
        projectImage6
      ]
    },
    2: {
        title: 'Modern Living Room',
        type: 'Interior Design',
        description: 'A contemporary living space that blends minimalist aesthetics with functional design.',
        images: [
          projectImage7,
          projectImage8,
          projectImage15,
          projectImage10,
          projectImage11,
          projectImage12,
          projectImage13,
          projectImage14,
          projectImage9
        ]
      },
      3: {
        title: 'Modern Living Room',
        type: 'Interior Design',
        description: 'A contemporary living space that blends minimalist aesthetics with functional design.',
        images: [
          projectImage16,
          projectImage17,
          projectImage18
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
            <img 
              src={image} 
              alt={`${project.title} Design ${index + 1}`} 
              className="w-full h-64 object-contain transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Drawings;