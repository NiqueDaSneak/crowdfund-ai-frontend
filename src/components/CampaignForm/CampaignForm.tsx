import React from 'react';
import Button from '../Button/Button';
import { Section } from '../../pages/campaign';
import { FaInfoCircle } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';

interface CampaignFormProps {
  isAnimating: boolean;
  handleCloseForm: () => void;
  section: Section;
  sectionData: string;
  onSectionDataChange: (value: string) => void;
  handleSubmit: () => void;
  hasRecommendations: boolean;
  isLoading: boolean;
  handleDeleteAndFetch: () => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  isAnimating,
  handleCloseForm,
  section,
  sectionData,
  onSectionDataChange,
  handleSubmit,
  handleDeleteAndFetch,
  hasRecommendations,
  isLoading,
}) => {
  return (
    <div className={`form-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <button className="close-btn" onClick={handleCloseForm}>
        X
      </button>
      <span className="form-title">{section.title}</span>
      <aside style={{ display: 'flex' }}>
        <span className="form-subheading">{section.subheading}</span>
        {section.title === 'Categories' && (
          <span className="tooltip-container">
            <FaInfoCircle className="info-icon" />
            <div className="tooltip-text">
              Add categories related to your campaign, such as "technology,"
              "health," or "education." This will help us provide more relevant
              recommendations.
            </div>
          </span>
        )}
      </aside>
      <form>
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
          <div className="rec-btn-group">
            {hasRecommendations && (
              <Button
                // isLoading={isLoading}
                label={<FaArrowRotateLeft />}
                onClick={handleDeleteAndFetch}
                type="button"
              />
            )}

            <Button
              disabled={sectionData.length < 10}
              isLoading={isLoading}
              label={
                hasRecommendations
                  ? 'View Recommendations'
                  : 'Get Recommendations'
              }
              onClick={handleSubmit}
              type="button"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default CampaignForm;
