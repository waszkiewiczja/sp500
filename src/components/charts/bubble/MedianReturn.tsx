'use client';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, PointElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { data, options } from './medianReturnUtils';

ChartJS.register(Tooltip, ChartDataLabels, PointElement);

export const MedianReturn: React.FC = () => {
  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52 ">
      <h2>Last 25 years - Most frequent returns [%]</h2>
      <h3 className="text-2xl font-semibold">
        The years were sorted into 10 percent intervals:
      </h3>
      {/* @ts-expect-error ChartJS fights with Typescript here */}
      <Bubble data={data} options={options} />
    </div>
  );
};
