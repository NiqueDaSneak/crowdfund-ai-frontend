import React from 'react';
import { FaLightbulb, FaInfoCircle } from 'react-icons/fa';

const HelperSection = () => {
  return (
    <div className="helper-section">
      <FaLightbulb className="helper-icon" />
      <h2 className="helper-title">Get Started</h2>
      <p className="helper-text">
        Select a section to begin crafting your campaign content. Our tools will
        help you create compelling headlines, subheadings, and stories that
        resonate with your audience.
      </p>
      <p className="helper-text">
        As you start adding content, you'll gain access to our AI-powered
        recommendations to enhance your messaging and maximize your campaign's
        impact.
      </p>
      <div className="tooltip-container">
        <FaInfoCircle className="info-icon" />
        <div className="tooltip-text">
          Our recommendation system analyzes your content and suggests
          improvements to help you create more effective campaign messaging.
          Hover over any section to see tips and suggestions.
        </div>
      </div>
    </div>
  );
};

export default HelperSection;
