import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import compass from '../../images/compass.svg';
import AnimatedChevron from '../../components/AnimatedChevron/AnimatedChevron';
import RotatingActionButton from '../../components/RotatingActionButton/RotatingActionButton';
import useIsVisible from '../../utils/useIsVisible';

const HomePage = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterVisible = useIsVisible(footerRef);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <RotatingActionButton />
      <header className={`home-header ${isScrolled ? 'scrolled' : ''} `}>
        <section className="logo-and-name">
          <img
            className={`logo ${isScrolled ? 'scrolled' : ''} ${isFooterVisible ? 'hidden' : ''}`}
            src={compass}
          />
        </section>
        <section className="lat-long">
          <span>φ 37.3894° N</span>
          <span>λ 122.0819° W</span>
        </section>
      </header>

      <section className="home-bg">
        <div className="above-the-fold">
          <div className="hero-text ">
            <span className="hero-title">Scout</span>
            <span className="subscript">.ai</span>
            <div className="blurred">
              <span className="subtitle">
                Crowdfunding just got a whole lot easier.
              </span>
            </div>
          </div>
          <div className={`${isFooterVisible ? 'hidden' : ''}`}>
            <AnimatedChevron />
          </div>
        </div>
        <main className="sales-copy" style={{}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
            velit consequat, aliquam nisi sit amet, venenatis tellus. Etiam at
            lorem aliquet, sodales diam volutpat, tincidunt erat. Quisque
            efficitur cursus maximus. Sed ut risus consequat, sodales enim sed,
            congue purus.
          </p>
          <p>
            Mauris lectus nulla, sagittis gravida orci vitae, gravida tincidunt
            massa. Duis mattis eu lacus sit amet volutpat. Etiam lobortis risus
            in dui gravida, nec malesuada quam malesuada.
          </p>
        </main>
        <footer className="footer" ref={footerRef}>
          <img
            className={`logo ${isFooterVisible ? 'show' : ''}`}
            src={compass}
          />
          <div className={`lat-long ${isFooterVisible ? 'show' : ''}`}>
            <span>φ 39.1031° N</span>
            <span>λ 84.5120° W</span>
          </div>
          <span>|</span>
          <div className={`lat-long ${isFooterVisible ? 'show' : ''}`}>
            <span>φ 27.9506° N</span>
            <span>λ 82.4572° W</span>
          </div>
          <span>Scout.ai Inc. 2024</span>
        </footer>
      </section>
    </>
  );
};

export default HomePage;

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 );
