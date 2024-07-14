import React from 'react';
import TabContent from '../components/TabContent/TabContent';
import { generateUniqueLoremIpsum } from '../utils/loremIpsum';

export interface TabConfig {
  id: number;
  name: string;
  path: string;
  grade: string;
  element: React.ReactNode;
}

export const tabsConfig: TabConfig[] = [
  {
    id: 1,
    name: 'Project Overview',
    path: '/overview',
    grade: 'A',
    element: <TabContent grade="A" title="Project Overview" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 2,
    name: 'Campaign Story',
    path: '/story',
    grade: 'B+',
    element: <TabContent grade="B+" title="Campaign Story" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 3,
    name: 'Rewards',
    path: '/rewards',
    grade: 'C',
    element: <TabContent grade="C" title="Rewards" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 4,
    name: 'Budget and Funding',
    path: '/budget',
    grade: 'B',
    element: <TabContent grade="B" title="Budget and Funding" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 5,
    name: 'Risks and Challenges',
    path: '/risks',
    grade: 'B-',
    element: <TabContent grade="B-" title="Risks and Challenges" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 6,
    name: 'Updates',
    path: '/updates',
    grade: 'C+',
    element: <TabContent grade="C+" title="Updates" content={generateUniqueLoremIpsum()} />,
  },
];
