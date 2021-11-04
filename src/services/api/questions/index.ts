import { AxiosResponse } from 'axios';

import { api } from '..';

import { DatabaseQuestion, Question } from '../../../models';

interface CreateQuestionProps {
  title: string
}

const createQuestion = async ({ title }: CreateQuestionProps): Promise<Question> => {
  const response = await api.post<CreateQuestionProps, AxiosResponse<DatabaseQuestion>>('/questions', { title });

  return {
    id: response.data.id,
    title: response.data.title,
    linkedAnswerId: response.data.linked_answer_id,
  };
};

const getQuestions = async (): Promise<Question[]> => {
  const response = await api.get<DatabaseQuestion[]>('/questions');

  const parsedQuestions = response.data.map((question) => ({
    id: question.id,
    title: question.title,
    linkedAnswerId: question.linked_answer_id,
  }));

  return parsedQuestions;
};

export const questionsService = {
  createQuestion,
  getQuestions,
};
