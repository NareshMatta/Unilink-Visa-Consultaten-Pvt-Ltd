import React, { useState } from 'react';
import './StudyIreland.css';
import studyIrelandImage from '../../assets/studyinIreland.jpg'; // Update the path according to your project structure

const StudyIreland = () => {
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
    { name: 'Dublin Business School', link: 'https://www.dbs.ie/' },
    { name: 'University College Dublin (UCD)', link: 'https://www.ucd.ie/' },
    { name: 'Dublin City University', link: 'https://www.dcu.ie/' },
    { name: 'Trinity College Dublin', link: 'https://www.tcd.ie/' },
    { name: 'Waterford Institute of Technology', link: 'https://www.wit.ie/' },
    { name: 'Technological University Dublin (UTD) formerly known as DIT', link: 'https://www.tudublin.ie/' },
    { name: 'National University of Ireland, Galway', link: 'https://www.nuigalway.ie/' },
    { name: 'University of Limerick', link: 'https://www.ul.ie/' },
    { name: 'Maynooth University', link: 'https://www.maynoothuniversity.ie/' },
    { name: 'National College of Ireland', link: 'https://www.ncirl.ie/' },
    { name: 'Griffith College Dublin', link: 'https://www.griffith.ie/' },
    { name: 'Dundalk Institute of Technology', link: 'https://www.dkit.ie/' },
    { name: 'Institute of Technology Tralee', link: 'https://www.ittralee.ie/' },
    { name: 'University College Cork', link: 'https://www.ucc.ie/' },
    { name: 'IT Sligo', link: 'https://www.itsligo.ie/' }
    // Add more universities as needed
  ];

  const colleges = [
    // Define your colleges here if separate from universities
  ];

  return (
    <div className="study-ireland-container">
      <h1>Study in Ireland</h1>
      <div className="content-container">
        <div className="left-container">
          <div className="image">
            <img src={studyIrelandImage} alt="Ireland" />
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
            <div className="ireland-info">
              <h2>About Ireland</h2>
              <p>
                Ireland is known for its rich history, vibrant culture, and beautiful landscapes. It is an attractive destination for international students.
              </p>
              <h2>Why Study in Ireland?</h2>
              <p>
                Irish universities offer high-quality education with a strong focus on research and innovation. The country is welcoming and provides numerous opportunities for career development.
              </p>
              <h2>Application Process</h2>
              <p>
                The application process usually involves submitting academic transcripts, proof of English language proficiency, and other supporting documents.
              </p>
              <h2>Cost of Education</h2>
              <p>
                Tuition fees in Ireland are relatively affordable compared to other Western countries, and there are scholarships available for international students.
              </p>
              <h2>Student Life</h2>
              <p>
                Ireland offers a lively student life with a blend of academic excellence and extracurricular activities. Students can explore historic sites, enjoy traditional music, and experience the warm hospitality of the Irish people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyIreland;
