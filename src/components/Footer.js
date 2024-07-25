import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
        Contact Me 
        </p>
        <div className="social-icons">
            <FaEnvelope/>
        <a href="mailto:amna.bsse2792@iiu.edu.pk">amna.bsse2792@iiu.edu.pk</a>
          <a href="https://www.facebook.com/profile.php?id=100005448888735&mibextid=ZbWKwL" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/amna-ayub-29087124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ayub.amna14?igsh=MXh1ZXh1M3ozdTZoYg==" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/+923045679215" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
