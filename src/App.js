import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import TechnicalCompetencies from './components/TechnicalCompetencies';
import WorkExperience from './components/WorkExperience';
import ProfessionalTraining from './components/ProfessionalTraining';
import Languages from './components/Languages';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <TechnicalCompetencies />
      <WorkExperience />
      <ProfessionalTraining />
      <Languages />
      <Footer/>
    </>
  );
};

export default App;
