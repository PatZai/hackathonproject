import React from 'react';

const Result = ({ answers, onRestart }) => {
  const answerCounts = answers.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(answerCounts));
  const mostFrequentAnswer = Object.keys(answerCounts).find(key => answerCounts[key] === maxCount);

  return (
    <div>
      <h2>Thanks for taking the survey!</h2>
      <p>Your favorite {mostFrequentAnswer} is the most popular choice among survey takers.</p>
      <button onClick={onRestart}>Take the survey again</button>
    </div>
  );
};

export default Result;