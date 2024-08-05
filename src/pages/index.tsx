import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { HeadFC, PageProps } from 'gatsby';
import '../components/index.scss';
import { tabsConfig, TabConfig } from '../config/tabConfig';
import BottomNav from '../components/BottomNav/BottomNav';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/heading" replace />} />
        {tabsConfig.map((tab: TabConfig) => (
          <Route key={tab.id} path={tab.path} element={tab.element} />
        ))}
      </Routes>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
