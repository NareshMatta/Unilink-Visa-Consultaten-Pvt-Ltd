import React, { useState } from 'react';
import './StudyFrance.css'; // Make sure to create this CSS file
import studyFranceImage from '../../assets/studyinFrance.jpg'; // Update the path according to your project structure




const StudyFrance = () => {
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
    { name: 'Istituto Marangoni', link: 'https://www.istitutomarangoni.com/en' }
    // Add more colleges as needed
  ];

  const universities = [
    { name: 'University of Paris-Saclay', link: 'https://www.universite-paris-saclay.fr/en' },
    { name: 'Sorbonne University', link: 'https://www.sorbonne-universite.fr/en' },
    { name: 'École Polytechnique', link: 'https://www.polytechnique.edu/en' },
    { name: 'Sciences Po', link: 'https://www.sciencespo.fr/en' }
    // Add more universities as needed
  ];

  return (
    <div className="study-france-container">
      <h1>Study in France</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyFranceImage} alt="France" />
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
            <div className="france-info">
              <h2>About France</h2>
              <p>
                France is renowned for its art, culture, and culinary heritage. It offers a vibrant academic environment with numerous opportunities for international students.
              </p>
              <h2>Why Study in France?</h2>
              <p>
                French universities are highly regarded globally, offering quality education across various disciplines. Students can benefit from research opportunities and a diverse cultural experience.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process varies by university and program. International students may need to meet language proficiency requirements and submit relevant academic credentials.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in France can vary depending on the institution and program. There are scholarships and financial aid options available to support international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in France offers a blend of historic charm and modernity, with bustling cities, picturesque countryside, and cultural landmarks to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyFrance;
