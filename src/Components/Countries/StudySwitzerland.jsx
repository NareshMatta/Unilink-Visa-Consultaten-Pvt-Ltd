import React, { useState } from 'react';
import './StudySwitzerland.css';
import studySwitzerlandImage from '../../assets/StudyinSwizerland.jpg'; // Update the path according to your project structure

const StudySwitzerland = () => {
  const [showUniversities, setShowUniversities] = useState(false);
  const [showColleges, setShowColleges] = useState(false);

  const handleShowUniversities = () => {
    setShowUniversities(!showUniversities);
  };

  const handleShowColleges = () => {
    setShowColleges(!showColleges);
  };

  const universities = [
    { name: 'Business & Hotel Management School (BHMS)', link: 'https://www.bhms.ch/' }
  ];

  const colleges = [
    { name: 'Hotel Institute Montreux', link: 'https://www.hotelinstitutemontreux.com/' },
    { name: 'Swiss Hotel Management School', link: 'https://www.shms.com/' }
  ];

  return (
    <div className="study-switzerland-container">
      <h1>Study in Switzerland</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studySwitzerlandImage} alt="Switzerland" />
            <h2>Top Universities and Colleges</h2>
          </div>
          <div className="button-container">
          
            <div className="buttons-row">
              <button onClick={handleShowColleges}>
                {showColleges ? 'Hide Colleges' : 'Show Colleges'}
              </button>
              <button onClick={handleShowUniversities}>
                {showUniversities ? 'Hide Universities' : 'Show Universities'}
              </button>
            </div>
          </div>
          {showUniversities && (
            <div className="list-container">
              <h2>Top Universities</h2>
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
                      <td>
                        <a href={uni.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {showColleges && (
            <div className="list-container">
              <h2>Top Colleges</h2>
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
                      <td>
                        <a href={college.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="right-container">
          <div className="info-container">
            <div className="switzerland-info">
              <h2>About Switzerland</h2>
              <p>
                Switzerland is renowned for its high quality of life, stunning landscapes, and excellent education system. It is a popular destination for international students.
              </p>
              <h2>Why Study in Switzerland?</h2>
              <p>
                Swiss universities are known for their strong emphasis on research and innovation. The country offers a multicultural environment and numerous opportunities for career advancement.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process typically involves submitting academic records, proof of language proficiency, and other necessary documents to the universities directly.
              </p>
              <h2>Cost of Education</h2>
              <p>
                While tuition fees in Switzerland can be higher than in some other European countries, they are still relatively affordable compared to the US and UK. There are also various scholarships available for international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Switzerland offers a vibrant student life with a balance of academic rigor and leisure activities. Students can enjoy outdoor adventures in the Alps, explore historic cities, and experience a high standard of living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySwitzerland;
