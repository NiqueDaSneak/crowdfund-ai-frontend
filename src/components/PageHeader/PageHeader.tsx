import React from 'react';

const PageHeader = () => {
  const text = 1;
  return (
    <header className={`home-header`}>
      <section className="logo-and-name">
        <span style={{ fontSize: '40px' }}>🚀</span>
      </section>
      <section className="lat-long">
        <span>φ 37.3894° N</span>
        <span>λ 122.0819° W</span>
      </section>
    </header>
  );
};

export default PageHeader;
