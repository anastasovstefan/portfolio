import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import DesignWebsite from './components/DesignWebsite';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import UniversityDetails from './components/UniversityDetails';
import Drawings from './components/Drawings';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<DesignWebsite />} />
        <Route path="/portfolio/project/:projectId" element={<ProjectDetails />} />
        <Route path="/portfolio/project2/:projectId" element={<UniversityDetails />} />
        <Route path="/portfolio/drawings/:projectId" element={<Drawings />} />
      </Routes>
    </Router>
  );
}

export default App;
