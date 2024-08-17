import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface RecommendationItemProps {
  recommendation: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
  recommendation,
}) => {
  return (
    <main className="recommendation-item">
      <span>{recommendation}</span>
      <FaInfoCircle size={20} style={{ color: 'blue' }} />
    </main>
  );
};

export default RecommendationItem;
