import { darkRed, red } from '../utils';
import { monthlyData } from './data';

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
  scales: {
    x: {
      grid: {
        lineWidth: 1,
        color: 'rgb(100, 116, 139)',
      },
      min: -10,
      max: 10,
    },
  },
};

export const data = {
  labels: monthlyData.map((data) => data.month),
  datasets: [
    {
      label: 'S&P 500 including dividends [%]',
      data: monthlyData.map((data) => data.result),
      borderColor: monthlyData.map((data) =>
        data.isPositive ? 'blue' : darkRed,
      ),
      backgroundColor: monthlyData.map((data) =>
        data.isPositive ? 'rgba(54, 162, 235, 0.8)' : red,
      ),
      datalabels: {
        color: monthlyData.map((data) => (data.isPositive ? 'blue' : 'red')),
        anchor: monthlyData.map((data) => (data.isPositive ? 'end' : 'start')),
        align: monthlyData.map((data) => (data.isPositive ? 'right' : 'left')),
      },
    },
  ],
};
