import React, { useState } from 'react';
import './StudyNewZealand.css';
import studyNewZealandImage from '../../assets/studyinNZ.jpg'; 

const StudyNewZealand = () => {
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
    { name: 'University of Auckland', link: 'https://www.auckland.ac.nz/en.html' },
    { name: 'University of Otago', link: 'https://www.otago.ac.nz/' },
    { name: 'Victoria University of Wellington', link: 'https://www.wgtn.ac.nz/' },
    { name: 'University of Canterbury', link: 'https://www.canterbury.ac.nz/' },
    { name: 'Massey University', link: 'https://www.massey.ac.nz/' },
    { name: 'Wintec', link: 'https://www.wintec.ac.nz/' },
    { name: 'AIS St. Helens', link: 'https://www.ais.ac.nz/' },
    { name: 'Whitireia', link: 'https://www.whitireia.ac.nz/' },
    { name: 'NorthTec', link: 'https://www.northtec.ac.nz/' },
    { name: 'Unitec', link: 'https://www.unitec.ac.nz/' },
    { name: 'NMIT', link: 'https://www.nmit.ac.nz/' },
    { name: 'EIT', link: 'https://www.eit.ac.nz/' },
    { name: 'Le Cordon Bleu New Zealand', link: 'https://www.cordonbleu.edu/newzealand/' },
    { name: 'NZSE', link: 'https://www.nzse.ac.nz/' },
    { name: 'NTEC', link: 'https://www.ntec.ac.nz/' },
    { name: 'Avonmore', link: 'https://www.avonmore.ac.nz/' },
    { name: 'WITT', link: 'https://www.witt.ac.nz/' },
    { name: 'PIHMS', link: 'https://www.pihms.ac.nz/' },
    { name: 'Weltec', link: 'https://www.weltec.ac.nz/' },
    { name: 'UCOL', link: 'https://www.ucol.ac.nz/' },
    { name: 'Otago Polytechnic (Auckland)', link: 'https://www.op.ac.nz/' },
    { name: 'SIT', link: 'https://www.sit.ac.nz/' },
    { name: 'Manukau Institute of Technology', link: 'https://www.manukau.ac.nz/' },
    { name: 'NSIA', link: 'https://www.nsia.co.nz/' },
    { name: 'CPIT', link: 'https://www.ara.ac.nz/' }
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-new-zealand-container">
      <h1>Study in New Zealand</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyNewZealandImage} alt="New Zealand" />
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
            <div className="new-zealand-info">
              <h2>About New Zealand</h2>
              <p>
                New Zealand is known for its stunning landscapes, friendly people, and high-quality education system.
              </p>
              <h2>Why Study in New Zealand?</h2>
              <p>
                New Zealand universities are globally recognized for their research and teaching excellence.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process involves submitting academic transcripts, proof of English proficiency, and other documents specific to the university.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in New Zealand are relatively affordable compared to other countries. Scholarships and financial aid are available for international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Students in New Zealand enjoy a vibrant campus life with numerous extracurricular activities and opportunities to explore the country's natural beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyNewZealand;
