import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth';

export const useEnsureAuth = (shouldEnsureAuth = true): void => {
  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    shouldEnsureAuth && !user && history.replace('/login');
  }, [shouldEnsureAuth, user, history]);
};
