import React from 'react';

const Home = () => {
  const handleDownload = () => {
    // Assuming your CV is in the public folder, change the path if it's different
    window.open('/REACT.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: 'url(/Home.jpg)' }}
    >
      <h1>Home</h1>
      <p>Download my CV by clicking the button</p>
      <button className="cv-button" onClick={handleDownload}>
        Download CV
      </button>
    </section>
  );
};

export default Home;
