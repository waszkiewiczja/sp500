import {
  BubbleDataPoint,
  Chart as ChartJS,
  ChartTypeRegistry,
  LegendItem,
  Point,
  TooltipItem,
} from 'chart.js';
import {
  range15color,
  range25color,
  range35color,
  range5color,
  rangeM15color,
  rangeM25color,
  rangeM35color,
  rangeM5color,
} from '../utils';

const range15data = [0, 0, 0, 0, 0, 1];
const range5data = [0, 0, 0, 0, 1];
const rangeM5data = [0, 0, 0, 1];
const rangeM15data = [0, 0, 1];
const rangeM25data = [0, 1];
const rangeM35data = [1];

const commonStyle = {
  borderColor: 'black',
  borderWidth: 4,
};

const setDatalabels = (
  elementId: number,
): {
  color: string;
  formatter: (
    _index: number,
    context: {
      dataIndex: number;
      dataset: {
        label: string;
      };
    },
  ) => string;
} => {
  return {
    color: 'black',
    formatter: function (
      _index: number,
      context: { dataIndex: number; dataset: { label: string } },
    ): string {
      if (context.dataIndex === elementId) return context.dataset.label;
      return '';
    },
  };
};

const setTitle = (context: { label: string }[]): string => {
  if (context[0].label === '35') return '30 : 40%';
  else if (context[0].label === '25') return '20 : 30%';
  else if (context[0].label === '15') return '10 : 20%';
  else if (context[0].label === '5') return '0 : 10%';
  else if (context[0].label === '-5') return '-10 : 0%';
  else if (context[0].label === '-15') return '-20 : -10%';
  else if (context[0].label === '-25') return '-30 : -20%';
  else if (context[0].label === '-35') return '-40 : -30%';
  return context[0].label + '%';
};

const setLabels = (
  chart: ChartJS<
    keyof ChartTypeRegistry,
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >,
): LegendItem[] => {
  const original = ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
  const labelsOriginal = original.call(this, chart);
  labelsOriginal.forEach((label) => {
    if (label.index === 0) {
      label.fillStyle = rangeM35color;
      label.text = '-40 : -30%';
    } else if (label.index === 1) {
      label.fillStyle = rangeM25color;
      label.text = '-30 : -20%';
    } else if (label.index === 2) {
      label.fillStyle = rangeM15color;
      label.text = '-20 : -10%';
    } else if (label.index === 3) {
      label.fillStyle = rangeM5color;
      label.text = '-10 : 0%';
    } else if (label.index === 4) {
      label.fillStyle = range5color;
      label.text = '0 : 10%';
    } else if (label.index === 5) {
      label.fillStyle = range15color;
      label.text = '10 : 20%';
    } else if (label.index === 6) {
      label.fillStyle = range25color;
      label.text = '20 : 30%';
    } else if (label.index === 7) {
      label.fillStyle = range35color;
      label.text = '30 : 40%';
    }
  });
  return labelsOriginal;
};

export const options = {
  scales: {
    x: {
      stacked: true,
      grid: { offset: false },
    },
    y: {
      stacked: true,
    },
  },
  barPercentage: 0.9,
  categoryPercentage: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels: (
          chart: ChartJS<
            keyof ChartTypeRegistry,
            (number | [number, number] | Point | BubbleDataPoint | null)[],
            unknown
          >,
        ): LegendItem[] => {
          return setLabels(chart);
        },
      },
    },
    tooltip: {
      callbacks: {
        title: (context: { label: string }[]): string => {
          return setTitle(context);
        },
        label: (tooltipItem: TooltipItem<'bar'>): string => {
          return tooltipItem.dataset.label || '';
        },
      },
    },
  },
};

export const data = {
  labels: ['-35', '-25', '-15', '-5', '5', '15', '25', '35'],

  datasets: [
    {
      label: '2013',
      data: [, , , , , , , 1],
      backgroundColor: range35color,
      ...commonStyle,
      datalabels: setDatalabels(7),
    },
    {
      label: '2019',
      data: [, , , , , , , 1],
      backgroundColor: range35color,
      ...commonStyle,
      datalabels: setDatalabels(7),
    },
    {
      label: '1999',
      data: [, , , , , , 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2003',
      data: [, , , , , , 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2009',
      data: [0, 0, 0, 0, 0, 0, 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2017',
      data: [0, 0, 0, 0, 0, 0, 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2021',
      data: [0, 0, 0, 0, 0, 0, 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2023',
      data: [0, 0, 0, 0, 0, 0, 1],
      backgroundColor: range25color,
      ...commonStyle,
      datalabels: setDatalabels(6),
    },
    {
      label: '2004',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2006',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2010',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2012',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2014',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2016',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2020',
      data: range15data,
      backgroundColor: range15color,
      ...commonStyle,
      datalabels: setDatalabels(5),
    },
    {
      label: '2005',
      data: range5data,
      backgroundColor: range5color,
      ...commonStyle,
      datalabels: setDatalabels(4),
    },
    {
      label: '2007',
      data: range5data,
      backgroundColor: range5color,
      ...commonStyle,
      datalabels: setDatalabels(4),
    },
    {
      label: '2011',
      data: range5data,
      backgroundColor: range5color,
      ...commonStyle,
      datalabels: setDatalabels(4),
    },
    {
      label: '2015',
      data: range5data,
      backgroundColor: range5color,
      ...commonStyle,
      datalabels: setDatalabels(4),
    },
    {
      label: '2000',
      data: rangeM5data,
      backgroundColor: rangeM5color,
      ...commonStyle,
      datalabels: setDatalabels(3),
    },
    {
      label: '2018',
      data: rangeM5data,
      backgroundColor: rangeM5color,
      ...commonStyle,
      datalabels: setDatalabels(3),
    },
    {
      label: '2001',
      data: rangeM15data,
      backgroundColor: rangeM15color,
      ...commonStyle,
      datalabels: setDatalabels(2),
    },
    {
      label: '2022',
      data: rangeM15data,
      backgroundColor: rangeM15color,
      ...commonStyle,
      datalabels: setDatalabels(2),
    },
    {
      label: '2002',
      data: rangeM25data,
      backgroundColor: rangeM25color,
      ...commonStyle,
      datalabels: setDatalabels(1),
    },
    {
      label: '2008',
      data: rangeM35data,
      backgroundColor: rangeM35color,
      ...commonStyle,
      datalabels: setDatalabels(0),
    },
  ],
};
