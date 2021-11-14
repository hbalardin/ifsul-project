import { DashboardSidebar, GroupedBarChart, LineChart } from '../../components';

import { Container, Content } from './styles';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

export const DashboardPage = (): JSX.Element => {
  useEnsureAuth();

  return (
    <Container>
      <DashboardSidebar />
      <Content>
        <h1>Resultados da semana</h1>
        <main>
          <section>
            <h2>Taxa de finalização</h2>
            <GroupedBarChart />
          </section>
          <section>
            <h2>Taxa de acessos</h2>
            <LineChart />
          </section>
        </main>
      </Content>
    </Container>
  );
};
