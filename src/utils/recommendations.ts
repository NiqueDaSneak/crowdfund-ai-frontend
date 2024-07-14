interface Recommendation {
    text: string;
    met: boolean;
  }
  
  export const getRecommendationsForGrade = (grade: string): Recommendation[] => {
    const recommendations: { [key: string]: Recommendation[] } = {
      A: [],
      B: [
        { text: 'Add more visuals to your campaign.', met: true },
        { text: 'Improve the project description.', met: false },
      ],
      C: [
        { text: 'Engage more with your audience.', met: true },
        { text: 'Your reward tiers are well-structured.', met: true },
        { text: 'Consider enhancing your video presentation.', met: false },
      ],
      D: [
        { text: 'Add more visuals to your campaign.', met: false },
        { text: 'Improve the project description.', met: false },
        { text: 'Engage more with your audience.', met: false },
        { text: 'Consider enhancing your video presentation.', met: false },
      ],
      F: [
        { text: 'Add more visuals to your campaign.', met: false },
        { text: 'Improve the project description.', met: false },
        { text: 'Engage more with your audience.', met: false },
        { text: 'Consider enhancing your video presentation.', met: false },
        { text: 'Reevaluate your funding goals.', met: false },
        { text: 'Strengthen your social media presence.', met: false },
      ],
    };
  
    return recommendations[grade] || [];
  };
  