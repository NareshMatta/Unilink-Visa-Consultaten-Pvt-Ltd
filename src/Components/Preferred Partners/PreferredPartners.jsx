import React from 'react';
import './PreferredPartners.css';

const PreferredPartners = () => {
  const partners = [
    { image: 'src/Components/Preferred Partners/AmericanCollegiate_logo_Gray_WEB.jpg.png' },
    { image: 'src/Components/Preferred Partners/CSU_ClevantStateGlobal_PartnershipLogo_Green-e1645102807978.jpg' },
    { image: 'src/Components/Preferred Partners/download.jpg' },
    { image: 'src/Components/Preferred Partners/OIP (1).jpg' },
    { image: 'src/Components/Preferred Partners/OIP (2).jpg' },
    { image: 'src/Components/Preferred Partners/OIP (3).jpg' },
    { image: 'src/Components/Preferred Partners/OIP (4).jpg' },
    { image: 'src/Components/Preferred Partners/OIP (5).jpg' },
    { image: 'src/Components/Preferred Partners/OIP.jpg' },
    { image: 'src/Components/Preferred Partners/R.jpg' },
    { image: 'src/Components/Preferred Partners/th (2).jpg' },
    { image: 'src/Components/Preferred Partners/th (1).jpg' },
    { image: 'src/Components/Preferred Partners/th.jpg' },
    { image: 'src/Components/Preferred Partners/Tulane-University-Logo.png' },
    { image: 'src/Components/Preferred Partners/University-of-Chicago-Logo-scaled.jpeg' },
    { image: 'src/Components/Preferred Partners/University-of-the-Pacific-Logo.jpg' },
  ];

  return (
    <div className="preferred-partners-container">
      <h2 className="preferred-partners-heading">Preferred Partners</h2>
      <div className="preferred-partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="preferred-partners-item">
            <img src={partner.image} alt={`Partner ${index + 1}`} className="preferred-partners-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferredPartners;
