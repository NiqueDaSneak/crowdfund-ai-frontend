import React, { useState, useEffect } from 'react';
import { getColorForGrade } from '../../utils/gradeColors';
import { getRecommendations } from '../../api/recommendationsAPI';
import RecommendationsList, { Recommendation } from '../RecommendationsList/RecommendationsList';

interface TabContentProps {
  title: string;
  content: React.ReactNode;
  grade: string;
  section: string; // New prop to identify the section
}

const TabContent: React.FC<TabContentProps> = ({ title, content, grade, section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false); // Loading state
  const gradeColor = getColorForGrade(grade);

  const handleGradeClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      const fetchRecommendations = async () => {
        setLoading(true); // Set loading to true when fetching
        const recs = await getRecommendations(section, grade);
        setRecommendations(recs);
        setLoading(false); // Set loading to false after fetching
      };
      fetchRecommendations();
    }
  }, [isExpanded, grade, section]);

  return (
    <div className="tab-content">
      <section className={`tab-header ${isExpanded ? 'expanded' : ''}`}>
        <div className="tab-header-main">
          <h3>{title}</h3>
          <span
            className="grade"
            onClick={handleGradeClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleGradeClick()}
            style={{ backgroundColor: gradeColor }}
          >
            {grade}
          </span>
        </div>
        {isExpanded && <RecommendationsList recommendations={recommendations} loading={loading} />}
      </section>
      <section className="tab-body">
        {content}
      </section>
    </div>
  );
};

export default TabContent;
