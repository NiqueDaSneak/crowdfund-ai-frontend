import React, { useState } from 'react';
import compass from '../images/compass.svg';
import Button from '../components/Button/Button';
import HelperSection from '../components/HelperSection/HelperSection';
import CampaignForm from '../components/CampaignForm/CampaignForm';
import CampaignOverview from '../components/CampaignOverview/CampaginOverview';

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

const CampaignPage = () => {
  const [openForm, setOpenForm] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionData, setSectionData] = useState<string[]>(['', '', '', '']); // Updated for 4 sections

  const handleOpenForm = (index: number) => {
    if (openForm !== null) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpenForm(index);
        setIsAnimating(false);
      }, 300); // Match this with the animation duration
    } else {
      setOpenForm(index);
    }
  };

  const handleCloseForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenForm(null);
      setIsAnimating(false);
    }, 300); // Match this with the animation duration
  };

  const handleChange = (index: number, value: string) => {
    const updatedData = [...sectionData];
    updatedData[index] = value;
    setSectionData(updatedData);
  };

  const handleSubmit = () => {
    const categories = sectionData[0];
    const formDataArray: FormData[] = sections
      .slice(1)
      .map((section, index) => ({
        dataType: section.title.toLowerCase(),
        dataBody: sectionData[section.id],
        categories,
      }));

    // Here you would send `formDataArray` to your API
    console.log('Data to send:', formDataArray);
  };

  const hasCategories = sectionData[0] !== ''; // Check if "Categories" section has data

  return (
    <main className="campaign-container">
      <header>
        <img className="logo" src={compass} alt="Compass Logo" />
        <span>Scout.ai</span>
      </header>

      <section>
        {openForm !== null ? (
          <CampaignForm
            isAnimating={isAnimating}
            handleCloseForm={handleCloseForm}
            section={sections[openForm]}
            sectionData={sectionData[openForm]}
            onSectionDataChange={(value) => handleChange(openForm, value)}
          />
        ) : sectionData.some((data) => data !== '') ? (
          <CampaignOverview sectionData={sectionData} sections={sections} />
        ) : (
          <HelperSection />
        )}
      </section>

      <section
        className={`form-toggles ${openForm !== null ? 'form-open' : ''}`}
      >
        {sections.map((section) =>
          openForm !== section.id ? (
            <Button
              onClick={() => handleOpenForm(section.id)}
              key={section.id}
              label={section.title}
              className={
                isAnimating && openForm === section.id ? 'fade-out' : ''
              }
              disabled={!hasCategories && section.id !== 0} // Disable other buttons if no Categories data
            />
          ) : null,
        )}
      </section>

      {/* You can add a submit button for the entire form
      {sectionData.some((data) => data !== '') && (
        <Button label="Submit Campaign" onClick={handleSubmit} />
      )} */}
    </main>
  );
};

export default CampaignPage;
