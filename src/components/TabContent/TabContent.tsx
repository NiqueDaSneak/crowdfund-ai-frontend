import React, { useState } from 'react';
import Modal from '../Modal/Modal'; // Import the Modal component

interface TabContentProps {
  title: string;
  content: React.ReactNode;
  grade: string;
}

const TabContent: React.FC<TabContentProps> = ({ title, content, grade }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGradeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tab-content">
      <section className="tab-header">
        <h3>{title}</h3>
        <span
          className="grade"
          onClick={handleGradeClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleGradeClick()}
        >
          {grade}
        </span>
      </section>
      <section className="tab-body">
        {content}
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Details for ${title}`}>
        <p>Additional content and details can go here.</p>
      </Modal>
    </div>
  );
};

export default TabContent;
