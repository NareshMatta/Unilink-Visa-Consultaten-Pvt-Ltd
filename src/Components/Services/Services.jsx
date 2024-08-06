import React from 'react';
import './Services.css';

const servicesData = [
  {
    imgSrc: 'src/Components/Services/1st.png',
    title: 'Case Analysis',
    description: 'The Hope specialists do appropriate case research and analysis, before beginning of the process.'
  },
  {
    imgSrc: 'src/Components/Services/2nd.png',
    title: 'Documentation Assistance',
    description: 'Suitable documentation is the way to effective application and visa approval.'
  },
  {
    imgSrc: 'src/Components/Services/3rd.jpeg',
    title: 'Visa Application',
    description: 'File visa application precisely under the direction of a certified Immigration Expert.'
  },
  {
    imgSrc: 'src/Components/Services/4th.jpeg',
    title: 'Language Coaching',
    description: 'Our in-house IELTS mentor gives you IELTS, PTE, & TOEFL Coaching to upgrade English Proficiency. We also provide spoken French, German, and Spanish language coaching.'
  },
  {
    imgSrc: 'src/Components/Services/5th.jpeg',
    title: 'International Admissions',
    description: 'We assist you with choosing the top-ranked college/university and apply for visa to study overseas.'
  },
  {
    imgSrc: 'src/Components/Services/6th.png',
    title: 'Refusal Case Analysis',
    description: 'Our expert does investigation of refusal cases and helps you in refiling of application.'
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.imgSrc} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;