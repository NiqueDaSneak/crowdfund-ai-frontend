import React, { useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import compass from '../images/compass.svg';
import Button from '../components/Button/Button';
import HelperSection from '../components/HelperSection/HelperSection';
import CampaignForm from '../components/CampaignForm/CampaignForm';
import CampaignOverview from '../components/CampaignOverview/CampaginOverview';
import { processContent } from '../api/recommendationsAPI';
import RecommendationsModal from '../components/RecommendationsModal/RecommendationsModal';

export interface Section {
  id: number;
  title: string;
  subheading: string;
  placeholder: string;
  maxLength: number;
}

const sections: Section[] = [
  {
    id: 0,
    title: 'Categories',
    subheading: 'Select categories for your campaign.',
    placeholder: 'Example: product, feature, idea, emotion',
    maxLength: 100,
  },
  {
    id: 1,
    title: 'Heading',
    subheading: 'Enter the main heading for your campaign.',
    placeholder: 'Enter your campaign heading...',
    maxLength: 60,
  },
  {
    id: 2,
    title: 'Subheading',
    subheading: 'Enter the subheading for your campaign.',
    placeholder: 'Enter your campaign subheading...',
    maxLength: 135,
  },
  {
    id: 3,
    title: 'Story',
    subheading: 'Tell the story of your campaign.',
    placeholder: 'Enter your campaign story...',
    maxLength: 600,
  },
];

interface FormData {
  dataType: string;
  dataBody: string;
  categories: string;
}

interface RecommendationsState {
  [key: string]: string[]; // key is dataType, value is array of recommendations
}

const CampaignPage = (props: PageProps) => {
  const [openForm, setOpenForm] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionData, setSectionData] = useState<string[]>(['', '', '', '']);
  const [recommendations, setRecommendations] = useState<RecommendationsState>(
    {},
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleOpenForm = (index: number) => {
    if (openForm !== null) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpenForm(index);
        setIsAnimating(false);
      }, 300);
    } else {
      setOpenForm(index);
    }
  };

  const handleCloseForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenForm(null);
      setIsAnimating(false);
    }, 300);
  };

  const handleChange = (index: number, value: string) => {
    const updatedData = [...sectionData];
    updatedData[index] = value;
    setSectionData(updatedData);
  };
  const handleSubmit = async (whatSection: string) => {
    setIsLoading(true); // Start loading

    try {
      const categories = sectionData[0];
      const sectionIndex = sections.findIndex(
        (section) => section.title.toLowerCase() === whatSection,
      );

      if (sectionIndex === -1) {
        console.error('Invalid section specified');
        return;
      }

      const dataType = sections[sectionIndex].title.toLowerCase();
      const dataBody = sectionData[sectionIndex];
      console.log('Submitting section:', whatSection, 'as', dataType);
      const response = await processContent(dataType, dataBody, categories);
      console.log({ response });
      setRecommendations((prev) => ({
        ...prev,
        [dataType]: response.recommendations,
      }));
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting content:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleViewRecommendations = () => {
    setIsModalOpen(true);
  };

  const hasCategories = sectionData[0] !== '';
  const currentDataType =
    openForm !== null ? sections[openForm].title.toLowerCase() : '';

  return (
    <main className="campaign-container">
      <header>
        <img className="logo" src={compass} alt="Compass Logo" />
        <span>Scout.ai</span>
      </header>

      <section>
        {openForm !== null ? (
          <CampaignForm
            isLoading={isLoading}
            isAnimating={isAnimating}
            handleCloseForm={handleCloseForm}
            section={sections[openForm]}
            sectionData={sectionData[openForm]}
            onSectionDataChange={(value) => handleChange(openForm, value)}
            handleSubmit={() => {
              if (recommendations[currentDataType]) {
                handleViewRecommendations();
              } else {
                handleSubmit(currentDataType);
              }
            }}
            hasRecommendations={!!recommendations[currentDataType]}
          />
        ) : sectionData.some((data) => data !== '') ? (
          <CampaignOverview
            sectionData={sectionData}
            sections={sections}
            recommendations={recommendations}
          />
        ) : (
          <HelperSection />
        )}
      </section>

      <section
        className={`form-toggles ${openForm !== null ? 'form-open' : ''}`}
      >
        {sections.map((section) => {
          const hasData = sectionData[section.id] !== '';
          return openForm !== section.id ? (
            <div className="button-wrapper" style={{ position: 'relative' }}>
              {hasData && (
                <div
                  className={`highlight-line ${recommendations[section.title.toLowerCase()] ? 'gold' : ''}`}
                ></div>
              )}
              <Button
                key={section.id}
                label={section.title}
                onClick={() => handleOpenForm(section.id)}
                className={
                  isAnimating && openForm === section.id ? 'fade-out' : ''
                }
                disabled={!hasCategories && section.id !== 0}
              />
            </div>
          ) : null;
        })}
      </section>

      {isModalOpen && (
        <RecommendationsModal
          recommendations={recommendations[currentDataType]}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default CampaignPage;
export const Head: HeadFC = () => <title>Scout.ai: Insight Compass</title>;
