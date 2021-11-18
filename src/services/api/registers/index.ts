import { AxiosResponse } from 'axios';

import { api } from '..';

import { DatabaseRegisterProps, RegisterProps } from '../../../models';

interface GetWeekRegistersResponse<RegisterType> {
  registers: RegisterType[],
  completedRegisters: RegisterType[],
}

const startRegister = async (): Promise<RegisterProps> => {
  const response = await api.post<undefined, AxiosResponse<DatabaseRegisterProps>>('/registers');
  return {
    id: response?.data.id,
    createdAt: response?.data.created_at,
  };
};

const getWeekRegisters = async (): Promise<GetWeekRegistersResponse<RegisterProps>> => {
  const response = await api.get<GetWeekRegistersResponse<DatabaseRegisterProps>>('/registers/week');

  const { completedRegisters, registers } = response.data;

  const parsedRegisters = registers.map((register) => ({
    id: register.id,
    createdAt: register.created_at,
  }));
  const parsedCompletedRegisters = completedRegisters.map((register) => ({
    id: register.id,
    createdAt: register.created_at,
  }));

  return {
    registers: parsedRegisters,
    completedRegisters: parsedCompletedRegisters,
  };
};

export const registersService = {
  startRegister,
  getWeekRegisters,
};
