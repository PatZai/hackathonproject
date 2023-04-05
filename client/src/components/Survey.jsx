import React, { useState } from 'react';
// import Header from './Header';
// import Question from './Question';
// import Result from './Result';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      question: 'What is your favorite color?',
      options: [
        { id: 1, text: 'Red' },
        { id: 2, text: 'Blue' },
        { id: 3, text: 'Green' },
        { id: 4, text: 'Yellow' }
      ]
    },
    {
      id: 2,
      question: 'What is your favorite animal?',
      options: [
        { id: 1, text: 'Dog' },
        { id: 2, text: 'Cat' },
        { id: 3, text: 'Bird' },
        { id: 4, text: 'Fish' }
      ]
    },
    {
      id: 3,
      question: 'What is your favorite food?',
      options: [
        { id: 1, text: 'Pizza' },
        { id: 2, text: 'Burger' },
        { id: 3, text: 'Sushi' },
        { id: 4, text: 'Tacos' }
      ]
    }
  ];

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handleRestart = () => {
    setAnswers([]);
    setStep(1);
  };

  return (
    <div>
      <Header />
      {step <= questions.length ? (
        <Question
          question={questions[step - 1]}
          onAnswer={handleNext}
        />
      ) : (
        <Result answers={answers} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Survey;



