import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";
import '../components/index.scss';
import BottomNav from "../components/BottomNav/BottomNav";
import { tabsConfig, TabConfig } from "../config/tabConfig";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Routes>
      <Route path="/" element={<Navigate to="/overview" replace />} />
        {tabsConfig.map((tab: TabConfig) => (
          <Route key={tab.id} path={tab.path} element={tab.element} />
        ))}
      </Routes>
      <BottomNav />
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
