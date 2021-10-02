import { useState } from 'react';

import quiz from '../../mocks/quiz.json';

interface Question {
  title: string;
  answers: string[];
  linkedQuestions?: Question[]
}

export const Quiz = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(quiz.data);
  const [results, setResults] = useState('');

  const handleFinish = (): void => {
    setResults('Congratulations!');
  };

  const handleSelectAnswer = (index: number): void => {
    if (currentQuestion?.linkedQuestions) {
      return setCurrentQuestion(currentQuestion.linkedQuestions[index]);
    }

    return handleFinish();
  };

  const handleRestart = (): void => {
    setCurrentQuestion(quiz.data);
    setResults('');
  };

  return (
    <div>
      {results ? (
        <>
          <div>{results}</div>
          <button type="button" onClick={handleRestart}>Restart</button>
        </>
      ) : (
        <>
          <h1>{currentQuestion.title}</h1>
          {currentQuestion?.answers?.map((answer, index) => (
            // just for now
            /* eslint-disable-next-line */
            <div
              // just for now
              /* eslint-disable-next-line */
              key={index}
              style={{
                padding: '24px 32px',
                border: '1px solid #000',
                cursor: 'pointer',
              }}
              onClick={() => handleSelectAnswer(index)}
            >
              {answer}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
