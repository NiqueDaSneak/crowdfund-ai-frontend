import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateUniqueLoremIpsum = () => {
  return (
    <div>
      {Array.from({ length: 3 }, (_, i) => (
        <p key={i}>{lorem.generateSentences(5)}</p>
      ))}
    </div>
  );
};
