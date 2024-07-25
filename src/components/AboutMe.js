import React from 'react';
import { FaCode, FaUsers, FaLaptopCode, FaTools, FaPaintBrush, FaDatabase, FaUnity, FaCheckCircle, FaHandshake, FaLaptopHouse, FaMobileAlt } from 'react-icons/fa';
import '../App.css'; // Adjust the import path as per your project structure

const AboutMe = () => {
  return (
    <section id="about-me">
      <h1>About Me</h1>
      <p>
        <FaUsers className="icon" /> I am a Front-End React Developer with a passion for creating intuitive and dynamic user interfaces.
      </p>
      <p>
        <FaCode className="icon" /> Proficient in React.js framework, with experience in single-page applications and related projects.
      </p>
      <p>
        <FaLaptopCode className="icon" /> Experienced with working in fast-paced AGILE development environments. Skilled in problem-solving, coordinating work with local/remote teams, and optimizing tasks for efficiency.
      </p>
      <p>
        <FaTools className="icon" /> Programming experience in HTML, CSS, JavaScript, Java, React.js, Bootstrap, Express, and MongoDB.
      </p>
      <p>
        <FaPaintBrush className="icon" /> Good understanding of UI/UX design principles, with experience in responsive web design.
      </p>
      <p>
        <FaDatabase className="icon" /> Knowledge of RESTful APIs, with the ability to integrate with them.
      </p>
      <p>
        <FaLaptopHouse className="icon" /> Skilled with Adobe Creative Suite (Illustrator, Photoshop) and web design applications.
      </p>
      <p>
        <FaCheckCircle className="icon" /> Hands-on experience with Microsoft Excel, Word, and PowerPoint.
      </p>
      <p>
        <FaUnity className="icon" /> Experience with Unity 3D and manual Quality Assurance.
      </p>
      <p>
        <FaMobileAlt className="icon" /> Have self-solving problem-solving and learning abilities.
      </p>
      <p>
        <FaHandshake className="icon" /> Possess the attitude and skills to easily mingle with people in challenging environments.
      </p>
    </section>
  );
};

export default AboutMe;
