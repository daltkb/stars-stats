import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TotalGoals() {
  return (
    <div style={{ width: '500px', height: '500px', textAlign: 'center' }}>
      <h1 className="text-2xl font-medium">Total goals scored</h1>
      <Bar data={data} />
    </div>
  );
}

const data = {
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
      label: 'Goals',
      data: [41, 37, 27, 24, 18, 12],
      backgroundColor: ['rgba(15, 186, 79, 0.8)'],
    },
  ],
};
