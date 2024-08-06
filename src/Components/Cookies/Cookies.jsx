import React, { useState, useEffect } from 'react';
import './Cookies.css'; // Create a CSS file for styling

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // Do not render the banner if cookies are accepted
  }

  return (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience on our site. By using our site, you accept our use of cookies.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default Cookies;
