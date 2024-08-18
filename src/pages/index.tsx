import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { HeadFC, PageProps } from 'gatsby';
import '../components/index.scss';
import compass from '../images/compass.svg';
import AnimatedChevron from '../components/AnimatedChevron/AnimatedChevron';
import RotatingActionButton from '../components/RotatingActionButton/RotatingActionButton';
import useIsVisible from '../utils/useIsVisible';
import DemoLoginModal from '../components/DemoLoginModal/DemoLoginModal';

const IndexPage = (props: PageProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterVisible = useIsVisible(footerRef);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && <DemoLoginModal />}

      <RotatingActionButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <header className={`home-header ${isScrolled ? 'scrolled' : ''} `}>
        <section className="logo-and-name">
          <img
            className={`logo ${isScrolled ? 'scrolled' : ''} ${isFooterVisible ? 'hidden' : ''}`}
            src={compass}
            alt="Compass Logo"
          />
        </section>
        <section className="lat-long">
          <span>φ 37.3894° N</span>
          <span>λ 122.0819° W</span>
        </section>
      </header>

      <section className="home-bg">
        <div className="above-the-fold">
          <div className="hero-text">
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
        <main className="sales-copy">
          <p>
            Our mission is to empower entrepreneurs and innovators by harnessing
            the power of advanced artificial intelligence and machine learning
            to maximize the success of their crowdfunding campaigns. We strive
            to provide comprehensive, data-driven insights and automated
            solutions that transform campaign creation and execution, ensuring
            that every great idea has the best possible chance to flourish and
            make a positive impact on the world.
          </p>
          <p>
            Our vision is to become the leading platform for crowdfunding
            success, recognized for our ability to blend cutting-edge AI
            technology with deep market insights. We aspire to create an
            ecosystem where creativity and innovation thrive, enabling creators
            to achieve their goals and bring transformative products to market.
            By continuously advancing our technology and expanding our reach, we
            aim to revolutionize the crowdfunding landscape, making it more
            efficient, accessible, and successful for all.
          </p>
        </main>
        <footer className="footer" ref={footerRef}>
          <img
            className={`logo ${isFooterVisible ? 'show' : ''}`}
            src={compass}
            alt="Footer Compass Logo"
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
          <span className="company-name">Scout.ai Inc. 2024</span>
        </footer>
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Scout.ai</title>;
