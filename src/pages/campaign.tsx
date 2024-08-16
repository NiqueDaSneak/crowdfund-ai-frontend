import React, { useState } from 'react';

const CampaignPage = () => {
  const [openForm, setOpenForm] = useState<number | null>(null);

  const handleOpenForm = (index: number) => {
    setOpenForm(index);
  };

  const handleCloseForm = () => {
    setOpenForm(null);
  };

  return (
    <main
      style={{
        display: 'grid',
        gridTemplateRows: 'auto auto',
        height: '100dvh',
      }}
    >
      <section style={{ backgroundColor: 'purple', position: 'relative' }}>
        {openForm !== null && (
          <div
            style={{
              color: 'black',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              borderRadius: '10px',
              margin: '10px',
              padding: '20px',
              zIndex: 1,
              animation: 'slideUp 0.5s ease-out',
            }}
          >
            <button
              onClick={handleCloseForm}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              X
            </button>
            <h2>Form {openForm + 1}</h2>
            <p>This is the form content for button {openForm + 1}.</p>
          </div>
        )}
      </section>

      <section
        style={{
          backgroundColor: 'pink',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
        }}
      >
        {[0, 1, 2].map((index) =>
          openForm !== index ? (
            <div
              key={index}
              onClick={() => handleOpenForm(index)}
              style={{
                backgroundColor: 'red',
                width: 'fit-content',
                padding: '10px',
                borderRadius: '10px',
                marginBottom: '10px',
                cursor: 'pointer',
              }}
            >
              <span>Button {index + 1}</span>
            </div>
          ) : null,
        )}
      </section>
    </main>
  );
};

export default CampaignPage;
