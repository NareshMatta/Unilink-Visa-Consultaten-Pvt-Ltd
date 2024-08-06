import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="src/assets/logo.png" alt="aecc" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Test Preparation</h4>
            <ul>
              <li><a href="#">IELTS</a></li>
              <li><a href="#">TOEFL</a></li>
              <li><a href="#">PTE</a></li>
              <li><a href="#">Duolingo</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Premium Counselling</h4>
            <ul>
              <li><a href="#">Undergraduate</a></li>
              <li><a href="#">MS/PhD</a></li>
              <li><a href="#">Master in Management</a></li>
              <li><a href="#">MBA</a></li>
              <li><a href="#">Dream College Program</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="#">Chat On WhatsApp</a></li>
              <li><a href="#">Book an Appointment</a></li>
              <li><a href="#">Meet Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Study Abroad</h4>
            <div className="country-list">
              <ul>
                <li><a href="#">Study in Australia</a></li>
                <li><a href="#">Study in Canada</a></li>
                <li><a href="#">Study in UK</a></li>
                <li><a href="#">Study in USA</a></li>
                <li><a href="#">Study in Ireland</a></li>
                <li><a href="#">Study in New Zealand</a></li>
                <li><a href="#">Study in Germany</a></li>
                <li><a href="#">Study in UAE</a></li>
                <li><a href="#">Study in France</a></li>
                <li><a href="#">Study in Italy</a></li>
                <li><a href="#">Study in Malaysia</a></li>
                <li><a href="#">Study in Switzerland</a></li>
                <li><a href="#">Study in Singapore</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column contact-info">
            <h4>Contact Info</h4>
            <p>Don't hesitate to contact and feel free to reach us!</p>
            <p>+91 9703716474</p>
            <p>contact@mattanareshbabu1998.com</p>
            <p>Road No-3 KPHB Colony Phase-1</p>
          </div>
        </div>
      </div>
     
      <div className="footer-bottom">
        <p>Copyright © 2024 Study Abroad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
