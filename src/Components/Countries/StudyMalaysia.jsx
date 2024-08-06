import React, { useState } from 'react';
import './StudyMalaysia.css';
import studyMalaysiaImage from '../../assets/studyinMalaysia.jpg'; // Update the path according to your project structure

const StudyMalaysia = () => {
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
    { name: 'University of Southampton', link: 'https://www.southampton.ac.uk/' },
    { name: 'Nottingham University Malaysia', link: 'https://www.nottingham.edu.my/' },
    { name: 'INTI International University', link: 'https://newinti.edu.my/' },
    { name: 'Heriot-Watt University Malaysia', link: 'https://www.hw.ac.uk/malaysia.htm' }
    // Add more universities as needed
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-malaysia-container">
      <h1>Study in Malaysia</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyMalaysiaImage} alt="Malaysia" />
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
            <div className="malaysia-info">
              <h2>About Malaysia</h2>
              <p>
                Malaysia is a vibrant country with diverse cultures and a rapidly growing economy. It offers a conducive environment for higher education.
              </p>
              <h2>Why Study in Malaysia?</h2>
              <p>
                Malaysian universities provide quality education recognized worldwide, with affordable tuition fees and a wide range of programs.
              </p>
              <h2>Application Process</h2>
              <p>
                Application procedures vary but typically involve submitting academic transcripts, language proficiency tests, and application forms directly to the university.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees are competitive, especially compared to Western countries. Scholarships and financial aid options are available for international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Malaysia offers a blend of modern amenities and natural beauty, with opportunities to explore its tropical landscapes and diverse cuisine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMalaysia;
