import { TooltipItem } from 'chart.js';
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
import { medianData } from './data';

export const data = {
  datasets: [
    {
      label: medianData[0].range,
      data: medianData[0].data,
      backgroundColor: rangeM35color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 8;
        },
      },
    },
    {
      label: medianData[1].range,
      data: medianData[1].data,
      backgroundColor: rangeM25color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 8;
        },
      },
    },
    {
      label: medianData[2].range,
      data: medianData[2].data,
      backgroundColor: rangeM15color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
    {
      label: medianData[3].range,
      data: medianData[3].data,
      backgroundColor: rangeM5color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
    {
      label: medianData[4].range,
      data: medianData[4].data,
      backgroundColor: range5color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
    {
      label: medianData[5].range,
      data: medianData[5].data,
      backgroundColor: range15color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
    {
      label: medianData[6].range,
      data: medianData[6].data,
      backgroundColor: range25color,
      borderColor: 'black',
      borderWidth: 2,
      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
    {
      label: medianData[7].range,
      data: medianData[7].data,
      backgroundColor: range35color,
      borderColor: 'black',
      borderWidth: 2,

      datalabels: {
        color: 'black',
        formatter: function (context: { r: number }): number {
          return context.r / 7;
        },
      },
    },
  ],
};

export const options = {
  scales: {
    x: {
      min: -40,
      max: 40,
    },
    y: {
      min: 0,
      max: 10,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItems: TooltipItem<'bubble'>[]): string | undefined => {
          return tooltipItems[0].dataset.label;
        },
        label: (tooltipItems: TooltipItem<'bubble'>[]): string => {
          return setLabel(tooltipItems);
        },
      },
    },
  },
};

export const setLabel = (tooltipItem: TooltipItem<'bubble'>[]): string => {
  // @ts-expect-error TS fight with ChartJS about this TooltipItem
  if (tooltipItem.raw.r == 7) {
    // @ts-expect-error TS fight with ChartJS about this TooltipItem
    return tooltipItem.raw.r / 7 + ' time in this interval';
  }
  // @ts-expect-error TS fight with ChartJS about this TooltipItem
  return tooltipItem.raw.r / 7 + ' times in this interval';
};
