import {
  createContext, useCallback, useState, useContext, ReactNode,
} from 'react';

import { api, authService, SignInCredentials } from '../../services/api';
import { User } from '../../models';

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LawTech:token');
    const user = localStorage.getItem('@LawTech:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }: SignInCredentials) => {
    const response = await authService.signIn({ username, password });
    const { token, user } = response.data;

    localStorage.setItem('@LawTech:token', token);
    localStorage.setItem('@LawTech:user', JSON.stringify(user));

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LawTech:token');
    localStorage.removeItem('@LawTech:user');

    api.defaults.headers.common.Authorization = '';

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextData => useContext(AuthContext);
