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
import { data, options } from './returnSinceYearUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const ReturnSinceYear: React.FC = () => {
  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52 ">
      <h2>Annualized Returns [%]</h2>
      <h3 className=" text-2xl font-semibold">
        Return since beginning of each year to the end of 2023:
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
};
