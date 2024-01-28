export const returnSinceYearData = [
  {
    since: 2023,
    total: 24.2,
    years: 1,
    annualized: 24.2,
  },
  {
    since: 2022,
    total: 0.1,
    years: 2,
    annualized: 0.05,
  },
  {
    since: 2021,
    total: 26.99,
    years: 3,
    annualized: 8.29,
  },
  {
    since: 2020,
    total: 47.45,
    years: 4,
    annualized: 10.19,
  },
  {
    since: 2019,
    total: 90.27,
    years: 5,
    annualized: 13.73,
  },
  {
    since: 2018,
    total: 78.4,
    years: 6,
    annualized: 10.13,
  },
  {
    since: 2017,
    total: 113.05,
    years: 7,
    annualized: 11.41,
  },
  {
    since: 2016,
    total: 133.36,
    years: 8,
    annualized: 11.17,
  },
  {
    since: 2015,
    total: 131.67,
    years: 9,
    annualized: 9.78,
  },
  {
    since: 2014,
    total: 158.06,
    years: 10,
    annualized: 9.94,
  },
  {
    since: 2013,
    total: 234.45,
    years: 11,
    annualized: 11.6,
  },
  {
    since: 2012,
    total: 279.28,
    years: 12,
    annualized: 11.75,
  },
  {
    since: 2011,
    total: 279.27,
    years: 13,
    annualized: 10.8,
  },
  {
    since: 2010,
    total: 327.75,
    years: 14,
    annualized: 10.94,
  },
  {
    since: 2009,
    total: 428.07,
    years: 15,
    annualized: 11.73,
  },
  {
    since: 2008,
    total: 224.84,
    years: 16,
    annualized: 7.64,
  },
  {
    since: 2007,
    total: 236.31,
    years: 17,
    annualized: 7.4,
  },
  {
    since: 2006,
    total: 282.11,
    years: 18,
    annualized: 7.73,
  },
  {
    since: 2005,
    total: 293.58,
    years: 19,
    annualized: 7.48,
  },
  {
    since: 2004,
    total: 328.97,
    years: 20,
    annualized: 7.55,
  },
  {
    since: 2003,
    total: 442.14,
    years: 21,
    annualized: 8.38,
  },
  {
    since: 2002,
    total: 315.46,
    years: 22,
    annualized: 6.69,
  },
  {
    since: 2001,
    total: 261.27,
    years: 23,
    annualized: 5.74,
  },
  {
    since: 2000,
    total: 224.64,
    years: 24,
    annualized: 5.03,
  },
  {
    since: 1999,
    total: 288.03,
    years: 25,
    annualized: 5.57,
  },
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

export const green = 'rgb(124,195,5)';
export const darkGreen = 'rgb(101 163 13)';
export const red = 'rgb(246, 94,97)';
export const darkRed = 'rgb(190 18 60)';

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
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
