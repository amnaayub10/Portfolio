import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" className="logo-link">AMNA AYUB</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#technical-competencies">Technical Competencies</a></li>
        <li><a href="#work-experience">Work Experience</a></li>
        <li><a href="#professional-training">Professional Training</a></li>
        <li><a href="#languages">Languages</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
