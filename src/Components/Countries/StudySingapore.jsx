import React, { useState } from 'react';
import './StudySingapore.css';
import singaporeImage from '../../assets/studyinSingapore.jpg'; 

const StudySingapore = () => {
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
    { name: 'National University of Singapore', link: 'https://www.nus.edu.sg/' },
    { name: 'Nanyang Technological University', link: 'https://www.ntu.edu.sg/' },
    { name: 'Singapore Management University', link: 'https://www.smu.edu.sg/' },
    { name: 'Singapore University of Technology and Design', link: 'https://www.sutd.edu.sg/' },
    { name: 'James Cook University Singapore', link: 'https://www.jcu.edu.sg/' },
    { name: 'SIM Global Education', link: 'https://www.sim.edu.sg/' },
    { name: 'Management Development Institute of Singapore (MDIS)', link: 'https://www.mdis.edu.sg/' },
    { name: 'PSB Academy', link: 'https://www.psb-academy.edu.sg/' },
    { name: 'Curtin University Singapore', link: 'https://www.curtin.edu.sg/' },
    { name: 'Kaplan Singapore', link: 'https://www.kaplan.com.sg/' },
    { name: 'SP Jain School of Global Management', link: 'https://www.spjain.org/' },
    { name: 'SAE Institute', link: 'https://www.sae.edu.sg/' },
    { name: 'Dimensions International College', link: 'https://www.dimensions.edu.sg/' },
    { name: 'ERC Institute', link: 'https://www.erci.edu.sg/' },
    { name: 'Raffles College of Higher Education', link: 'https://www.raffles-college.edu.sg/' }
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-singapore-container">
      <h1>Study in Singapore</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={singaporeImage} alt="Singapore" />
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
            <div className="singapore-info">
              <h2>About Singapore</h2>
              <p>
                Singapore is a global hub for education and innovation in Asia, known for its advanced infrastructure and multicultural society.
              </p>
              <h2>Why Study in Singapore?</h2>
              <p>
                Singapore offers world-class education with programs in various disciplines, strong industry partnerships, and opportunities for research and internships.
              </p>
              <h2>Application Process</h2>
              <p>
                International students can apply directly to Singaporean universities or through agencies like the Singapore Ministry of Education (MOE) or specific university admissions portals.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in Singapore vary by institution and program. International students may expect to pay between SGD 25,000 to SGD 50,000 annually. Scholarships and grants are available.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Singapore offers a blend of modernity and cultural diversity. Students can explore vibrant city life, multicultural cuisine, and participate in a range of extracurricular activities and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySingapore;
