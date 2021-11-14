import { AxiosResponse } from 'axios';

import { api } from '..';

import { RegisterProps } from '../../../models';

const startRegister = async (): Promise<RegisterProps> => {
  const response = await api.post<undefined, AxiosResponse<RegisterProps>>('/registers');
  return {
    id: response?.data.id,
  };
};

export const registersService = {
  startRegister,
};
