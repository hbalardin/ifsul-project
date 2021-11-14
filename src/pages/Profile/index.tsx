import { FaUserTie } from 'react-icons/fa';

import { useAuthContext } from '../../contexts/auth';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

import { Button, DashboardSidebar } from '../../components';

import { theme } from '../../styles/theme';

import { Container, Content } from './styles';

export const ProfilePage = (): JSX.Element => {
  const { user, signOut } = useAuthContext();
  useEnsureAuth();

  return (
    <Container>
      <DashboardSidebar />
      <Content>
        <FaUserTie size={128} color={theme.color.darkRed} />
        <h1>
          {user?.name}
        </h1>
        <Button onClick={signOut}>Sair</Button>
      </Content>
    </Container>
  );
};
