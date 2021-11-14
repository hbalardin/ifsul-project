import { DashboardSidebar } from '../../components';

import { Container, Content } from './styles';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

export const DashboardPage = (): JSX.Element => {
  useEnsureAuth();

  return (
    <Container>
      <DashboardSidebar />
      <Content />
    </Container>
  );
};
