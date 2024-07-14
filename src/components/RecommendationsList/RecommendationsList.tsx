import React from 'react';
import Recommendation from '../Recommendation/Recommendation';

export interface Recommendation {
  text: string;
  met: boolean;
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
  loading: boolean; // New loading prop
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({ recommendations, loading }) => {
  if (loading) {
    return (
      <div className="recommendations-list">
        <span>Recommendations:</span>
        <section>
          <div className="spinner"></div> {/* Spinner for loading state */}
        </section>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <span>Recommendations:</span>
        <section>
          <p>No recommendations available.</p> {/* Message for no recommendations */}
        </section>
      </div>
    );
  }

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
