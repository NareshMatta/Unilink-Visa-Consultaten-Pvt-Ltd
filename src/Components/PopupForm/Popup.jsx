import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    year: '',
    terms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, destination, year, terms } = formData;

    if (
      name.trim() &&
      email.trim() &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && // Email validation
      phone.trim().length === 10 && /^[0-9]+$/.test(phone) && // Phone number validation
      destination &&
      year &&
      terms
    ) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 5000); // Close the popup after 3 seconds
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Book your<span className="highlight">FREE CONSULTATION</span> with us </h2>
        {isSubmitted ? (
          <div className="success-message">Successfully Submitted!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="phone-input">
              <span>+91</span>
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number (10 Digits)"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Study Destination</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="UAE">UAE</option>
            </select>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Study Year</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                By clicking you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a> *
              </label>
            </div>
            <button type="submit" className="submit-button">Get Started for Free</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;