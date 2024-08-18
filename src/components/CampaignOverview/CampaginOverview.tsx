import React from 'react';
import { Section } from '../../pages/campaign';

interface CampaignOverviewProps {
  sections: Section[];
  sectionData: string[];
  recommendations: { [key: string]: string[] };
}

const CampaignOverview: React.FC<CampaignOverviewProps> = ({
  sections,
  sectionData,
  recommendations,
}) => {
  return (
    <>
      <p className="header" style={{}}>
        Your Campaign
      </p>
      <div className="campaign-overview">
        {sections.map((section, index) => {
          const recCount =
            recommendations[section.title.toLowerCase()]?.length || 0;

          return (
            <div key={section.id} className="section-overview">
              <span className="section-title">{section.title}</span>
              <span className="recommendation-count">
                Recommendations: <strong>{recCount}</strong>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CampaignOverview;
