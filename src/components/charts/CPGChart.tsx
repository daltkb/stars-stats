import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 16;

export default function CPGChart() {
  return (
    <div style={{ width: '500px', height: '500px', textAlign: 'center' }}>
      <h1>Cost per goal</h1>
      <Pie data={data} />
    </div>
  );
}

export const data = {
  labels: [
    'Jason Robertson',
    'Roope Hintz',
    'Joe Pavelski',
    'Tyler Seguin',
    'Jamie Benn',
    'Jacob Peterson',
  ],
  datasets: [
    {
      label: 'Cost per goal',
      data: [19390, 85135, 259259, 410416, 527777, 70208],
      backgroundColor: [
        'rgba(15, 186, 79, 0.8)',
        'rgba(130, 130, 130, 0.8)',
        'rgba(0, 0, 0, 0.8)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(47, 208, 67, 0.8)',
        'rgba(72, 72, 72, 0.8)',
      ],
    },
  ],
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'green',
          font: {
            size: 20,
          },
        },
      },
    },
  },
};
