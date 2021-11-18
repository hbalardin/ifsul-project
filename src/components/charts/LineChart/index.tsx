import { Line } from 'react-chartjs-2';
import { theme } from '../../../styles/theme';

interface LineChartProps {
  registersCount: number[]
}

export const LineChart = ({ registersCount }: LineChartProps): JSX.Element => {
  const data = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Acessos',
        data: registersCount,
        fill: false,
        backgroundColor: theme.color.darkRed,
        borderColor: `${theme.color.darkRed}dd`,
      },
    ],
  };

  return (
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
};
