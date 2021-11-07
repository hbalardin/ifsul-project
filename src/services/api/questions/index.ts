import { AxiosResponse } from 'axios';

import { api } from '..';

import { DatabaseQuestion, Question } from '../../../models';

interface CreateQuestionProps {
  title: string
}

interface UpdateQuestionProps {
  id: string
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

const updateQuestion = async (data: UpdateQuestionProps): Promise<Question
> => {
  const updatedQuestionResponse = await api.put<UpdateQuestionProps, AxiosResponse<DatabaseQuestion>>(`/questions/${data.id}`, data);

  return {
    id: updatedQuestionResponse.data?.id,
    title: updatedQuestionResponse.data?.title,
  };
};

export const questionsService = {
  createQuestion,
  getQuestions,
  updateQuestion,
};
