import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Modal from '../Modal/Modal';
import './Hero.css';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const assistanceLinks = [
    "Finding University",
    "Finding Country",
    "Loans",
    "Test Prep (IELTS, PTE, etc.)"
  ];

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (hoverIndex !== null) {
      return;
    }
    
    const interval = setInterval(() => {
      setHighlightIndex(prevIndex => (prevIndex + 1) % assistanceLinks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hoverIndex, assistanceLinks.length]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (link) => {
    if (link === "Test Prep (IELTS, PTE, etc.)") {
      navigate("/TestPrap/Test"); // Navigate to Testprep page
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="hero-container">
      <div className="left-section">
        {/* <img src="src/assets/image_cleanup.png" alt="Left Section" className="left-section-image"/> */}
        <div className="left-section-text">
          <h1 className="animate-charcter">UNILINK VISA CONSULTANT <span className="highlight"></span></h1>
          <p>
            Your Dream to study abroad can come true with Gradding the best and most reliable study abroad consultant. 
            We guide you to <br />pursue an exceptional journey to complete your education internationally.
            {isExpanded && (
              <>
                You can contact us to successfully choose the universities and courses that suit your interests, abilities <br /> 
                and manage the visa and loan process by clearing all your doubts. 
                Besides, we can help you choose suitable countries from a  <br />
                long list of top ones, such as the UK, USA, Australia, Canada and more.
              </>
            )}
            <a href="#readMore" onClick={toggleReadMore}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>
          </p>
          <div className="benefits">
            <div className="benefit-item">
              <img src="src/assets/download-removebg-preview.png" alt="Scholarships Icon" />
              <p><b><span className="highlight">Scholarships</span> Available</b></p>
            </div>
            <div className="benefit-item">
              <img src="src/assets/images-removebg-preview.png" alt="Offer Icon" />
              <p><b><span className="highlight">Get Offer</span> From University In 7 To 15 Days</b></p>
            </div>
            <div className="benefit-item">
              <img src="src/assets/images__1_-removebg-preview.png" alt="Education Loan Icon" />
              <p><b><span className="highlight">Education Loan</span> Approval In 24 Hours</b></p>
            </div>
          </div>
          <a href="/Free-Consultation" className="book-session-btn">
            Book Free Session
          </a>
        </div>
      </div>
      <div className="right-section">
        <img src="/src/assets/Online_Counseling_ac53b10384.png" alt="Student" className="student-image"/>
        <div className="assistance-box">
          <h2>I want FREE assistance with</h2>
          <ul>
            {assistanceLinks.map((link, index) => (
              <li
                key={index}
                className={`assistance-button ${index === (hoverIndex !== null ? hoverIndex : highlightIndex) ? 'highlight' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(link)} // Pass link to handleClick
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default Hero;
