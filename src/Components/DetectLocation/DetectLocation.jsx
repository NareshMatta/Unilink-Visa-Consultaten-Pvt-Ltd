import React, { useState, useEffect } from 'react';

const DetectLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
          
          setLocation({
            lat: latitude,
            lng: longitude,
          });
          setIsLoaded(true);
        },
        (error) => {
          console.error('Error getting location:', error.message);
          setError(error.message);
          setIsLoaded(true);
        }
      );
    } else {
      const errorMessage = 'Geolocation is not supported by this browser.';
      console.error(errorMessage);
      setError(errorMessage);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && location.lat && location.lng) {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15,
      });

      new google.maps.Marker({
        map,
        position: location,
      });
    }
  }, [isLoaded, location]);

  return (
    <div>
      {isLoaded ? (
        location.lat && location.lng ? (
          <div id="map" style={{ width: '100%', height: '400px' }}></div>
        ) : (
          <div>Error: {error}</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetectLocation;
