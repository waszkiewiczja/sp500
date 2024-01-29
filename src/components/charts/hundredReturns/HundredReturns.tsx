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
import { data, options } from './hundredReturnUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const HundredReturn: React.FC = () => {
  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52 ">
      <h2>Value of $100 invested in year [$]</h2>
      <h3 className=" text-2xl font-semibold"> Till end of 2023:</h3>
      <Bar options={options} data={data} />
    </div>
  );
};
