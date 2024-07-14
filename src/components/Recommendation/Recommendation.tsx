import React from 'react';

interface RecommendationProps {
  text: string;
  met: boolean;
}

const Recommendation: React.FC<RecommendationProps> = ({ text, met }) => {
  return (
    <div className="recommendation">
      <span>{text}</span>
      <div className="recommendation-status">
        <div className={`status-box ${met ? 'met' : 'not-met'}`}></div>
      </div>
    </div>
  );
};

export default Recommendation;
