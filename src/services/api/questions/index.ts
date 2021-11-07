import { AxiosResponse } from 'axios';

import { api } from '..';

import { DatabaseQuestion, Question } from '../../../models';

interface CreateQuestionProps {
  title: string
}

interface CreateQuestionFromAnswerProps {
  title: string
  linkedAnswerId: string
}

interface GetQuestionByIdProps {
  id: string
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

const createQuestionFromAnswer = async ({ title, linkedAnswerId }: CreateQuestionFromAnswerProps): Promise<Question> => {
  const response = await api.post<CreateQuestionFromAnswerProps, AxiosResponse<DatabaseQuestion>>(`/questions/${linkedAnswerId}`, { title });

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

const getQuestionById = async ({ id }: GetQuestionByIdProps): Promise<Question> => {
  const response = await api.get<DatabaseQuestion>(`/questions/${id}`);

  return {
    id: response.data.id,
    title: response.data.title,
    linkedAnswerId: response.data.linked_answer_id,
  };
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
  createQuestionFromAnswer,
  getQuestions,
  getQuestionById,
  updateQuestion,
};
