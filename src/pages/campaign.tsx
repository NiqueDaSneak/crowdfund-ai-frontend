import React, { useState } from 'react';
import compass from '../images/compass.svg';
import Button from '../components/Button/Button';
import HelperSection from '../components/HelperSection/HelperSection';

const sections = [
  {
    id: 0,
    title: 'Heading',
    subheading: 'Enter the main heading for your campaign.',
    placeholder: 'Enter your campaign heading...',
    maxLength: 60,
  },
  {
    id: 1,
    title: 'Subheading',
    subheading: 'Enter the subheading for your campaign.',
    placeholder: 'Enter your campaign subheading...',
    maxLength: 135,
  },
  {
    id: 2,
    title: 'Story',
    subheading: 'Tell the story of your campaign.',
    placeholder: 'Enter your campaign story...',
    maxLength: 600,
  },
];

const CampaignPage = () => {
  const [openForm, setOpenForm] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionData, setSectionData] = useState<string[]>(['', '', '']); // Array to hold input data for each section

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

  const hasData = sectionData.some((data) => data !== ''); // Check if any section has data

  return (
    <main className="campaign-container">
      <header>
        <img className="logo" src={compass} alt="Compass Logo" />
        <span>Scout.ai</span>
      </header>

      <section>
        {openForm !== null ? (
          <div
            className={`form-container ${isAnimating ? 'fade-out' : 'fade-in'}`}
          >
            <button className="close-btn" onClick={handleCloseForm}>
              X
            </button>
            <span className="form-title">{sections[openForm].title}</span>
            <span className="form-subheading">
              {sections[openForm].subheading}
            </span>
            <form>
              <textarea
                maxLength={sections[openForm].maxLength}
                className="form-input"
                placeholder={sections[openForm].placeholder}
                value={sectionData[openForm]}
                onChange={(e) => handleChange(openForm, e.target.value)}
              />
              <div className="char-counter">
                {sectionData[openForm].length}/{sections[openForm].maxLength}{' '}
                characters
              </div>
              <Button label="Submit" type="submit" />
            </form>
          </div>
        ) : hasData ? (
          <div className="campaign-overview">
            {sections.map(
              (section, index) =>
                sectionData[index] && (
                  <div key={section.id} className="campaign-card">
                    <h3>{section.title}</h3>
                    <p>{sectionData[index]}</p>
                  </div>
                ),
            )}
          </div>
        ) : (
          <HelperSection />
        )}
      </section>

      <section className="form-toggles">
        {sections.map((section) =>
          openForm !== section.id ? (
            <Button
              onClick={() => handleOpenForm(section.id)}
              key={section.id}
              label={section.title}
              className={
                isAnimating && openForm === section.id ? 'fade-out' : ''
              }
            />
          ) : null,
        )}
      </section>
    </main>
  );
};

export default CampaignPage;
