import React from 'react';
import { tabsConfig, TabConfig } from '../../config/tabConfig';
import Tab from '../Tab/Tab';

const BottomNav: React.FC = () => {
  return (
    <div className="bottom-nav">
      {tabsConfig.map((tab: TabConfig) => (
        <Tab key={tab.id} tab={tab} />
      ))}
    </div>
  );
};

export default BottomNav;
