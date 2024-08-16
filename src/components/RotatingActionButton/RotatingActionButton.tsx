import React, { useState } from 'react';
import rotatingDemoText from '../../images/rotating-demo-text.svg';
import rotatingBackText from '../../images/rotating-back-text.svg';
interface RotatingActionButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const RotatingActionButton: React.FC<RotatingActionButtonProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button className="image-container">
      <img
        src={isMenuOpen ? rotatingBackText : rotatingDemoText}
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
