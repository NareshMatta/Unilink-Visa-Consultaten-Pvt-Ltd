import React, { useState } from 'react';
import './StudyAustralia.css'; // Ensure you have the correct CSS file imported
import studyAustraliaImage from '../../assets/studyinAustralia.jpg';

const StudyAustralia = () => {
  const [showUniversities, setShowUniversities] = useState(false);
  const [showColleges, setShowColleges] = useState(false);

  const handleShowUniversities = () => {
    setShowUniversities(!showUniversities);
    setShowColleges(false); // Hide colleges when universities are shown
  };

  const handleShowColleges = () => {
    setShowColleges(!showColleges);
    setShowUniversities(false); // Hide universities when colleges are shown
  };

  const universities = [
    { name: 'University of Sydney', link: 'https://www.sydney.edu.au' },
    { name: 'University of Melbourne', link: 'https://www.unimelb.edu.au' },
    { name: 'Australian National University', link: 'https://www.anu.edu.au' },
    { name: 'University of Queensland', link: 'https://www.uq.edu.au' },
    { name: 'University of New South Wales', link: 'https://www.unsw.edu.au' },
    { name: 'Monash University', link: 'https://www.monash.edu' },
    { name: 'James Cook University (Townsville/Cairns Campus)', link: 'https://www.jcu.edu.au' },
    { name: 'University of Tasmania', link: 'https://www.utas.edu.au' },
    { name: 'Flinders University', link: 'https://www.flinders.edu.au' },
    { name: 'James Cook University Brisbane Campus', link: 'https://www.jcu.edu.au' },
    { name: 'Charles Sturt University - Sydney Study Centre', link: 'https://www.csu.edu.au' },
    { name: 'Charles Sturt University - Melbourne Study Centre', link: 'https://www.csu.edu.au' },
    { name: 'Charles Sturt University - Brisbane Study Centre', link: 'https://www.csu.edu.au' },
    { name: 'Bond University', link: 'https://bond.edu.au' },
    { name: 'Latrobe University - Sydney City Campus', link: 'https://www.latrobe.edu.au' },
    { name: 'University of Western Sydney - Sydney City Centre Campus', link: 'https://www.westernsydney.edu.au' },
    { name: 'Le Cordon Bleu', link: 'https://www.cordonbleu.edu' },
    { name: 'Federation University (ATMC)', link: 'https://federation.edu.au' },
    { name: 'Charles Darwin University (ATMC)', link: 'https://www.cdu.edu.au' },
    { name: 'University of Sunshine Coast (ATMC)', link: 'https://www.usc.edu.au' },
    { name: 'Griffith University', link: 'https://www.griffith.edu.au' },
    { name: 'Victoria University - Sydney Campus', link: 'https://www.vu.edu.au' },
    { name: 'Southern Cross University - Melbourne & Sydney Campuses', link: 'https://www.scu.edu.au' },
    { name: 'Flinders University (UG and PG Pathway)', link: 'https://www.flinders.edu.au' },
    { name: 'Curtin College leading to Curtin University', link: 'https://college.curtin.edu.au' },
    { name: 'Eynesbury leading to University of Adelaide', link: 'https://www.eynesbury.navitas.com' },
    { name: 'La Trobe Melbourne leading to LTU', link: 'https://www.latrobe.edu.au' },
    { name: 'Newcastle International College leading to University of Newcastle', link: 'https://www.newcastle.edu.au' },
    { name: 'PIBT leading to Edith Cowan University', link: 'https://www.pibt.wa.edu.au' },
    { name: 'SAIBT Leading to UNISA', link: 'https://www.saibt.sa.edu.au' },
    { name: 'QIBT leading to Griffith University', link: 'https://www.griffith.edu.au' },
    { name: 'SIBT leading to Macquarie University', link: 'https://www.mq.edu.au' }
  ];

  const colleges = [
    { name: 'APIC College', link: 'https://www.apic.edu.au' },
    { name: 'Taylors College', link: 'https://www.taylors.edu.au' },
    { name: 'Taylors College (Univ of Sydney)', link: 'https://www.taylorscollege.edu.au' },
    { name: 'Taylors College (Univ of W. A)', link: 'https://www.taylorscollege.edu.au' },
    { name: 'ANU College (Australia National University)', link: 'https://www.anucollege.edu.au' },
    { name: 'Southern Cross University - Main Campus', link: 'https://www.scu.edu.au' },
    { name: 'RMIT University', link: 'https://www.rmit.edu.au' },
    { name: 'Central Queensland University', link: 'https://www.cqu.edu.au' },
    { name: 'Deakin University', link: 'https://www.deakin.edu.au' },
    { name: 'University of Southern Queensland', link: 'https://www.usq.edu.au' },
    { name: 'University of Wollongong', link: 'https://www.uow.edu.au' }
  ];

  return (
    <div className="study-australia-container">
      <h1>Study in Australia</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyAustraliaImage} alt="Australia" />
          </div>
          <div className="institution-container">
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
                      <td>
                        <a href={college.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
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
            )}
          </div>
        </div>
        <div className="right-container">
          <div className="info-container">
            <div className="australia-info">
              <h2>About Australia</h2>
              <p>
                Australia is renowned for its world-class education system, cultural diversity, and stunning natural landscapes.
              </p>
              <h2>Why Study in Australia?</h2>
              <p>
                Australian universities offer innovative programs, research opportunities, and a supportive environment for international students.
              </p>
              <h2>Visa and Requirements</h2>
              <p>
                International students need a student visa to study in Australia. Check the <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" target="_blank" rel="noopener noreferrer">Department of Home Affairs</a> for details.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in Australia vary by institution and course. Scholarships and part-time work opportunities are available for eligible students.
              </p>
              <h2>Student Life</h2>
              <p>
                Living in Australia offers a vibrant lifestyle with multicultural experiences, outdoor activities, and social events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAustralia;
