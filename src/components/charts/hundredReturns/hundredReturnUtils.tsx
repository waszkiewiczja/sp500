import { hundredTotalReturn } from './data';

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

export const green = 'rgb(124,195,5)';
export const darkGreen = 'rgb(101 163 13)';
export const red = 'rgb(246, 94,97)';
export const darkRed = 'rgb(190 18 60)';

export const data = {
  labels: hundredTotalReturn.map((data) => data.since),
  datasets: [
    {
      label: 'Total return [$]',
      data: hundredTotalReturn.map((data) => data.total),
      borderColor: darkGreen,
      backgroundColor: green,
      datalabels: {
        color: hundredTotalReturn.map((data) => (data.since ? 'green' : 'red')),
        anchor: hundredTotalReturn.map((data) =>
          data.since ? 'end' : 'start',
        ),
        align: hundredTotalReturn.map((data) =>
          data.since ? 'right' : 'left',
        ),
      },
    },
  ],
};
