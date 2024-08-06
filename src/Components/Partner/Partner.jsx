import React from 'react';
import './Partner.css';

const Partner = () => {
  const partners = [
    { image: 'src/Components/Partner/download (1).jpg' },
    { image: 'src/Components/Partner/download (2).jpg' },
    { image: 'src/Components/Partner/download (3).jpg' },
    { image: 'src/Components/Partner/download (4).jpg' },
    { image: 'src/Components/Partner/download (5).jpg' },
    { image: 'src/Components/Partner/download (6).png' },
    { image: 'src/Components/Partner/download (7).jpg' },
    { image: 'src/Components/Partner/OIP (2).jpg' },
    { image: 'src/Components/Partner/OIP (3).jpg' },
    { image: 'src/Components/Partner/OIP.jpg' },
    { image: 'src/Components/Partner/th (1).jpg' },
    { image: 'src/Components/Partner/th (2).jpg' },
    { image: 'src/Components/Partner/th (3).jpg' },
    { image: 'src/Components/Partner/th.jpg' },
  ];

  return (
    <div className="partner-container">
      <h2 className="partner-heading">Our Partners</h2>
      <div className="partner-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner.image} alt={`Partner ${index + 1}`} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
