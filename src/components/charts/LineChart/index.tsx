import { Line } from 'react-chartjs-2';
import { theme } from '../../../styles/theme';

const data = {
  labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  datasets: [
    {
      label: 'Acessos',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: theme.color.darkRed,
      borderColor: `${theme.color.darkRed}dd`,
    },
  ],
};

export const LineChart = (): JSX.Element => (
  <Line
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
