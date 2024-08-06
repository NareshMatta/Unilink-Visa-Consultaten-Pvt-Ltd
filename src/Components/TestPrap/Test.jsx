import React from 'react';
import './Test.css';

const CoachingCards = () => {
  const benefits = [
    'Personalized Preparation Based On Adaptive Learning',
    'Special Test Taking Strategies',
    'Flexible Schedules And Fast Track Batches Available',
    'Strong Focus On Concepts',
    'Experienced And Professional Teachers',
    'Comprehensive, Economical & Rigorous',
  ];

  const coachingDetails = [
    {
      title: 'GRE-coaching',
      description: 'GRE is a world renowned admission test required to be given by those candidates who wish to seek admission to graduate programs primarily in the areas of Engineering and Sciences at educational institutions in USA.',
      image: '/src/Components/TestPrap/GRE.png',
    },
    {
      title: 'Duolingo',
      description: 'Duolingo English Test is a computer based English proficiency test which assesses the test taker\'s Listening, Reading, Writing and Speaking skills. The test is administered using computer adaptive technology, meaning that the question difficulty adapts to each test taker.',
      image: '/src/Components/TestPrap/DUO.png',
    },
    {
      title: 'GMAT-coaching',
      description: 'GMAT is a world renowned admission test required to be given by the candidates desirous of taking admission to Graduate Management programs at management education institutions throughout the world.',
      image: '/src/Components/TestPrap/GMAT.png',
    },
    {
      title: 'TOEFL-preparation',
      description: 'TOEFL is a standardized English proficiency test that assesses English Language skills in the areas of listening, reading, writing and speaking.',
      image: '/src/Components/TestPrap/oefl.png',
    },
    {
      title: 'IELTS-coaching',
      description: 'IELTS is a globally recognized, standardized English Proficiency Test that assesses English Language Skills in the areas of Listening, Reading, Writing and Speaking.',
      image: '/src/Components/TestPrap/IelTs.png',
    },
    {
      title: 'PTE-academic',
      description: 'PTE Academic is 3 hours long and is split into timed parts. When the time is up on the section, the test will move on automatically. There are 20 different types of tasks.',
      image: '/src/Components/TestPrap/PTE.png',
    },
    {
      title: 'SAT-Coaching',
      description: 'SATis a distinguished admission text requred to be given bythe candidates who wish to seek admissionto undergraduate progrems primarily in USA.',
      image: '/src/Components/TestPrap/SAT.png',
    },
    {
      title: 'ACT-coaching',
      description: 'ACT is a leading college entrance exam that evaluates a student"s readiness for college. it healps measure what youlearn in highschool soas to determine your acedemic readiness for collage.',
      image: '/src/Components/TestPrap/ACT.png',
    },
    {
      title: 'CAEL-Coaching',
      description: 'The canadian Academic English Language Test,is a test designed to measure the English language proficiency of students planning to study in Canadian post-secoundary institutions.',
      image: '/src/Components/TestPrap/CAEL.png',
    },
  ];

  return (
    <div className="coaching-cards-container">
      <h1 className="heading">Test Preparation</h1>
      <div className="content">
        <div className="text-section1">
          <p>Edwise provides incomparable training in IELTS, TOEFL, PTE, GRE, GMAT, SAT and ACT test preparation in 23 branches across India. Our renowned faculty ensures you achieve the best scores possible. Every student is unique and we follow a mentoring model where every student is assigned a personal mentor who steers the student towards success.</p>
          <p>Our classes comprise of small batch sizes, ensuring personalized attention. Faculties are available all throughout the course to solve personal doubts and questions. Our well planned curriculum seeks to make the student a master at problem solving. We follow a flexible approach allowing student's personalized coaching, make up classes, extra classes as well as numerous mock tests throughout the course. Our innovative and new age teaching methodology has allowed us to attain an exceptional track record in the area of study abroad test prep. Batches commence every week and the courses are result oriented. We also have a well stocked library that consist of Kaplan, Cambridge, Princeton publications available.</p>
        </div>
        <div className="image-section">
          <h2>Our Partners</h2>
          <hr />
          <img src="/src/Components/TestPrap/download (3).jpg" alt="img" /><hr />
          <img src="/src/Components/TestPrap/download (6).png" alt="img" /><hr />
          <img src="/src/Components/TestPrap/download (7).jpg" alt="img" />
        </div>
      </div>
      <div className="benefits-section">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit" key={index}>
              <div className="benefit-icon">🎯</div>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="coaching-cards">
        {coachingDetails.map((detail, index) => (
          <div className="coaching-card" key={index}>
            <img src={detail.image} alt={detail.title} />
            <div className="text-container">
              <h3>{detail.title}</h3>
              <hr />
              <p>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachingCards;
