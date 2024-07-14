import React from 'react';
import Recommendation from '../Recommendation/Recommendation';

export interface Recommendation {
  text: string;
  met: boolean;
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({ recommendations }) => {
  return (
    <div className="recommendations-list">
      <span>Recommendations:</span>
      <section>
        {recommendations.map((rec, index) => (
          <Recommendation key={index} text={rec.text} met={rec.met} />
        ))}
      </section>
    </div>
  );
};

export default RecommendationsList;
