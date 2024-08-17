import React from 'react';
import Button from '../Button/Button';
import { Section } from '../../pages/campaign';
import { FaInfoCircle } from 'react-icons/fa'; // Import the info icon

interface CampaignFormProps {
  isAnimating: boolean;
  handleCloseForm: () => void;
  section: Section;
  sectionData: string;
  onSectionDataChange: (value: string) => void;
  handleSubmit: (section: Section) => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  isAnimating,
  handleCloseForm,
  section,
  sectionData,
  onSectionDataChange,
  handleSubmit,
}) => {
  return (
    <div className={`form-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <button className="close-btn" onClick={handleCloseForm}>
        X
      </button>
      <span className="form-title">{section.title}</span>
      <span className="form-subheading">
        {section.subheading}
        {section.title === 'Categories' && (
          <div className="tooltip-container">
            <FaInfoCircle className="info-icon" />
            <div className="tooltip-text">
              Add categories related to your campaign, such as "technology,"
              "health," or "education." This will help us provide more relevant
              recommendations.
            </div>
          </div>
        )}
      </span>
      <form onSubmit={() => handleSubmit(section)}>
        <textarea
          maxLength={section.maxLength}
          className="form-input"
          placeholder={section.placeholder}
          value={sectionData}
          onChange={(e) => onSectionDataChange(e.target.value)}
        />
        <div className="char-counter">
          {sectionData.length}/{section.maxLength} characters
        </div>
        {section.title !== 'Categories' && (
          <Button label="Get Reccomendations" type="submit" />
        )}
        {/* {section.title === 'Categories' && (
        )} */}
      </form>
    </div>
  );
};

export default CampaignForm;
