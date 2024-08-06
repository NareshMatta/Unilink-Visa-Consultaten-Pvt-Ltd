import React, { useState } from 'react';
import './Aboutus.css';

const Aboutus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="About">
      <div className="text-section">
        <h2>Welcome To UNILINK VISA Consultants</h2>
        <p>The Most Trusted Mentor For Your Education Abroad</p>
        <p>At Unilink Visa, we believe that education knows no borders, and we're dedicated to bridging the gap between students and their desired international universities.</p>
        <p>Our comprehensive services include university selection, application processing, visa assistance, and pre-departure orientation, ensuring a seamless and stress-free experience for our students.</p>
        <button className="consultancy-button" onClick={toggleModal}>Book a Free Consultancy</button>
      </div>
      <div className="image-section1">
        <img className="big-image" src="/src/assets/about-us-overlay-word-young-people-1536x1151.jpg" alt="Big Visual" />
        {/* <img className="small-image" src="src/Components/Aboutus/consultancyimg2.webp" alt="Small Visual" /> */}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Book a Free Consultation</h2>
            <p>Fill out the form below and one of our experts will get in touch with you.</p>
            <form>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Your Preferred Country" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone Number" required />
                <input type="text" placeholder="Preferred Level of Study" required />
              </div>
              <div className="form-group">
                <div className="recaptcha">
                  <input type="checkbox" id="recaptcha" name="recaptcha" required />
                  <label htmlFor="recaptcha">I'm not a robot</label>
                </div>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutus;