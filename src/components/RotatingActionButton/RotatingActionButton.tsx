import React, { useState } from 'react';
import rotatingText from '../../images/rotating-text.svg';
// import './RotatingActionButton.css'; // Assuming your CSS is in this file

const RotatingActionButton = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button className="image-container">
      <img
        src={rotatingText}
        alt="Background Image"
        className="background-image"
      />
      <div
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </button>
  );
};

export default RotatingActionButton;
