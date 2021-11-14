import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAuthContext } from '../../contexts/auth';
import { Button, Input } from '../../components';
import { Container } from './styles';

export const LoginPage = (): JSX.Element => {
  const { signIn } = useAuthContext();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (): Promise<void> => {
    if (!username || !password) return;

    try {
      await signIn({ username, password });
      history.push('/dashboard');
    } catch (error) {
      alert((error as AxiosError)?.response?.data?.message);
    }
  };

  return (
    <Container>
      <section>
        <h1>Faça seu login</h1>

        <form>
          <label htmlFor="username">Usuário</label>
          <Input id="username" value={username} onChange={(e) => setUsername((e.target as HTMLInputElement).value)} type="text" />

          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            value={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
            type="password"
          />

          <Button onClick={handleSignIn}>Login</Button>
        </form>
      </section>
    </Container>
  );
};
