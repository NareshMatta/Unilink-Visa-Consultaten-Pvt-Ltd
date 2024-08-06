import React, { useState } from 'react';
import './StudyCanada.css';
import studyCanadaImage from '../../assets/studyinCanada.jpg';

const StudyCanada = () => {
  const [showColleges, setShowColleges] = useState(false);
  const [showUniversities, setShowUniversities] = useState(false);

  const handleShowColleges = () => {
    setShowColleges(!showColleges);
  };

  const handleShowUniversities = () => {
    setShowUniversities(!showUniversities);
  };

  const colleges = [
    { name: 'George Brown College', link: 'https://www.georgebrown.ca/' },
    { name: 'Fanshawe College', link: 'https://www.fanshawec.ca/' },
    { name: 'Conestoga College', link: 'https://www.conestogac.on.ca/' },
    { name: 'Lambton College', link: 'https://www.lambtoncollege.ca/' },
    { name: 'Douglas College', link: 'https://www.douglascollege.ca/' },
    { name: 'CDE College', link: 'https://www.collegededucation.ca/' },
    { name: 'Seneca College', link: 'https://www.senecacollege.ca/' },
    { name: 'Fleming College', link: 'https://www.flemingcollege.ca/' },
    { name: 'Durham College', link: 'https://durhamcollege.ca/' },
    { name: 'St. Clair College', link: 'https://www.stclaircollege.ca/' },
    { name: 'Northern Light College', link: 'https://www.nlc.bc.ca/' },
    { name: 'Niagara College', link: 'https://www.niagaracollege.ca/' },
    { name: 'Canadore College', link: 'https://www.canadorecollege.ca/' },
    { name: 'Algonquin College', link: 'https://www.algonquincollege.com/' },
    { name: 'Stenberg College', link: 'https://www.stenbergcollege.com/' },
    { name: 'Selkirk College', link: 'https://selkirk.ca/' },
    { name: 'Parkland College', link: 'https://www.parklandcollege.sk.ca/' },
    { name: 'International College of Manitoba', link: 'https://www.icmanitoba.ca/' },
    { name: 'Fraser International College', link: 'https://www.fraseric.ca/' },
    { name: 'St. Lawrence College', link: 'https://www.stlawrencecollege.ca/' },
    { name: 'Cambrian College', link: 'https://www.cambriancollege.ca/' },
    { name: 'Sheridan College', link: 'https://www.sheridancollege.ca/' },
    { name: 'Lasalle College', link: 'https://www.lasallecollege.com/' },
  ];

  const universities = [
    { name: 'University Canada West', link: 'https://www.ucanwest.ca/' },
    { name: 'Toronto School of Management', link: 'https://www.torontosom.ca/' },
    { name: 'Ryerson University', link: 'https://www.ryerson.ca/' },
    { name: 'ISI College Montreal', link: 'https://www.isi-mtl.com/' },
    { name: 'Canada College', link: 'https://www.collegecanada.com/' },
    { name: 'Cape Breton University', link: 'https://www.cbu.ca/' },
    { name: 'Nipissing University', link: 'https://www.nipissingu.ca/' },
    { name: 'Mount Saint Vincent University', link: 'https://www.msvu.ca/' },
    { name: 'University of Northern British Columbia', link: 'https://www.unbc.ca/' },
    { name: 'Yorkville University', link: 'https://www.yorkvilleu.ca/' },
    { name: "St. Francis Xavier's University", link: 'https://www.stfx.ca/' },
    { name: 'St. Mary University Calgary (UG)', link: 'https://www.stmu.ca/' }
  ];

  return (
    <div className="study-canada-container">
      <h1>Study in Canada</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyCanadaImage} alt="Canada" />
          </div>
          <div className="institution-container">
            <h2>Top Colleges and Universities</h2>
            <div className="button-container">
              <button onClick={handleShowColleges}>
                {showColleges ? 'Hide Colleges' : 'Show Colleges'}
              </button>
              <button onClick={handleShowUniversities}>
                {showUniversities ? 'Hide Universities' : 'Show Universities'}
              </button>
            </div>
            <div className="table-container">
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
                        <td>
                          <a href={college.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </a>
                        </td>
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
                    {universities.map((university, index) => (
                      <tr key={index}>
                        <td>{university.name}</td>
                        <td>
                          <a href={university.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="info-container">
            <div className="canada-info">
              <h2>About Canada</h2>
              <p>
                Canada is known for its high-quality education system, multicultural society, and welcoming environment for international students.
              </p>
              <h2>Why Study in Canada?</h2>
              <p>
                Canadian universities offer diverse programs, research opportunities, and a focus on innovation and academic excellence.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process varies by university and program. International students may need to fulfill language requirements and submit transcripts.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in Canada vary by institution and program. Scholarships, grants, and part-time work opportunities can help offset costs.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Canada provides access to vibrant cities, beautiful landscapes, and a range of cultural and recreational activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCanada;
