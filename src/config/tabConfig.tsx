// src/config/tabsConfig.ts
import React from "react"
import TabContent from "../components/TabContent/TabContent"

export interface TabConfig {
  id: number
  name: string
  path: string
  element: React.ReactNode
}

export const tabsConfig: TabConfig[] = [
  {
    id: 1,
    name: "Tab 1",
    path: "/tab1",
    element: <TabContent title="Tab 1 Title" content={<div>Content for Tab 1</div>} />
  },
  {
    id: 2,
    name: "Tab 2",
    path: "/tab2",
    element: <TabContent title="Tab 2 Title" content={<div>Content for Tab 2</div>} />
  },
]
