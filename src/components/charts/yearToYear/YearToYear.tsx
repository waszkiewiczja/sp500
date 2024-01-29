'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { data, options } from './yearToYearUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const YearToYear: React.FC = () => {
  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold ">
      <h2>S&P 500 Annual Returns [%]</h2>
      <h3 className="text-2xl font-semibold">
        Since 1 January till 31 December:
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
};
