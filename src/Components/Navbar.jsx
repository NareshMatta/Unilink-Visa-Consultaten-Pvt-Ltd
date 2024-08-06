import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaHome, FaUser, FaGlobe, FaServicestack, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  const handleDropdownClick = () => {
    hideDropdown();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const whatsappNumber = '9515617660';
  const initialMessage = 'Hi, I am Aditya from Uni-Link-Consultation here. How can I help you?';
  const predefinedMessage = "Hi, I'm interested in studying abroad and was wondering if you could provide me with some information about your programs/courses for international students. Could you also let me know about any available scholarships or application deadlines? Thanks!";

  const handleManualMessageSend = () => {
    setMessageSent(true);
  };

  const whatsappLink = messageSent
    ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(predefinedMessage)}`
    : `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(initialMessage)}`;

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul className="nav-links">
        <li className="logo">
          <img src={logo} alt="Logo" />
        </li>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about-us"><FaUser /> About Us</Link></li>
        <li
          className="dropdown"
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <Link to=""><FaGlobe /> Study Abroad</Link>
          {dropdownVisible && (
            <ul className="dropdown-content">
              <li><Link to="/study-uk" onClick={handleDropdownClick}>Study in the UK</Link></li>
              <li><Link to="/study-usa" onClick={handleDropdownClick}>Study in the USA</Link></li>
              <li><Link to="/study-canada" onClick={handleDropdownClick}>Study in Canada</Link></li>
              <li><Link to="/study-malaysia" onClick={handleDropdownClick}>Study in Malaysia</Link></li>
              <li><Link to="/study-australia" onClick={handleDropdownClick}>Study in Australia</Link></li>
              <li><Link to="/study-germany" onClick={handleDropdownClick}>Study in Germany</Link></li>
              <li><Link to="/study-france" onClick={handleDropdownClick}>Study in France</Link></li>
              <li><Link to="/study-italy" onClick={handleDropdownClick}>Study in Italy</Link></li>
              <li><Link to="/study-uae" onClick={handleDropdownClick}>Study in UAE</Link></li>
              <li><Link to="/study-singapore" onClick={handleDropdownClick}>Study in Singapore</Link></li>
              <li><Link to="/study-newzealand" onClick={handleDropdownClick}>Study in NewZealand</Link></li>
              <li><Link to="/study-ireland" onClick={handleDropdownClick}>Study in Ireland</Link></li>
              <li><Link to="/study-switzerland" onClick={handleDropdownClick}>Study in Switzerland</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/services"><FaServicestack /> Services</Link></li>
        <li><Link to="/contact-us"><FaEnvelope /> Contact Us</Link></li>
        <li className="whatsapp-icon">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleManualMessageSend}
          >
            <FaWhatsapp />
          </a>
        </li>
        <li className="tollfree-icon">
          <a href="tel:+9652314569">
            <FaPhoneAlt />
            9652314569
          </a>
        </li>
        <li>
          <Link to="/free-consultation" className="free-consultation-btn">Free Consultation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
