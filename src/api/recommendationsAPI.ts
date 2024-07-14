interface Recommendation {
    text: string;
    met: boolean;
  }
  
  const fakeRecommendations: { [key: string]: { [key: string]: Recommendation[] } } = {
    "project-overview": {
      A: [],
      "A-": [{ text: "Consider minor adjustments to your project summary.", met: true }],
      "B+": [{ text: "Highlight key achievements and milestones.", met: true }],
      B: [
        { text: "Provide more details on project scope.", met: true },
        { text: "Include testimonials or quotes.", met: false },
      ],
      "B-": [
        { text: "Clarify your project's main objectives.", met: false },
        { text: "Provide more visuals.", met: true },
      ],
      C: [
        { text: "Enhance your project summary with specific details.", met: false },
        { text: "Include more visuals.", met: false },
      ],
      "C-": [
        { text: "Rework the project overview section.", met: false },
        { text: "Add visuals and detailed descriptions.", met: false },
      ],
      D: [
        { text: "The project overview needs significant improvements.", met: false },
        { text: "Add a clear and concise project summary.", met: false },
      ],
      "D-": [
        { text: "Major overhaul needed for project overview.", met: false },
        { text: "Include key project details and objectives.", met: false },
      ],
      F: [
        { text: "Rewrite the project overview entirely.", met: false },
        { text: "Include key project details and objectives.", met: false },
      ],
    },
    "campaign-story": {
      A: [],
      "A-": [{ text: "Minor enhancements to narrative flow.", met: true }],
      "B+": [{ text: "Emphasize unique aspects of your story.", met: true }],
      B: [
        { text: "Add more personal anecdotes.", met: true },
        { text: "Include a call-to-action.", met: false },
      ],
      "B-": [
        { text: "Improve the clarity of your story.", met: false },
        { text: "Add compelling visuals.", met: true },
      ],
      C: [
        { text: "Refine your story with more details.", met: false },
        { text: "Add more visuals.", met: false },
      ],
      "C-": [
        { text: "Rework your campaign story.", met: false },
        { text: "Add engaging visuals and narrative elements.", met: false },
      ],
      D: [
        { text: "Your campaign story needs significant improvement.", met: false },
        { text: "Include a clear and compelling narrative.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for campaign story.", met: false },
        { text: "Ensure the story is clear and engaging.", met: false },
      ],
      F: [
        { text: "Rewrite the campaign story completely.", met: false },
        { text: "Focus on a clear and engaging narrative.", met: false },
      ],
    },
    "rewards": {
      A: [],
      "A-": [{ text: "Consider adding a unique limited-time reward.", met: true }],
      "B+": [{ text: "Offer a special reward for early backers.", met: true }],
      B: [
        { text: "Include more diverse reward options.", met: true },
        { text: "Highlight the value of each reward.", met: false },
      ],
      "B-": [
        { text: "Improve the descriptions of your rewards.", met: false },
        { text: "Add more appealing visuals.", met: true },
      ],
      C: [
        { text: "Enhance your reward tiers with more options.", met: false },
        { text: "Include more visuals for each reward.", met: false },
      ],
      "C-": [
        { text: "Revise your reward tiers.", met: false },
        { text: "Add engaging visuals and descriptions.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for reward tiers.", met: false },
        { text: "Ensure each reward is valuable and clear.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for reward tiers.", met: false },
        { text: "Clarify the value of each reward.", met: false },
      ],
      F: [
        { text: "Completely revamp your reward tiers.", met: false },
        { text: "Focus on clear and valuable rewards.", met: false },
      ],
    },
    "budget-and-funding": {
      A: [],
      "A-": [{ text: "Minor adjustments to budget details.", met: true }],
      "B+": [{ text: "Highlight key funding milestones.", met: true }],
      B: [
        { text: "Provide more detailed budget breakdown.", met: true },
        { text: "Include potential funding risks.", met: false },
      ],
      "B-": [
        { text: "Clarify your funding goals.", met: false },
        { text: "Provide more visuals for budget breakdown.", met: true },
      ],
      C: [
        { text: "Enhance your budget details with specifics.", met: false },
        { text: "Include more visuals for clarity.", met: false },
      ],
      "C-": [
        { text: "Rework your budget and funding section.", met: false },
        { text: "Add detailed breakdowns and visuals.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for budget details.", met: false },
        { text: "Include a clear and detailed budget breakdown.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for budget section.", met: false },
        { text: "Ensure the budget is clear and detailed.", met: false },
      ],
      F: [
        { text: "Completely revamp your budget section.", met: false },
        { text: "Focus on clear and detailed budget breakdowns.", met: false },
      ],
    },
    "risks-and-challenges": {
      A: [],
      "A-": [{ text: "Consider mentioning minor potential risks.", met: true }],
      "B+": [{ text: "Highlight your risk management strategies.", met: true }],
      B: [
        { text: "Provide more details on potential risks.", met: true },
        { text: "Include contingency plans.", met: false },
      ],
      "B-": [
        { text: "Clarify potential risks and challenges.", met: false },
        { text: "Provide more visuals and details.", met: true },
      ],
      C: [
        { text: "Enhance your risk section with specifics.", met: false },
        { text: "Include more visuals for clarity.", met: false },
      ],
      "C-": [
        { text: "Rework your risks and challenges section.", met: false },
        { text: "Add detailed breakdowns and visuals.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for risk details.", met: false },
        { text: "Include a clear and detailed risk management plan.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for risk section.", met: false },
        { text: "Ensure the risks are clear and detailed.", met: false },
      ],
      F: [
        { text: "Completely revamp your risks and challenges section.", met: false },
        { text: "Focus on clear and detailed risk breakdowns.", met: false },
      ],
    },
    "updates": {
      A: [],
      "A-": [{ text: "Consider adding minor updates.", met: true }],
      "B+": [{ text: "Highlight recent progress and milestones.", met: true }],
      B: [
        { text: "Provide more frequent updates.", met: true },
        { text: "Include more visuals in updates.", met: false },
      ],
      "B-": [
        { text: "Improve the clarity of your updates.", met: false },
        { text: "Add more engaging visuals.", met: true },
      ],
      C: [
        { text: "Enhance your updates with more details.", met: false },
        { text: "Include more visuals for clarity.", met: false },
      ],
      "C-": [
        { text: "Rework your updates section.", met: false },
        { text: "Add detailed updates and visuals.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
      ],
      F: [
        { text: "Completely revamp your updates section.", met: false },
        { text: "Focus on clear and detailed updates.", met: false },
      ],
    },
  };
  
  export const getRecommendations = async (section: string, grade: string): Promise<Recommendation[]> => {
    console.log(`Fetching recommendations for section: ${section}, grade: ${grade}`);
  
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const recommendations = fakeRecommendations[section]?.[grade] || [];
    console.log(`Fetched recommendations: ${JSON.stringify(recommendations)}`);
  
    return recommendations;
  };
  