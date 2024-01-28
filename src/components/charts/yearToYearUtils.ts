export type YearData = {
  year: number;
  result: number;
  isPositive: boolean;
};

export const green = 'rgb(124,195,5)';
export const darkGreen = 'rgb(101 163 13)';
export const red = 'rgb(246, 94,97)';
export const darkRed = 'rgb(190 18 60)';

export const yearlyData: YearData[] = [
  {
    year: 2023,
    result: 26.29,
    isPositive: true,
  },
  { year: 2022, result: -18.11, isPositive: false },
  { year: 2021, result: 28.71, isPositive: true },
  { year: 2020, result: 18.4, isPositive: true },
  { year: 2019, result: 31.49, isPositive: true },
  { year: 2018, result: -4.38, isPositive: false },
  { year: 2017, result: 21.83, isPositive: true },
  { year: 2016, result: 11.96, isPositive: true },
  { year: 2015, result: 1.38, isPositive: true },
  { year: 2014, result: 13.69, isPositive: true },
  { year: 2013, result: 32.39, isPositive: true },
  { year: 2012, result: 16.0, isPositive: true },
  { year: 2011, result: 2.11, isPositive: true },
  { year: 2010, result: 15.06, isPositive: true },
  { year: 2009, result: 26.46, isPositive: true },
  { year: 2008, result: -36.5, isPositive: false },
  { year: 2007, result: 5.49, isPositive: true },
  { year: 2006, result: 15.79, isPositive: true },
  { year: 2005, result: 4.91, isPositive: true },
  { year: 2004, result: 10.88, isPositive: true },
  { year: 2003, result: 28.68, isPositive: true },
  { year: 2002, result: -22.1, isPositive: false },
  { year: 2001, result: -11.89, isPositive: false },
  { year: 2000, result: -9.1, isPositive: false },
  { year: 1999, result: 21.04, isPositive: true },
];

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
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
