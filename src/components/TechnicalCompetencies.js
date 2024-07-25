import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm, FaDatabase, FaCode, FaGamepad, FaLaptopCode } from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaCode />, name: 'SDLC & STLC' },
  { icon: <FaCode />, name: 'C#' }, // Using a generic code icon
  { icon: <FaNpm />, name: 'npm' },
  { icon: <FaDatabase />, name: 'MongoDB' },
  { icon: <FaLaptopCode />, name: 'Express' }, // Placeholder for Express
  { icon: <FaGamepad />, name: 'Game and Web Development' },
  { icon: <FaCode />, name: 'Agile' }, // Using a generic code icon for Agile
  { icon: <FaCode />, name: 'Bootstrap' }, // Using a generic code icon for Bootstrap
];

const TechnicalCompetencies = () => {
  return (
    <section id="technical-competencies">
      <h1>Technical Competencies</h1>
      <div className="competencies-container">
        {skills.map((skill, index) => (
          <div className="competency-card" key={index}>
            <div className="competency-icon">{skill.icon}</div>
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalCompetencies;
