import { Button, DashboardSidebar } from '../../components';

import { Container, Content } from './styles';
import { useAuthContext } from '../../contexts/auth';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

export const Profile = (): JSX.Element => {
  const { user, signOut } = useAuthContext();
  useEnsureAuth();

  return (
    <Container>
      <DashboardSidebar />
      <Content>
        <h1>
          Você está autenticado como:
          {' '}
          {user?.name}
        </h1>
        <Button onClick={signOut}>Sair</Button>
      </Content>
    </Container>
  );
};
