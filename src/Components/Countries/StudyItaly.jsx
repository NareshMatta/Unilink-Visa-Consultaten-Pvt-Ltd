import React, { useState } from 'react';
import './StudyItaly.css'; // Assuming this CSS file is created for styling
import studyItalyImage from '../../assets/studyinItaly.jpg'; // Update the path according to your project structure

const StudyItaly = () => {
  const [showColleges, setShowColleges] = useState(false);
  const [showUniversities, setShowUniversities] = useState(false);

  const handleShowColleges = () => {
    setShowColleges(!showColleges);
    setShowUniversities(false); // Ensure only one section is shown at a time
  };

  const handleShowUniversities = () => {
    setShowUniversities(!showUniversities);
    setShowColleges(false); // Ensure only one section is shown at a time
  };

  const universities = [
    { name: 'University of Bologna', link: 'https://www.unibo.it/en' },
    { name: 'University of Milan', link: 'https://www.unimi.it/en' },
    { name: 'University of Padua', link: 'https://www.unipd.it/en/' },
    { name: 'Sapienza University of Rome', link: 'https://www.uniroma1.it/en/' },
    { name: 'Istituto Marangoni', link: 'https://www.istitutomarangoni.com/en' },
    // Add more universities as needed
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-italy-container">
      <h1>Study in Italy</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyItalyImage} alt="Italy" />
          </div>
          <div className="university-container">
          <h2>Top Universities and Colleges</h2>
            <div className="button-container">
              <button onClick={handleShowColleges}>
                {showColleges ? 'Hide Colleges' : 'Show Colleges'}
              </button>
              <button onClick={handleShowUniversities}>
                {showUniversities ? 'Hide Universities' : 'Show Universities'}
              </button>
            </div>
            {showColleges && (
              <table>
                <thead>
                  <tr>
                    <th>College</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((college, index) => (
                    <tr key={index}>
                      <td>{college.name}</td>
                      <td><a href={college.link} target="_blank" rel="noopener noreferrer">Visit Website</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {showUniversities && (
              <table>
                <thead>
                  <tr>
                    <th>University</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((uni, index) => (
                    <tr key={index}>
                      <td>{uni.name}</td>
                      <td><a href={uni.link} target="_blank" rel="noopener noreferrer">Visit Website</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="right-container">
          <div className="info-container">
            <div className="italy-info">
              <h2>About Italy</h2>
              <p>
                Italy is renowned for its cultural heritage, art, and cuisine, offering a rich environment for studying abroad.
              </p>
              <h2>Why Study in Italy?</h2>
              <p>
                Italian universities are respected worldwide for their academic excellence and cultural diversity.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process varies by university and program, often requiring proficiency in Italian or English depending on the course.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees can vary widely, with public universities generally more affordable than private institutions. Scholarships and grants are available.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Italy offers a vibrant lifestyle with historical cities, beautiful landscapes, and a rich cultural scene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyItaly;
