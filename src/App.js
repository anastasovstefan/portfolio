import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import DesignWebsite from './components/DesignWebsite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<DesignWebsite />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
