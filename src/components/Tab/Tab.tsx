import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getColorForGrade, getDarkerColorForGrade } from '../../utils/gradeColors'; // Import the color mapping functions

interface TabProps {
  tab: {
    id: number;
    name: string;
    path: string;
    grade: string;
  };
}

const Tab: React.FC<TabProps> = ({ tab }) => {
  const location = useLocation();
  const isActive = location.pathname === tab.path;
  const gradeColor = isActive ? getColorForGrade(tab.grade) : getDarkerColorForGrade(tab.grade);

  return (
    <Link to={tab.path} className="tab" style={{ backgroundColor: gradeColor }}>
      {tab.name}
    </Link>
  );
};

export default Tab;
