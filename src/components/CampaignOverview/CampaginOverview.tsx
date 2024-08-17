import React, { useState } from 'react';
import { Section } from '../../pages/campaign';

interface CampaignOverviewProps {
  sections: Section[];
  sectionData: string[];
}

const CampaignOverview: React.FC<CampaignOverviewProps> = ({
  sections,
  sectionData,
}) => {
  const filledSections = sections.filter((_, index) => sectionData[index]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="campaign-overview">
      {/* <div className="stacked-card-container">
        {filledSections.map((section, index) => (
          <div
            key={section.id}
            className={`campaign-card ${activeIndex === index ? 'active' : ''}`}
            style={{
              zIndex: filledSections.length - index,
            }}
          >
            <h3>{section.title}</h3>
            <div className="card-content">
              <p>{sectionData[sections.indexOf(section)]}</p>
            </div>
          </div>
        ))}
      </div> */}
      {/* {filledSections.length > 1 && (
        <div className="dots">
          {filledSections.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default CampaignOverview;
