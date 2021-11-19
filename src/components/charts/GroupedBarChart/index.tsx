import { Bar } from 'react-chartjs-2';
import { theme } from '../../../styles/theme';

interface GroupedBarChartProps {
  registersCount: number[]
  completedRegistersCount: number[]
}

export const GroupedBarChart = ({ completedRegistersCount, registersCount }: GroupedBarChartProps): JSX.Element => {
  const data = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Registros Iniciados',
        data: registersCount,
        backgroundColor: theme.color.darkRed,
        stack: 'Stack 0',
      },
      {
        label: 'Registros Finalizados',
        data: completedRegistersCount,
        backgroundColor: theme.color.white,
        stack: 'Stack 1',
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
};
