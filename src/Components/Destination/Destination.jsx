import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'; // Import the main CSS file
import bg from '../../assets/bg.jpeg'

const countryData = [
  {
    name: 'France',
    image: '/src/Components/Destination/france.jpg', // Replace with your image path
    flag: '/src/Components/Destination/flag1.webp', // Add the flag image path
    description:
      'France is a European country with a long history and rich culture. It is known for its beautiful scenery, delicious food, and world-famous landmarks like the Eiffel Tower.',
    link: '/study-france',
  },
  {
    name: 'USA',
    image: '/src/Components/Destination/America.jpg', // Replace with your image path
    flag: 'src/Components/Destination/AmeriFlag.gif', // Add the flag image path
    description:
      'The USA is a diverse country known for its innovation, cultural influence, and numerous famous landmarks like the Statue of Liberty.',
    link: '/study-usa',
  },
  {
    name: 'Canada',
    image: '/src/Components/Destination/canada.jpg', // Replace with your image path
    flag: 'src/Components/Destination/Canadaflag.gif', // Add the flag image path
    description:
      'Canada is known for its stunning natural landscapes, multicultural cities, and a high quality of life.',
    link: '/study-canada',
  },
  {
    name: 'New Zealand',
    image: 'src/Components/Destination/new.png', // Replace with your image path
    flag: 'src/Components/Destination/newflage.gif', // Add the flag image path
    description:
      'New Zealand is a beautiful country known for its landscapes, Maori culture, adventure sports, and excellent education system.',
    link: 'study-NewZealand',
  },
  {
    name: 'Ireland',
    image: '/src/Components/Destination/Ireland_header.jpg', // Replace with your image path
    flag: '/src/Components/Destination/Irelandflag.gif', // Add the flag image path
    description:
      'Ireland is famous for its lush green landscapes, rich cultural heritage, and friendly people.',
    link: 'study-Ireland',
  },
  {
    name: 'Australia',
    image: 'src/Components/Destination/aus.jpg', // Replace with your image path
    flag: '/src/Components/Destination/Austrflag.webp', // Add the flag image path
    description:
      'Australia is known for its unique wildlife, beautiful beaches, and laid-back lifestyle.',
    link: 'study-Australia',
  },
  {
    name: 'Malaysia',
    image: '/src/Components/Destination/malaysia.png', // Replace with your image path
    flag: '/src/Components/Destination/malaysiaflag.gif', // Add the flag image path
    description:
      'Malaysia is known for its diverse culture, vibrant cities, and beautiful natural landscapes.',
    link: 'study-malaysia',
  },
  {
    name: 'Singapore',
    image: '/src/Components/Destination/singapore.png', // Replace with your image path
    flag: '/src/Components/Destination/singaporeflag.gif', // Add the flag image path
    description:
      'Singapore is a global financial hub known for its cleanliness, modern architecture, and multicultural population.',
    link: 'study-singapore',
  },
  {
    name: 'UK',
    image: '/src/Components/Destination/UK.png', // Replace with your image path
    flag: '/src/Components/Destination/UKflag.gif', // Add the flag image path
    description:
      'The UK is known for its rich history, cultural heritage, and landmarks such as the British Museum and the Tower of London.',
    link: 'study-uk',
  },
  {
    name: 'Italy',
    image: 'src/Components/Destination/itly.jpg', // Replace with your image path
    flag: 'src/Components/Destination/Italy flag.png', // Add the flag image path
    description:
            "Italy is famed for its rich history, art, architecture, and culinary traditions that have influenced the world.",    link: 'study-switzerland',
    link: 'study-italy',
  },
  {
    name: 'UAE',
    image: 'src/Components/Destination/uaecity.jpg', // Replace with your image path
    flag: 'src/Components/Destination/uae.png', // Add the flag image path
    description:
        'The UAE is celebrated for its dynamic cityscapes, cultural diversity, and role as a global hub for commerce and innovation.',
    link: 'study-uae',
  },

  {
    name: 'Germany',
    image: 'src/Components/Destination/german.jpg', // Replace with your image path
    flag: 'src/Components/Destination/germflg.gif', // Add the flag image path
    description:
           "Germany is known for its rich history, cultural landmarks, and leadership in technology and engineering.",
    link: 'study-germany',
  },



];

const App = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleCountryHover = (country) => {
    setHoveredCountry(country);
  };

  return (
    <div className="page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="countries">
        {countryData.map((country) => (
          <div
            className="country-card"
            key={country.name}
            onMouseEnter={() => handleCountryHover(country)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <div className="country-card-inner">
              <div className="country-card-front">
                <img src={country.image} alt={country.name} />
                <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
              </div>
              <div className="country-card-back">
                <h3>{country.name}</h3>
                <p>{country.description}</p>
                <Link to={country.link}><button>Learn More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;