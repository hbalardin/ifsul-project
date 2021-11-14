import { DashboardSidebar } from '../../components';

import { Container, Content } from './styles';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

export const Dashboard = (): JSX.Element => {
  useEnsureAuth();

  return (
    <Container>
      <DashboardSidebar />
      <Content />
    </Container>
  );
};
