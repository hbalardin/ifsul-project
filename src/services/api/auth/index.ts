import { AxiosResponse } from 'axios';

import { api } from '..';

import { User } from '../../../models';

export interface SignInCredentials {
  username: string;
  password: string;
}

interface SignInResponse {
  user: User;
  token: string;
}

const signIn = async (credentials: SignInCredentials): Promise<AxiosResponse<SignInResponse>> => {
  const signInResponse = await api.post<SignInCredentials, AxiosResponse<SignInResponse>>('/', credentials);
  return signInResponse;
};

export const authService = {
  signIn,
};
