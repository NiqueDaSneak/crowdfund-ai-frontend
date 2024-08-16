import React, { useState } from 'react';
import rotatingText from '../../images/rotating-text.svg';
// import './RotatingActionButton.css'; // Assuming your CSS is in this file

const RotatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="image-container">
      <img
        src={rotatingText}
        alt="Background Image"
        className="background-image"
      />
      <div
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default RotatingActionButton;
