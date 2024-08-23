import { HeadFC, navigate, PageProps } from 'gatsby';
import React from 'react';
import Button from '../components/Button/Button';
import { FaInfoCircle } from 'react-icons/fa'; // Import the icon
import insightCompass from '../images/insight-compass.svg';
import launchVector from '../images/launch-vector.svg';
import rewardArchitect from '../images/reward-architect.svg';
import signalRelay from '../images/signal-relay.svg';
import backerIntel from '../images/backer-intel.svg';
import creativeForge from '../images/creative-forge.svg';
import insightCompassBg from '../images/compass-bg.jpg';
import launchVectorBg from '../images/launch-vector-bg.jpg';
import rewardArchitectBg from '../images/reward-architect-bg.jpg';
import signalRelayBg from '../images/signal-relay-bg.jpg';
import backerIntelBg from '../images/backer-intel-bg.jpg';
import creativeForgeBg from '../images/creative-forge-bg.jpg';

const productsConfig = [
  {
    id: 1,
    label: 'Insight Compass',
    backgroundImage: `url(${insightCompassBg})`,
    backgroundImageStyles: { backgroundPosition: 'center' },
    iconSrc: insightCompass,
    disabled: false,
    buttonText: 'Go',
    onClick: () => navigate('/campaign'),
    tooltipText:
      "Insight Compass guides your campaign's success with AI-driven content optimization, ensuring every word aligns with your goals.",
  },
  {
    id: 2,
    label: 'Launch Vector',
    backgroundImage: `url(${launchVectorBg})`,
    iconSrc: launchVector,
    disabled: true,
    buttonText: 'Coming Soon',
    tooltipText:
      'Launch Vector propels your campaign with precision, providing strategic launch insights to maximize impact from day one.',
  },
  {
    id: 3,
    label: 'Reward Architect',
    backgroundImage: `url(${rewardArchitectBg})`,
    iconSrc: rewardArchitect,
    disabled: true,
    buttonText: 'Coming Soon',
    tooltipText:
      "Reward Architect designs compelling reward tiers, tailored to captivate backers and boost your campaign's funding potential.",
  },
  {
    id: 4,
    label: 'Signal Relay',
    backgroundImage: `url(${signalRelayBg})`,
    iconSrc: signalRelay,
    disabled: true,
    buttonText: 'Coming Soon',
    tooltipText:
      "Signal Relay amplifies your campaign's message, crafting press releases that resonate and reach your target audience.",
  },
  {
    id: 5,
    label: 'Creative Forge',
    backgroundImage: `url(${creativeForgeBg})`,
    iconSrc: creativeForge,
    disabled: true,
    buttonText: 'Coming Soon',
    tooltipText:
      "Creative Forge brings your campaign to life with custom AI-generated visuals, from GIFs to videos, enhancing your campaign's appeal.",
  },
  {
    id: 6,
    label: 'Backer Intelligence',
    backgroundImage: `url(${backerIntelBg})`,
    iconSrc: backerIntel,
    disabled: true,
    buttonText: 'Coming Soon',
    tooltipText:
      'Backer Intelligence analyzes supporter data, offering deep insights to refine your strategy and connect with your audience.',
  },
];

const ProductOverviewPage = (props: PageProps) => {
  return (
    <div className="products-grid">
      <header className="header">
        <span className="header-title">Products</span>
      </header>
      <div className="products-container">
        {productsConfig.map((product) => (
          <div
            key={product.id}
            className="box"
            style={{
              backgroundImage: product.backgroundImage,
              ...product.backgroundImageStyles,
            }}
          >
            <div className="box-items">
              <img className="icon" src={product.iconSrc} />
              <div className="label">
                {product.label}
                <FaInfoCircle className="info-icon" />
                <span className="tooltip">{product.tooltipText}</span>
              </div>
              <Button
                onClick={product.onClick}
                disabled={product.disabled}
                label={product.buttonText}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverviewPage;

export const Head: HeadFC = () => <title>Scout.ai: Products</title>;
