import React, { useState } from 'react';
import compass from '../images/compass.svg';
import Button from '../components/Button/Button';

const CampaignPage = () => {
  const [openForm, setOpenForm] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousForm, setPreviousForm] = useState<number | null>(null);

  const handleOpenForm = (index: number) => {
    if (openForm !== null) {
      setIsAnimating(true);
      setPreviousForm(openForm);
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

  return (
    <main className="campaign-container">
      <header>
        <img className="logo" src={compass} alt="Compass Logo" />
        <span>Scout.ai</span>
      </header>

      <section>
        {openForm !== null && (
          <div
            className={`form-container ${isAnimating ? 'fade-out' : 'fade-in'}`}
          >
            <button className="close-btn" onClick={handleCloseForm}>
              X
            </button>
            <h2>Form {openForm + 1}</h2>
            <p>This is the form content for button {openForm + 1}.</p>
            <form>
              <textarea
                className="form-input"
                placeholder="Enter code here..."
              />
              <Button label="Submit" type="submit" />
            </form>
          </div>
        )}
      </section>

      <section className="form-toggles">
        {[0, 1, 2].map((index) =>
          openForm !== index ? (
            <Button
              onClick={() => handleOpenForm(index)}
              key={index}
              label={`Button ${index + 1}`}
              className={isAnimating && openForm === index ? 'fade-out' : ''}
            />
          ) : null,
        )}
      </section>
    </main>
  );
};

export default CampaignPage;
