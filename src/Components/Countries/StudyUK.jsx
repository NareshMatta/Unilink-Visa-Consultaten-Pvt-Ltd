import React, { useState } from 'react';
import './StudyUK.css'; // Make sure to create this CSS file
import studyUKImage from '../../assets/Studyinuk.jpg'; // Update the path according to your project structure

const StudyUK = () => {
  const [showUniversities, setShowUniversities] = useState(false);
  const [showColleges, setShowColleges] = useState(false);

  const handleShowUniversities = () => {
    setShowUniversities(!showUniversities);
    setShowColleges(false); // Ensure only one section is shown at a time
  };

  const handleShowColleges = () => {
    setShowColleges(!showColleges);
    setShowUniversities(false); // Ensure only one section is shown at a time
  };

  const universities = [
    { name: 'University of Leicester', link: 'https://www2.le.ac.uk/' },
    { name: 'University of West Scotland', link: 'https://www.uws.ac.uk/' },
    // Add more universities here...
  ];

  const colleges = [
    { name: 'Leicester College', link: 'https://www.leicestercollege.ac.uk/' },
    { name: 'BPP University', link: 'https://www.bpp.com/' },
    // Add more colleges here...
  ];

  return (
    <div className="study-uk-container">
      <h1>Study in UK</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyUKImage} alt="UK" />
          </div>
          <h2>Top Universities and Colleges</h2>
          <div className="button-container">
            <button className="colleges-button" onClick={handleShowColleges}>
              {showColleges ? 'Hide Colleges' : 'Show Colleges'}
            </button>
            <button className="universities-button" onClick={handleShowUniversities}>
              {showUniversities ? 'Hide Universities' : 'Show Universities'}
            </button>
          </div>
          {showColleges && (
            <div className="college-container">
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
          {showUniversities && (
            <div className="university-container">
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
        </div>
        <div className="right-container">
          <div className="info-container">
            <div className="uk-info">
              <h2>About the UK</h2>
              <p>
                The United Kingdom (UK) consists of four countries: England, Scotland, Wales, and Northern Ireland. It has a rich cultural heritage and a diverse higher education system.
              </p>
              <h2>Why Study in the UK?</h2>
              <p>
                The UK is renowned for its academic excellence, historical institutions, and research opportunities. It offers a wide range of programs and degrees across various disciplines.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process for studying in the UK typically involves submitting an application through UCAS (Universities and Colleges Admissions Service) for undergraduate programs. Postgraduate applications may vary by institution and program.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in the UK can vary depending on the university and program. International students might expect to pay between £10,000 to £30,000 per year. Scholarships and financial aid options are available.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in the UK offers a multicultural environment with vibrant cities, historical landmarks, and diverse communities. Students can engage in various extracurricular activities, cultural events, and explore the country's rich heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyUK;
