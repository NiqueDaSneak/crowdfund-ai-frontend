// src/components/Tab.js
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { TabConfig } from "../../config/tabConfig"

interface TabProps {
    tab: TabConfig
  }
  const Tab: React.FC<TabProps> = ({ tab }) => {
    const location = useLocation()
  const isActive = location.pathname === tab.path

  return (
    <Link to={tab.path} style={{textAlign: 'center', fontSize: '10pt', padding: '10px', color: isActive ? 'white' : 'black', backgroundColor: isActive ? 'blue' : 'transparent' }}>
      {tab.name}
    </Link>
  )
}

export default Tab
