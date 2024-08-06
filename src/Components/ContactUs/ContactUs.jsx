import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get detailed error message
        throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
      }

      alert('Your request has been submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        role: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send request. Check console for more details.');
    }
  };

  return (
    <div className="contactus-container">
      <div className="form-section">
        <h2>Contact us</h2>
        <p>Fill up the details and our team will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Full Name*" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          /><br />
          <input 
            type="email" 
            placeholder="Your Email Id.*" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          /><br />
          <input 
            type="text" 
            placeholder="Your Phone Number*" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          /><br />
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            required
          >
            <option value="" disabled>I am a</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select><br />
          <button type="submit">Submit</button>
        </form>
        <p className="privacy-note">
          This site is protected by reCAPTCHA Enterprise and the Google 
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and 
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
        </p>
      </div>
      <div className="illustration-section">
        <img src="src/Components/ContactUs/talk.jpg" alt="Customer Support" />
      </div>
    </div>
  );
};

export default ContactUs;
