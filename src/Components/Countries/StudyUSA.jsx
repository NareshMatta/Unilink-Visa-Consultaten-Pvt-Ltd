import React, { useState } from 'react';
import './StudyUSA.css';
import studyUSAImage from '../../assets/studyinUSA.jpg'; // Update the path according to your project structure

const StudyUSA = () => {
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

   const handleApplyNow = () => {
    navigate('/free-consultation'); // Navigate to the FreeConsultation page
  };


  const universities = [
    { name: 'Cleveland State University', link: 'https://www.csuohio.edu/' },
    { name: 'George Mason University', link: 'https://www2.gmu.edu/' },
    { name: 'Arizona State University', link: 'https://www.asu.edu/' },
    { name: 'UMBC', link: 'https://www.umbc.edu/' },
    { name: 'Pace University', link: 'https://www.pace.edu/' },
    { name: 'University of South Florida', link: 'https://www.usf.edu/' },
    { name: 'Oregon State University', link: 'https://oregonstate.edu/' },
    { name: 'University of Dayton', link: 'https://udayton.edu/' },
    { name: 'Colorado State University', link: 'https://www.colostate.edu/' },
    { name: 'University of Arizona', link: 'https://www.arizona.edu/' },
    { name: 'The University of Alabama at Birmingham', link: 'https://www.uab.edu/' },
    { name: 'Illinois State University', link: 'https://illinoisstate.edu/' },
    { name: 'University of Illinois-Chicago', link: 'https://www.uic.edu/' },
    { name: 'Long Island University, Brooklyn', link: 'https://www.liu.edu/brooklyn' },
    { name: 'Long Island University, Post', link: 'https://www.liu.edu/post' },
    { name: 'Texas A & M University Corpus Christi (TAMUCC)', link: 'https://www.tamucc.edu/' },
    { name: 'Suffolk University, Boston', link: 'https://www.suffolk.edu/' },
    { name: 'Stevens Institute of Technology', link: 'https://www.stevens.edu/' },
    { name: 'DePaul University, Chicago', link: 'https://www.depaul.edu/' },
    { name: 'Hofstra University', link: 'https://www.hofstra.edu/' },
    { name: 'Saint Louis University', link: 'https://www.slu.edu/' },
    { name: 'Seattle Pacific University', link: 'https://www.spu.edu/' },
    { name: 'Drew University', link: 'https://www.drew.edu/' },
    { name: 'Marshall University', link: 'https://www.marshall.edu/' },
    { name: 'Fisher College, Boston', link: 'https://www.fisher.edu/' },
    { name: 'Quinnipiac University, Connecticut', link: 'https://www.qu.edu/' },
    { name: 'Jefferson University, Philadelphia', link: 'https://www.jefferson.edu/' },
    { name: 'New England College, New Hampshire', link: 'https://www.nec.edu/' },
    { name: 'INTO Pathway Courses- USA', link: 'https://www.intostudy.com/en/universities' },
    { name: 'Arizona State University (Law/Business)', link: 'https://www.law.asu.edu/' },
    { name: 'HULT Business School', link: 'https://www.hult.edu/' },
    { name: 'UMASS Boston (Shorelight)', link: 'https://www.umb.edu/' },
    { name: 'University of the Pacific', link: 'https://www.pacific.edu/' },
    { name: 'Glasgow Caledonian New York', link: 'https://www.gcu.ac.uk/newyork/' },
    { name: 'Duquesne University', link: 'https://www.duq.edu/' },
    { name: 'Baylor University', link: 'https://www.baylor.edu/' },
    { name: 'West Virginia University', link: 'https://www.wvu.edu/' },
    { name: 'James Madison University', link: 'https://www.jmu.edu/' },
    { name: 'University of Hartford', link: 'https://www.hartford.edu/' },
    { name: 'Lipscomb University', link: 'https://www.lipscomb.edu/' },
    { name: 'Study Group Pathway Courses - USA', link: 'https://www.studygroup.com/' },
    { name: 'Navitas Pathway - USA', link: 'https://www.navitas.com/' },
    { name: 'Northeastern University (MS degrees by College of Professional Studies)', link: 'https://cps.northeastern.edu/' },
    { name: 'Northeastern University (MS degrees by Business School)', link: 'https://damore-mckim.northeastern.edu/' },
    { name: 'Northeastern University (MBA)', link: 'https://www.northeastern.edu/graduate/program/full-time-mba-2861/' },
    { name: 'University of Central Oklahoma', link: 'https://www.uco.edu/' },
    { name: 'Auburn University', link: 'https://www.auburn.edu/' },
    { name: 'Gonzaga University', link: 'https://www.gonzaga.edu/' },
    { name: 'University of Kansas', link: 'https://www.ku.edu/' },
    { name: 'University of South Carolina', link: 'https://www.sc.edu/' },
    { name: 'Adelphi University', link: 'https://www.adelphi.edu/' },
    { name: 'Florida International University', link: 'https://www.fiu.edu/' },
    { name: 'American University', link: 'https://www.american.edu/' },
    { name: 'University of Central Florida', link: 'https://www.ucf.edu/' },
    { name: 'Louisiana State University', link: 'https://www.lsu.edu/' },
    { name: 'University of Mississippi', link: 'https://www.olemiss.edu/' },
    { name: 'University of Utah', link: 'https://www.utah.edu/' },
    { name: 'American Collegiate LA', link: 'https://www.americanuniversity.edu/california/' },
    { name: 'American Collegiate DC', link: 'https://www.american.edu/' },
    { name: 'Western Washington University', link: 'https://www.wwu.edu/' },
    { name: 'University of Connecticut', link: 'https://www.uconn.edu/' },
    { name: 'Simmons University, Boston (female students only)', link: 'https://www.simmons.edu/' },
    { name: 'Pittsburg State University', link: 'https://www.pittstate.edu/' },
    { name: 'University of Tulsa (Direct UG Entry)', link: 'https://admission.utulsa.edu/apply/' },
    { name: 'University of Tulsa (UG Pathway)', link: 'https://admission.utulsa.edu/apply/' },
    { name: 'University of Nebraska Lincoln', link: 'https://www.unl.edu/' }
  ];

  const colleges = [
    { name: 'Fisher College, Boston', link: 'https://www.fisher.edu/' },
    { name: 'New England College, New Hampshire', link: 'https://www.nec.edu/' },
    // Add other colleges here...
  ];

  return (
    <div className="study-usa-container">
      <h1>Study in USA</h1>
      <div className="content-container">
        <div className="left-container">
          
          <div className="image">
            <img src={studyUSAImage} alt="USA" />
            <h2>Top Universities and Colleges</h2>
          </div>
          <div className="button-container">
            <button onClick={handleShowColleges}>
              {showColleges ? 'Hide Colleges' : 'Show Colleges'}
            </button>
            <button onClick={handleShowUniversities}>
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
            <div className="usa-info">
              <h2>About the USA</h2>
              <p>
                The United States of America (USA) is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions.
              </p>
              <h2>Why Study in the USA?</h2>
              <p>
                The USA is home to some of the world's most prestigious universities and offers a diverse range of programs and degrees. It is known for its high academic standards and research opportunities.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process for studying in the USA typically includes standardized tests like the SAT or ACT for undergraduate programs and the GRE or GMAT for graduate programs. Additionally, international students may need to take the TOEFL or IELTS to demonstrate English proficiency.
              </p>
              <h2>Cost of Education</h2>
              <p>
                The cost of education in the USA can vary widely depending on the institution and program. Tuition fees can range from $20,000 to $50,000 per year. However, many universities offer scholarships, grants, and financial aid to international students.
              </p>
              <p>
                Living in the USA offers a rich cultural experience with diverse communities and numerous extracurricular activities. The cost of living can vary significantly by location, with urban areas being more expensive than rural areas.
              </p>
              <button onClick={handleApplyNow} className="apply-now-button">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyUSA;
