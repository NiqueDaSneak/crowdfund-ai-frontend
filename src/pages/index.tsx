import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { HeadFC, PageProps } from 'gatsby';
import '../components/index.scss';
import AnimatedChevron from '../components/AnimatedChevron/AnimatedChevron';
import RotatingActionButton from '../components/RotatingActionButton/RotatingActionButton';
import useIsVisible from '../utils/useIsVisible';
import DemoLoginModal from '../components/DemoLoginModal/DemoLoginModal';
import PageHeader from '../components/PageHeader/PageHeader';

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

  const salesCopyConfig = [
    {
      copy: 'You have an idea!',
      icon: '💡',
    },
    {
      copy: "Our suite of AI tools is like a rocketship for your crowdfunding project; We train our AI on campaigns that were already very successful, and ones that weren't so you know what not to do!",
      icon: '🚀',
    },
    {
      copy: 'You sit at the helm as we help you from launch to the moon!',
      icon: '🌖',
    },
  ];

  return (
    <>
      {isMenuOpen && <DemoLoginModal />}

      <RotatingActionButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <PageHeader />
      <section className="home-bg">
        <div className="above-the-fold">
          <div className="hero-text">
            <span className="hero-title">Scout</span>
            <span className="subscript">.ai</span>
            <div className="blurred">
              <p className="subtitle">
                Helping start and run your crowdfunding campiagn; from launch to
                the moon!
              </p>
            </div>
          </div>
          <div className={`${isFooterVisible ? 'hidden' : ''}`}>
            <AnimatedChevron />
          </div>
        </div>

        <main className="sales-copy-grid">
          {salesCopyConfig.map((item, index) => (
            <div key={index} className="sales-copy-item">
              <div className="icon">{item.icon} </div>
              <p className="sales-copy-text">{item.copy}</p>
            </div>
          ))}
        </main>
        <footer className="footer" ref={footerRef}>
          {/* <img
            className={`logo ${isFooterVisible ? 'show' : ''}`}
            src={logo}
            alt="Footer Compass Logo"
          /> */}
          <span style={{ fontSize: '40px' }}>🚀</span>
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
