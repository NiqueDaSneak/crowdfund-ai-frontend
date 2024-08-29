import React, { useState } from 'react';
import rotatingDemoText from '../../images/rotating-demo-text.svg';
import rotatingBackText from '../../images/rotating-back-text.svg';
import { navigate } from 'gatsby';
import { IoArrowRedoOutline } from 'react-icons/io5';

interface RotatingActionButtonProps {
  isMenuOpen: boolean;
  // setIsMenuOpen: (isOpen: boolean) => void;
}

const RotatingActionButton: React.FC<RotatingActionButtonProps> = ({
  isMenuOpen,
  // setIsMenuOpen,
}) => {
  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen);
    navigate('/products-overview');
  };

  return (
    <button className="image-container" onClick={toggleMenu}>
      <img
        src={isMenuOpen ? rotatingBackText : rotatingDemoText}
        alt="Background Image"
        className="background-image"
      />
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </button>
  );
};

export default RotatingActionButton;
