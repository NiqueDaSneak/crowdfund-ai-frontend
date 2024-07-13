// src/components/TabContent.tsx
import React from "react"

interface TabContentProps {
  title: string
  content: React.ReactNode
}

const TabContent: React.FC<TabContentProps> = ({ title, content }) => {
  return (
   <div style={{display: 'grid'}}>
      <section style={{backgroundColor: 'green', width: '100vw'}}>
        <h1>{title}</h1>
      </section>
      <section style={{backgroundColor: 'blue', width: '100vw', }}>
        {content}
      </section>
   </div>
  )
}

export default TabContent
