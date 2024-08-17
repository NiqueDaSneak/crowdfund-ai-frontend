import React, { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import RecommendationItem from '../RecommendationItem/RecommendationItem';
import Button from '../Button/Button';

interface RecommendationsModalProps {
  recommendations: string[];
  onClose: () => void;
}

const RecommendationsModal: React.FC<RecommendationsModalProps> = ({
  recommendations,
  onClose,
}) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const blurTimeout = setTimeout(() => {
      setIsBlurred(true);
    }, 300); // Delay to start blur after slideUp animation (matching the slideUp duration)

    return () => clearTimeout(blurTimeout); // Clean up timeout if modal unmounts
  }, []);

  return (
    <main className={`rec-modal ${isBlurred ? 'blurred' : ''}`}>
      <section className="rec-modal-content">
        <header className="helper-title">
          <span>Recommendations</span>
          <FaLightbulb className="helper-icon" />
        </header>
        <section className="recommendations-list">
          {recommendations.map((rec, index) => (
            <RecommendationItem key={index} recommendation={rec} />
          ))}
        </section>
        <Button
          style={{ width: '100%', marginTop: '40px', backgroundColor: 'red' }}
          label="Go Back"
          onClick={onClose}
        />
      </section>
    </main>
  );
};

export default RecommendationsModal;
