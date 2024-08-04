import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import LatestBloodPressureData from './LatestBloodPressureData';
import expandMore from 'assets/svg/expand_more.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DiagnosisChart = ({ chartData }) => {
  // getting the months and year from the original data for the label of the chart
  const monthsYear = chartData.diagnosis_history
    .slice(0, 6)
    .map((data) => {
      const month = data.month.slice(0, 3);
      return `${month}. ${data.year}`;
    })
    .reverse();

  // getting the diastolic blood pressure from the original data for the chart data points
  const bloodPressureDiastolic = chartData.diagnosis_history
    .slice(0, 6)
    .map((data) => {
      return data.blood_pressure.diastolic;
    })
    .reverse();

  // getting the systolic blood pressure from the original data for the chart data points
  const bloodPressureSystolic = chartData.diagnosis_history
    .slice(0, 6)
    .map((data) => {
      return data.blood_pressure.systolic;
    })
    .reverse();

  const lineChartData = {
    labels: [...monthsYear],
    datasets: [
      {
        label: 'Systolic',
        data: [...bloodPressureSystolic.map((bldPres) => bldPres.value)],
        borderColor: '#E66FD2',
        tension: 0.5,
        pointBorderWidth: 2,
        pointRadius: 10,
        pointBackgroundColor: '#E66FD2',
        pointBorderColor: '#F4F0FE',
      },
      {
        label: 'Diastolic',
        data: [...bloodPressureDiastolic.map((bldPres) => bldPres.value)],
        borderColor: '#8C6FE6',
        tension: 0.5,
        pointBorderWidth: 1,
        pointRadius: 10,
        pointBackgroundColor: '#8C6FE6',
        pointBorderColor: '#F4F0FE',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#F4F0FE',
        },
      },
      y: {
        grid: {
          lineWidth: 2,
          color: '#CBC8D4',
        },
      },
    },
  };

  return (
    <div className="bg-chart rounded-lg p-3 flex gap-x-3">
      <div className="w-3/4">
        <div className="flex justify-between items-center py-3">
          <h2 className="font-bold text-lg">Blood Pressure</h2>
          <div className="flex items-center gap-x-2 pr-7">
            <p className="text-sm">Last 6 months</p>
            <img
              src={expandMore}
              alt="more options icon"
              className="w-[11px] h-[6px]"
            />
          </div>
        </div>
        <Line options={options} data={lineChartData} />
      </div>

      <div className="w-1/4 pt-3">
        <LatestBloodPressureData
          latestBldPressure={chartData.diagnosis_history[0].blood_pressure}
        />
      </div>
    </div>
  );
};
export default DiagnosisChart;
