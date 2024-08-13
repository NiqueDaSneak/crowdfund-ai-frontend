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
    name: 'Heading',
    path: '/heading',
    grade: 'D',
    element: (
      <TabContent section="heading" grade="D" title="Campaign Heading" />
    ),
  },
  {
    id: 2,
    name: 'Subheading',
    path: '/subheading',
    grade: 'B+',
    element: (
      <TabContent section="subheading" grade="B+" title="Campaign Subheading" />
    ),
  },
  {
    id: 3,
    name: 'Story',
    path: '/story',
    grade: 'B+',
    element: <TabContent section="story" grade="B+" title="Campaign Story" />,
  },
];
