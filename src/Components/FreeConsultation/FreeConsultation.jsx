import React, { useState } from 'react';
import './FreeConsultation.css';
import cellImage from '../../Components/FreeConsultation/cell.png'; // Adjust the path to your image

const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
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
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Consultation request submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to submit consultation request');
        console.log('Response Status:', response.status);
        const errorData = await response.json();
        console.log('Error Data:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="free-consultation-container">
      <div className="left-side">
        <h1 className="animate-top">Request a Free Consultation</h1><br /><br />
        <form className="consultation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="animate-top"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="animate-top"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="animate-top"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="animate-top"
          />
          <textarea
            name="message"
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={handleChange}
            required
            className="animate-top"
          ></textarea>
          <button type="submit" className="animate-top">Submit</button>
        </form>
      </div>
      <div className="right-side animate-top">
        <h2>We're here to help</h2>
        <p>Leave a message and we will get back to you</p>
        <img src={cellImage} alt="Contact" className="animate-image" />
      </div>
    </div>
  );
};

export default FreeConsultation;
