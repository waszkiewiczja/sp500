import { darkGreen, darkRed, green, red } from '../utils';
import { yearlyData } from './data';

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
    },
  },
};

export const data = {
  labels: yearlyData.map((data) => data.year),
  datasets: [
    {
      label: 'S&P 500 including dividends [%]',
      data: yearlyData.map((data) => data.result),
      borderColor: yearlyData.map((data) =>
        data.isPositive ? darkGreen : darkRed,
      ),
      backgroundColor: yearlyData.map((data) =>
        data.isPositive ? green : red,
      ),
      datalabels: {
        color: yearlyData.map((data) => (data.isPositive ? 'green' : 'red')),
        anchor: yearlyData.map((data) => (data.isPositive ? 'end' : 'start')),
        align: yearlyData.map((data) => (data.isPositive ? 'right' : 'left')),
      },
    },
  ],
};
