import React from 'react';
import { FaCheckSquare, FaUser, FaFileAlt, FaCoins, FaPlaneDeparture } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Process.css';


const steps = [
  {
    id: 1,
    icon: <FaCheckSquare />, // React Icon component
    title: 'Free Expert Counseling Service',
    link: '/Links1/Admission',
  },
  {
    id: 2,
    icon: <FaUser />, // React Icon component
    title: 'Identify Course, Country & University',
    link: '/Links1/Admission',
  },
  {
    id: 3,
    icon: <FaFileAlt />, // React Icon component
    title: 'International Test Preparation',
    link: '/TestPrap/Test',
  },
  {
    id: 4,
    icon: <FaCoins />, // React Icon component
    title: 'Application Editing & Processing',
    link: '/Links1/Admission',
  },
  {
    id: 5,
    icon: <FaPlaneDeparture />, // React Icon component
    title: 'Funding, Visa & Pre-Departure Prep.',
    link:'/Links/Visalink',
  },
];

const ProcessSteps = () => {
  return (
    <div className="process-steps-container">
      <h1 className="process-title">The Counseling Process</h1>
      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <Link to={step.link} className="step-link">
              <div className="step-icon">
                <div className="step-number">{step.id}</div>
                {step.icon}
              </div>
            </Link>
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
