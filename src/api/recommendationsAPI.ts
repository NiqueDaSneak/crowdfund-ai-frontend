interface Recommendation {
    text: string;
    met: boolean;
  }
  
  const fakeRecommendations: { [key: string]: { [key: string]: Recommendation[] } } = {
    "project-overview": {
      A: [],
      "A-": [
        { text: "Consider minor adjustments to your project summary.", met: true },
        { text: "Ensure all key points are clear and concise.", met: true },
      ],
      "B+": [
        { text: "Highlight key achievements and milestones.", met: true },
        { text: "Add more detailed descriptions.", met: false },
      ],
      B: [
        { text: "Provide more details on project scope.", met: true },
        { text: "Include testimonials or quotes.", met: false },
        { text: "Use more visuals to illustrate your points.", met: true },
      ],
      "B-": [
        { text: "Clarify your project's main objectives.", met: false },
        { text: "Provide more visuals.", met: true },
        { text: "Include more specific details.", met: false },
      ],
      "C+": [
        { text: "Enhance your project summary with specific details.", met: false },
        { text: "Include more visuals.", met: false },
        { text: "Add quotes or testimonials.", met: false },
      ],
      C: [
        { text: "Rework the project overview section.", met: false },
        { text: "Add visuals and detailed descriptions.", met: false },
        { text: "Clarify your main objectives.", met: false },
      ],
      "C-": [
        { text: "The project overview needs significant improvements.", met: false },
        { text: "Add a clear and concise project summary.", met: false },
        { text: "Use more engaging visuals.", met: false },
      ],
      "D+": [
        { text: "Major overhaul needed for project overview.", met: false },
        { text: "Include key project details and objectives.", met: false },
        { text: "Add testimonials or quotes.", met: false },
      ],
      D: [
        { text: "The project overview needs significant improvements.", met: false },
        { text: "Add a clear and concise project summary.", met: false },
        { text: "Use more visuals and detailed descriptions.", met: false },
      ],
      "D-": [
        { text: "Major overhaul needed for project overview.", met: false },
        { text: "Include key project details and objectives.", met: false },
        { text: "Provide a clearer summary.", met: false },
      ],
      F: [
        { text: "Rewrite the project overview entirely.", met: false },
        { text: "Include key project details and objectives.", met: false },
        { text: "Use visuals to illustrate your points.", met: false },
      ],
    },
    "campaign-story": {
      A: [],
      "A-": [
        { text: "Minor enhancements to narrative flow.", met: true },
        { text: "Ensure the story is engaging throughout.", met: true },
      ],
      "B+": [
        { text: "Emphasize unique aspects of your story.", met: true },
        { text: "Add personal anecdotes.", met: true },
      ],
      B: [
        { text: "Add more personal anecdotes.", met: true },
        { text: "Include a call-to-action.", met: false },
        { text: "Use more visuals to support the story.", met: true },
      ],
      "B-": [
        { text: "Improve the clarity of your story.", met: false },
        { text: "Add compelling visuals.", met: true },
        { text: "Enhance the narrative with specific details.", met: false },
      ],
      "C+": [
        { text: "Refine your story with more details.", met: false },
        { text: "Add more visuals.", met: false },
        { text: "Include engaging anecdotes.", met: false },
      ],
      C: [
        { text: "Rework your campaign story.", met: false },
        { text: "Add engaging visuals and narrative elements.", met: false },
        { text: "Clarify the main points.", met: false },
      ],
      "C-": [
        { text: "Your campaign story needs significant improvement.", met: false },
        { text: "Include a clear and compelling narrative.", met: false },
        { text: "Use more visuals to enhance the story.", met: false },
      ],
      "D+": [
        { text: "Major revisions needed for campaign story.", met: false },
        { text: "Ensure the story is clear and engaging.", met: false },
        { text: "Add specific examples and details.", met: false },
      ],
      D: [
        { text: "Your campaign story needs significant improvement.", met: false },
        { text: "Include a clear and compelling narrative.", met: false },
        { text: "Use visuals to support the narrative.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for campaign story.", met: false },
        { text: "Ensure the story is clear and engaging.", met: false },
        { text: "Provide more specific details.", met: false },
      ],
      F: [
        { text: "Rewrite the campaign story completely.", met: false },
        { text: "Focus on a clear and engaging narrative.", met: false },
        { text: "Use compelling visuals and examples.", met: false },
      ],
    },
    "rewards": {
      A: [],
      "A-": [
        { text: "Consider adding a unique limited-time reward.", met: true },
        { text: "Highlight the exclusivity of certain rewards.", met: true },
      ],
      "B+": [
        { text: "Offer a special reward for early backers.", met: true },
        { text: "Enhance the perceived value of rewards.", met: true },
      ],
      B: [
        { text: "Include more diverse reward options.", met: true },
        { text: "Highlight the value of each reward.", met: false },
        { text: "Provide detailed descriptions of rewards.", met: true },
      ],
      "B-": [
        { text: "Improve the descriptions of your rewards.", met: false },
        { text: "Add more appealing visuals.", met: true },
        { text: "Clarify the benefits of each reward.", met: false },
      ],
      "C+": [
        { text: "Enhance your reward tiers with more options.", met: false },
        { text: "Include more visuals for each reward.", met: false },
        { text: "Ensure rewards are compelling.", met: false },
      ],
      C: [
        { text: "Revise your reward tiers.", met: false },
        { text: "Add engaging visuals and descriptions.", met: false },
        { text: "Clarify the value of each reward.", met: false },
      ],
      "C-": [
        { text: "Significant improvements needed for reward tiers.", met: false },
        { text: "Ensure each reward is valuable and clear.", met: false },
        { text: "Add unique reward options.", met: false },
      ],
      "D+": [
        { text: "Major revisions needed for reward tiers.", met: false },
        { text: "Clarify the value of each reward.", met: false },
        { text: "Use more visuals to showcase rewards.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for reward tiers.", met: false },
        { text: "Ensure each reward is valuable and clear.", met: false },
        { text: "Add compelling reward options.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for reward tiers.", met: false },
        { text: "Clarify the value of each reward.", met: false },
        { text: "Provide detailed reward descriptions.", met: false },
      ],
      F: [
        { text: "Completely revamp your reward tiers.", met: false },
        { text: "Focus on clear and valuable rewards.", met: false },
        { text: "Use visuals to highlight rewards.", met: false },
      ],
    },
    "budget-and-funding": {
      A: [],
      "A-": [
        { text: "Minor adjustments to budget details.", met: true },
        { text: "Ensure all budget items are clearly explained.", met: true },
      ],
      "B+": [
        { text: "Highlight key funding milestones.", met: true },
        { text: "Add more detailed budget breakdown.", met: true },
      ],
      B: [
        { text: "Provide more detailed budget breakdown.", met: true },
        { text: "Include potential funding risks.", met: false },
        { text: "Clarify how funds will be used.", met: true },
      ],
      "B-": [
        { text: "Clarify your funding goals.", met: false },
        { text: "Provide more visuals for budget breakdown.", met: true },
        { text: "Ensure budget items are specific.", met: false },
      ],
      "C+": [
        { text: "Enhance your budget details with specifics.", met: false },
        { text: "Include more visuals for clarity.", met: false },
        { text: "Clarify funding allocations.", met: false },
      ],
      C: [
        { text: "Rework your budget and funding section.", met: false },
        { text: "Add detailed breakdowns and visuals.", met: false },
        { text: "Ensure funding goals are clear.", met: false },
      ],
      "C-": [
        { text: "Significant improvements needed for budget details.", met: false },
        { text: "Include a clear and detailed budget breakdown.", met: false },
        { text: "Provide more specific details.", met: false },
      ],
      "D+": [
        { text: "Major revisions needed for budget section.", met: false },
        { text: "Ensure the budget is clear and detailed.", met: false },
        { text: "Use visuals to illustrate budget items.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for budget details.", met: false },
        { text: "Include a clear and detailed budget breakdown.", met: false },
        { text: "Clarify funding allocations.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for budget section.", met: false },
        { text: "Ensure the budget is clear and detailed.", met: false },
        { text: "Provide detailed explanations for each budget item.", met: false },
      ],
      F: [
        { text: "Completely revamp your budget section.", met: false },
        { text: "Focus on clear and detailed budget breakdowns.", met: false },
        { text: "Ensure all budget items are explained.", met: false },
      ],
    },
    "risks-and-challenges": {
      A: [],
      "A-": [
        { text: "Consider mentioning minor potential risks.", met: true },
        { text: "Highlight your risk management strategies.", met: true },
      ],
      "B+": [
        { text: "Provide more details on potential risks.", met: true },
        { text: "Include contingency plans.", met: false },
      ],
      B: [
        { text: "Provide more details on potential risks.", met: true },
        { text: "Include contingency plans.", met: false },
        { text: "Clarify how risks will be mitigated.", met: true },
      ],
      "B-": [
        { text: "Clarify potential risks and challenges.", met: false },
        { text: "Provide more visuals and details.", met: true },
        { text: "Ensure risk management strategies are clear.", met: false },
      ],
      "C+": [
        { text: "Enhance your risk section with specifics.", met: false },
        { text: "Include more visuals for clarity.", met: false },
        { text: "Clarify risk mitigation strategies.", met: false },
      ],
      C: [
        { text: "Rework your risks and challenges section.", met: false },
        { text: "Add detailed breakdowns and visuals.", met: false },
        { text: "Ensure risks are clearly defined.", met: false },
      ],
      "C-": [
        { text: "Significant improvements needed for risk details.", met: false },
        { text: "Include a clear and detailed risk management plan.", met: false },
        { text: "Provide more specific details on risks.", met: false },
      ],
      "D+": [
        { text: "Major revisions needed for risk section.", met: false },
        { text: "Ensure the risks are clear and detailed.", met: false },
        { text: "Use visuals to illustrate risks.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for risk details.", met: false },
        { text: "Include a clear and detailed risk management plan.", met: false },
        { text: "Clarify how risks will be addressed.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for risk section.", met: false },
        { text: "Ensure the risks are clear and detailed.", met: false },
        { text: "Provide detailed explanations for each risk.", met: false },
      ],
      F: [
        { text: "Completely revamp your risks and challenges section.", met: false },
        { text: "Focus on clear and detailed risk breakdowns.", met: false },
        { text: "Ensure all potential risks are addressed.", met: false },
      ],
    },
    "updates": {
      A: [],
      "A-": [
        { text: "Consider adding minor updates.", met: true },
        { text: "Highlight recent progress and milestones.", met: true },
      ],
      "B+": [
        { text: "Provide more frequent updates.", met: true },
        { text: "Include more visuals in updates.", met: false },
      ],
      B: [
        { text: "Provide more frequent updates.", met: true },
        { text: "Include more visuals in updates.", met: false },
        { text: "Ensure updates are clear and engaging.", met: true },
      ],
      "B-": [
        { text: "Improve the clarity of your updates.", met: false },
        { text: "Add more engaging visuals.", met: true },
        { text: "Provide more specific details.", met: false },
      ],
      "C+": [
        { text: "Enhance your updates with more details.", met: false },
        { text: "Include more visuals for clarity.", met: false },
        { text: "Ensure updates are regular.", met: false },
      ],
      C: [
        { text: "Rework your updates section.", met: false },
        { text: "Add detailed updates and visuals.", met: false },
        { text: "Clarify recent progress and milestones.", met: false },
      ],
      "C-": [
        { text: "Significant improvements needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
        { text: "Provide more engaging content.", met: false },
      ],
      "D+": [
        { text: "Major revisions needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
        { text: "Use visuals to highlight progress.", met: false },
      ],
      D: [
        { text: "Significant improvements needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
        { text: "Provide regular and engaging updates.", met: false },
      ],
      "D-": [
        { text: "Major revisions needed for updates.", met: false },
        { text: "Ensure updates are clear and detailed.", met: false },
        { text: "Clarify recent progress and milestones.", met: false },
      ],
      F: [
        { text: "Completely revamp your updates section.", met: false },
        { text: "Focus on clear and detailed updates.", met: false },
        { text: "Ensure updates are regular and engaging.", met: false },
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
  