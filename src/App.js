import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import DesignWebsite from './components/DesignWebsite';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<DesignWebsite />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
