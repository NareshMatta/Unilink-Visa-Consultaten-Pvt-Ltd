import React, { useState } from 'react';
import './StudyGermany.css'; // Make sure to create this CSS file
import studyGermanyImage from '../../assets/studyinGermany.jpg'; // Update the path according to your project structure

const StudyGermany = () => {
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

  const colleges = [
    { name: 'FH Aachen Freshman Institute', link: 'https://www.fh-aachen.de/en/' },
    { name: 'Berlin International College', link: 'https://www.berlin-international-college.de/en/' },
    { name: 'TH Wildau Freshman Institute', link: 'https://www.th-wildau.de/en/' },
    { name: 'Eurasia Institute', link: 'https://www.eurasia-institute.com/en/' }
    // Add more colleges as needed
  ];

  const universities = [
    { name: 'FH Aachen University of Applied Sciences', link: 'https://www.fh-aachen.de/en/' },
    { name: 'Berlin International University of Applied Sciences', link: 'https://www.berlin-international-college.de/en/' },
    { name: 'Technische Hochschule Wildau', link: 'https://www.th-wildau.de/en/' },
    { name: 'Eurasia Institute', link: 'https://www.eurasia-institute.com/en/' }
    // Add more universities as needed
  ];

  return (
    <div className="study-germany-container">
      <h1>Study in Germany</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyGermanyImage} alt="Germany" />
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
            <div className="germany-info">
              <h2>About Germany</h2>
              <p>
                Germany is known for its strong economy, technological advancements, and high-quality education system.
              </p>
              <h2>Why Study in Germany?</h2>
              <p>
                German universities offer a wide range of programs, often tuition-free for international students, and emphasize practical experience.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process can vary by university and program, with some requiring standardized tests like TestDaF or DSH for German proficiency.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Public universities in Germany are generally tuition-free for international students, though administrative fees apply. Private universities have tuition fees.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Germany offers a mix of vibrant cities, picturesque landscapes, and a rich cultural scene with numerous activities for students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyGermany;
