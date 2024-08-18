import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface RecommendationItemProps {
  recommendation: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
  recommendation,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipText = (recommendation: string) => {
    switch (recommendation) {
      case 'Improve readability':
        return 'Readability is key to engaging your audience. Complex or convoluted language can turn readers away. Simplify your copy, use shorter sentences, and ensure your message is clear and accessible.';
      case 'Adjust length to optimal range':
        return 'Optimal length ensures that your copy is concise yet informative. Too long, and you risk losing the reader’s attention; too short, and your message may be incomplete. Aim for a balance that maintains engagement.';
      case 'Optimize keyword density':
        return 'Keyword density impacts your copy’s SEO performance. While including relevant keywords is important, overusing them can harm readability and feel unnatural. Strike a balance to improve both SEO and user experience.';
      case 'Improve sentiment':
        return 'The sentiment of your copy affects how your audience perceives your message. Positive sentiment can boost engagement, while negative sentiment might discourage interaction. Adjust your tone to align with your goals.';
      default:
        return '';
    }
  };

  return (
    <main className="recommendation-item" style={{ position: 'relative' }}>
      <span>{recommendation}</span>
      <FaInfoCircle
        className="rec-icon"
        size={20}
        style={{ color: 'gold', marginLeft: '8px' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div className="tooltip" style={{ left: '-2px', top: '-1px' }}>
          {getTooltipText(recommendation)}
        </div>
      )}
    </main>
  );
};

export default RecommendationItem;
