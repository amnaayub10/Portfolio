import React from 'react';
import { FaFlag } from 'react-icons/fa';

const Languages = () => {
  return (
    <section id="languages">
      <h1>Languages</h1>

      <div className="language-details">
        <div className="language">
          <div className="language-icon"><FaFlag /></div>
          <div className="language-info">
            <h2>Native Language</h2>
            <h3>Urdu</h3>
            <p>(Read, Write, Speak)</p>
          </div>
        </div>
        <div className="language">
          <div className="language-icon"><FaFlag /></div>
          <div className="language-info">
            <h2>Official Language</h2>
            <h3>English</h3>
            <p>(Read, Write, Speak)</p>
          </div>
        </div>
        <div className="language">
          <div className="language-icon"><FaFlag /></div>
          <div className="language-info">
            <h2>Mother Tongue</h2>
            <h3>Punjabi</h3>
            <p>(Read, Speak)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
