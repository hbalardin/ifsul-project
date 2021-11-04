import { AxiosResponse } from 'axios';

import { api } from '..';

import { Answer, DatabaseAnswer } from '../../../models';

interface CreateAnswerProps {
  title: string
  description: string
  questionId: string
}

interface GetAnswersByQuestionProps {
  questionId: string
}

const createAnswer = async (data: CreateAnswerProps): Promise<Answer
> => {
  const createdAnswerResponse = await api.post<CreateAnswerProps, AxiosResponse<DatabaseAnswer>>('/answers', data);

  return {
    id: createdAnswerResponse.data.id,
    title: createdAnswerResponse.data.title,
    description: createdAnswerResponse.data.description,
    questionId: createdAnswerResponse.data.question_id,
  };
};

const getAnswers = async (): Promise<Answer[]> => {
  const response = await api.get<DatabaseAnswer[]>('/answers');

  const parsedAnswers = response.data.map((answer) => ({
    id: answer.id,
    title: answer.title,
    description: answer.description,
    questionId: answer.question_id,
  }));

  return parsedAnswers;
};

const getAnswersByQuestion = async ({ questionId }: GetAnswersByQuestionProps): Promise<Answer[]> => {
  const response = await api.get<DatabaseAnswer[]>(`/answers/${questionId}`);

  const parsedAnswers = response.data.map((answer) => ({
    id: answer.id,
    title: answer.title,
    description: answer.description,
    questionId: answer.question_id,
  }));

  return parsedAnswers;
};

export const answersService = {
  createAnswer,
  getAnswers,
  getAnswersByQuestion,
};
