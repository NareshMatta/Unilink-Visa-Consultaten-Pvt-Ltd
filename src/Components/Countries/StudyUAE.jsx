import React, { useState } from 'react';
import './StudyUAE.css';
import studyUAEImage from '../../assets/StudyinUAE.jpg';

const StudyUAE = () => {
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
    { name: 'Heriot-Watt University Dubai Campus', link: 'https://www.hw.ac.uk/dubai.htm' },
    { name: 'Middlesex University Dubai', link: 'https://www.mdx.ac.ae/' },
    { name: 'Manipal Academy of Higher Education, Dubai', link: 'https://www.manipaldubai.com/' },
    { name: 'HULT International Business School', link: 'https://www.hult.edu/' },
    { name: 'Amity University Dubai', link: 'https://amityuniversity.ae/' },
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-uae-container">
      <h1>Study in UAE</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyUAEImage} alt="UAE" />
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
            <div className="uae-info">
              <h2>About UAE</h2>
              <p>
                The United Arab Emirates is a dynamic country known for its modern architecture, vibrant economy, and cultural diversity. It offers a unique blend of traditional and contemporary lifestyles.
              </p>
              <h2>Why Study in UAE?</h2>
              <p>
                UAE universities offer high-quality education, state-of-the-art facilities, and a multicultural environment. The country is also a hub for international business and innovation.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process typically involves submitting academic transcripts, language proficiency tests, and other required documents directly to the university.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in the UAE can vary depending on the institution and program. Scholarships and financial aid options are available for international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in the UAE offers access to world-class amenities, vibrant cultural experiences, and opportunities to explore the desert landscapes and modern cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyUAE;
