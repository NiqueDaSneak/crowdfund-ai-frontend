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
  section: string;
}

const TabContent: React.FC<TabContentProps> = ({ title, grade, section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [sectionData, setSectionData] = useState('');
  const [result, setResult] = useState<any>(null);
  const [categories, setCategories] = useState('');
  const gradeColor = getColorForGrade(grade);

  const handleGradeClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      const fetchRecommendations = async () => {
        setLoading(true);
        const recs = await getRecommendations(section, grade);
        setRecommendations(recs);
        setLoading(false);
      };
      fetchRecommendations();
    }
  }, [isExpanded, grade, section]);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('a working click');
    e.preventDefault();
    try {
      console.log(`Submitted value: ${sectionData}`);
      const response = await processContent(section, sectionData, categories);
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
          <input
            className="text-box util-mb-med"
            placeholder="...a category? e.g. health, game, etc"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
          <textarea
            className={classNames('text-box', {
              extended: section === 'subheading',
              full: section === 'story',
            })}
            value={sectionData}
            onChange={(e) => setSectionData(e.target.value)}
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
