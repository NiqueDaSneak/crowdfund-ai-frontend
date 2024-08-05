import React, { useState, useEffect } from 'react';
import { getColorForGrade } from '../../utils/gradeColors';
import {
  getRecommendations,
  processContent,
} from '../../api/recommendationsAPI';
import RecommendationsList, {
  Recommendation,
} from '../RecommendationsList/RecommendationsList';
import BottomNav from '../BottomNav/BottomNav';
import classNames from 'classnames';

interface TabContentProps {
  title: string;
  grade: string;
  section: string; // New prop to identify the section
}

const TabContent: React.FC<TabContentProps> = ({ title, grade, section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [inputValue, setInputValue] = useState(''); // Input state
  const [result, setResult] = useState<any>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(`Submitted value: ${inputValue}`);
      const response = await processContent(section, inputValue);
      console.log('Received response:', response);
      setResult(response);
    } catch (error) {
      console.error('Error processing content:', error);
    }
  };

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
        {isExpanded && (
          <RecommendationsList
            recommendations={recommendations}
            loading={loading}
          />
        )}
      </section>
      <section>
        <form onSubmit={handleSubmit} className="input-form">
          <textarea
            className={classNames('text-box', {
              extended: section === 'subheading',
              full: section === 'story',
            })}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={
              section === 'title' ? 60 : section === 'subheading' ? 135 : 999
            }
            minLength={20}
            placeholder={`Enter your project ${section}`}
            required
          />
          <input
            className="get-prediction"
            style={{ fontSize: '16pt', height: '30px', width: '100%' }}
            type="submit"
            value="Submit"
          />
        </form>
      </section>
      <BottomNav />
    </div>
  );
};

export default TabContent;
