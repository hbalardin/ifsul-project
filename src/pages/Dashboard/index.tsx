import { useCallback, useEffect, useState } from 'react';
import { DashboardSidebar, GroupedBarChart, LineChart } from '../../components';

import { registersService } from '../../services/api';

import { useEnsureAuth } from '../../hooks/useEnsureAuth';
import { sortByDayOfWeek } from '../../utils';

import { Container, Content } from './styles';
import { RegisterProps } from '../../models';

export const DashboardPage = (): JSX.Element => {
  useEnsureAuth();

  const [weekRegistersCount, setWeekRegistersCount] = useState<number[]>([]);
  const [weekCompletedRegistersCount, setWeekCompletedRegistersCount] = useState<number[]>([]);

  const countRegistersByDay = useCallback((registers: RegisterProps[]): number[] => {
    const registersDates = registers.map(({ createdAt }) => new Date(createdAt));
    const registersSortedDates = sortByDayOfWeek(registersDates);

    return Object.values(registersSortedDates).map((day) => day.length);
  }, []);

  const getWeekRegisters = useCallback(async (): Promise<void> => {
    const { completedRegisters, registers } = await registersService.getWeekRegisters();

    setWeekRegistersCount(countRegistersByDay(registers));
    setWeekCompletedRegistersCount(countRegistersByDay(completedRegisters));
  }, [countRegistersByDay]);

  useEffect(() => {
    getWeekRegisters();
  }, [getWeekRegisters]);

  return (
    <Container>
      <DashboardSidebar />
      <Content>
        <h1>Resultados da semana</h1>
        <main>
          <section>
            <h2>Taxa de finalização</h2>
            <GroupedBarChart registersCount={weekRegistersCount} completedRegistersCount={weekCompletedRegistersCount} />
          </section>
          <section>
            <h2>Taxa de acessos</h2>
            <LineChart registersCount={weekRegistersCount} />
          </section>
        </main>
      </Content>
    </Container>
  );
};
