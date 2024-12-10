import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import your project images (you'll need to add these)
import projectImage1 from '../images/restorant/render 1.jpg';
import projectImage2 from '../images/restorant/render 2.jpg';
import projectImage3 from '../images/restorant/render 3.jpg';
import projectImage4 from '../images/restorant/render 4.jpg';

import projectImage5 from '../images/park/1.jpg';
import projectImage6 from '../images/park/2.jpg';
import projectImage7 from '../images/park/3.jpg';
import projectImage8 from '../images/park/4.jpg';
import projectImage9 from '../images/park/5.jpg';
import projectImage10 from '../images/park/6.jpg';
import projectImage11 from '../images/park/7.jpg';
import projectImage12 from '../images/park/8.jpg';
import projectImage13 from '../images/park/9.jpg';
import projectImage14 from '../images/park/10.jpg';
import projectImage15 from '../images/park/11.jpg';

import Footer from './Footer';

const UniversityDetails = () => {
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
        projectImage4
      ]
    },
    2: {
        title: 'Modern Living Room',
        type: 'Interior Design',
        description: 'A contemporary living space that blends minimalist aesthetics with functional design.',
        images: [
          projectImage5,
          projectImage6,  
          projectImage7,
          projectImage8,
          projectImage9,
          projectImage10,
          projectImage11,
          projectImage12,
          projectImage13,
          projectImage14,
          projectImage15
        ]
      },
      3: {
        title: 'Modern Living Room',
        type: 'Interior Design',
        description: 'A contemporary living space that blends minimalist aesthetics with functional design.',
        images: [
          
        ]
      }
    // Add more project details as needed
  };

  const project = projectDetails[projectId];

  if (!project) {
    return <div className="container mx-auto px-4 py-16">Project not found</div>;
  }

  return (
    <dev>
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
    </dev>
  );
};

export default UniversityDetails;