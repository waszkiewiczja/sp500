'use client';
import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import { data, options } from './stackedBarChartUtils';

ChartJS.register(ChartDataLabels);

export const StackedBarChart: React.FC = () => {
  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52">
      <h2>Last 25 years - Return by year [%]</h2>
      <h3 className="text-2xl font-semibold">
        The years were sorted into 10 percent intervals:
      </h3>
      {/* @ts-expect-error ChartJS fights with Typescript here */}
      <Bar data={data} options={options} />
    </div>
  );
};
