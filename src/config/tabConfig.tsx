import React from 'react';
import TabContent from '../components/TabContent/TabContent';
import { generateUniqueLoremIpsum } from '../utils/loremIpsum';

export interface TabConfig {
  id: number;
  name: string;
  path: string;
  element: React.ReactNode;
}

export const tabsConfig: TabConfig[] = [
  {
    id: 1,
    name: 'Section 1',
    path: '/section1',
    element: <TabContent grade="B+" title="Section 1 of campaign" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 2,
    name: 'Section 2',
    path: '/section2',
    element: <TabContent grade="C" title="Section 2 of campaign" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 3,
    name: 'Section 3',
    path: '/section3',
    element: <TabContent grade="C" title="Section 3 of campaign" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 4,
    name: 'Section 4',
    path: '/section4',
    element: <TabContent grade="C" title="Section 4 of campaign" content={generateUniqueLoremIpsum()} />,
  },
  {
    id: 5,
    name: 'Section 5',
    path: '/section5',
    element: <TabContent grade="C" title="Section 5 of campaign" content={generateUniqueLoremIpsum()} />,
  },
];
