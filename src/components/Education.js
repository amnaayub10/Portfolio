import React from 'react';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa'; // Make sure to install react-icons if you haven't

const Education = () => {
  return (
    <section id="education">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-box">
          <FaUniversity className="education-icon" />
          <h2>BS Software Engineering</h2>
          <p>International Islamic University, Islamabad</p>
        </div>
        <div className="education-box">
          <FaGraduationCap className="education-icon" />
          <h2>HSSC</h2>
          <p>Army Public School EME College Campus Rawalpindi</p>
        </div>
        <div className="education-box">
          <FaSchool className="education-icon" />
          <h2>SSC</h2>
          <p>Army Public School & College Campus Rawalpindi</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
