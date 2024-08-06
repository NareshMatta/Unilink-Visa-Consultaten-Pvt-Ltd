import React, { useEffect } from 'react';

const Security = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (event) => {
      event.preventDefault();
    };
    
    document.addEventListener('contextmenu', disableRightClick);

    // Disable text selection
    const disableTextSelection = (event) => {
      event.preventDefault();
    };

    document.addEventListener('selectstart', disableTextSelection);
    document.addEventListener('mousedown', disableTextSelection);

    // Disable screenshot functionality (only works in some browsers)
    const disableScreenshot = (event) => {
      if (event.key === 'PrintScreen' || event.key === 'F12') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', disableScreenshot);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('selectstart', disableTextSelection);
      document.removeEventListener('mousedown', disableTextSelection);
      document.removeEventListener('keydown', disableScreenshot);
    };
  }, []);

  return null; // This component does not render anything
};

export default Security;
