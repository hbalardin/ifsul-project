import { Bar } from 'react-chartjs-2';
import { theme } from '../../../styles/theme';

const data = {
  labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  datasets: [
    {
      label: 'Registros Iniciados',
      data: [12, 19, 3, 5, 2, 3, 250],
      backgroundColor: theme.color.darkRed,
      stack: 'Stack 0',
    },
    {
      label: 'Registros Finalizados',
      data: [3, 10, 13, 15, 22, 30, 200],
      backgroundColor: theme.color.white,
      stack: 'Stack 1',
    },
  ],
};

export const GroupedBarChart = (): JSX.Element => (
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
