import { useEffect, useState } from 'react';

import quiz from '../../mocks/quiz.json';

import { Answer, Question } from '../../models';
import { AnswerEditableCard, Button, EditableTitle } from '../../components';

import { Container, Content } from './styles';

export const QuizDashboard = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);

  const fetchQuizData = (): void => {
    const firstQuestion = quiz.data.questions[0];
    const firstAnswers = quiz.data.answers.filter((answer) => answer.questionId === firstQuestion.id);

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswers);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <Container>
      <Content>
        {currentQuestion && <EditableTitle size={32} centered title={currentQuestion.title} onChangeTitle={(title: string) => setCurrentQuestion({ ...currentQuestion, title })} />}
        <ul style={{ padding: 0 }}>
          {currentAnswers.map((answer) => (
            <AnswerEditableCard
              key={answer.id}
              title={answer.title}
            />
          ))}
        </ul>
        <Button>Voltar</Button>
      </Content>
    </Container>
  );
};
