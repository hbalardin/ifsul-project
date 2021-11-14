import { AxiosResponse } from 'axios';

import { api } from '..';

import { DatabaseStep, StepProps } from '../../../models';

interface CreateStepProps {
  questionId: string;
  registerId: string;
}

interface LinkAnswerToStepProps {
  stepId: string;
  answerId: string;
}

interface UndoStepProps {
  stepId: string;
}

const createStep = async (data: CreateStepProps): Promise<StepProps> => {
  const response = await api.post<undefined, AxiosResponse<DatabaseStep>>('/steps', data);

  return {
    id: response?.data.id,
    questionId: response?.data.question_id,
    registerId: response?.data.register_id,
  };
};

const linkAnswerToStep = async ({ answerId, stepId }: LinkAnswerToStepProps): Promise<StepProps> => {
  const response = await api.put<undefined, AxiosResponse<DatabaseStep>>(`/steps/${stepId}/linkAnswer/${answerId}`);

  return {
    id: response?.data.id,
    questionId: response?.data.question_id,
    registerId: response?.data.register_id,
    answerId: response?.data?.answer_id,
    nextStepId: response?.data?.next_step_id,
  };
};

const undoStep = async ({ stepId }: UndoStepProps): Promise<StepProps> => {
  const response = await api.put<undefined, AxiosResponse<{previousStep: DatabaseStep}>>(`/steps/${stepId}/undo`);
  const { previousStep } = response.data;

  return {
    id: previousStep.id,
    questionId: previousStep.question_id,
    registerId: previousStep.register_id,
    answerId: previousStep?.answer_id,
    nextStepId: previousStep?.next_step_id,
  };
};

export const stepsService = {
  createStep,
  linkAnswerToStep,
  undoStep,
};
