import { darkGreen, green } from '../utils';
import { returnSinceYearData } from './data';

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
  labels: returnSinceYearData.map((data) => data.since),
  datasets: [
    {
      label: 'S&P 500 including dividends [%]',
      data: returnSinceYearData.map((data) => data.annualized),
      borderColor: darkGreen,
      backgroundColor: green,
      datalabels: {
        color: returnSinceYearData.map((data) =>
          data.since ? 'green' : 'red',
        ),
        anchor: returnSinceYearData.map((data) =>
          data.since ? 'end' : 'start',
        ),
        align: returnSinceYearData.map((data) =>
          data.since ? 'right' : 'left',
        ),
      },
    },
  ],
};
