import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth';

export const useEnsureAuth = (): void => {
  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    !user && history.replace('/login');
  }, [user, history]);
};
