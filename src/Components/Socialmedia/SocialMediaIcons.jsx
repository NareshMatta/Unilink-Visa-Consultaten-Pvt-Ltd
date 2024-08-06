import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setShowIcons(true); // Assuming you want to show icons on component mount
  }, []);

  return (
    showIcons && (
      <div className="social-icons-container">
        <div className="social-icon">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    )
  );
};

export default SocialMediaIcons;
