import React from 'react';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/REACT.pdf'; // Assuming your CV is in the public folder
    link.download = 'REACT.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(/Home.jpg)` }} // Use template literals for cleaner code
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
