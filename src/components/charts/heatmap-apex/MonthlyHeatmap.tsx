'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const MonthlyHeatmap: React.FC = () => {
  const options = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
        width: '100%',
      },
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: -10,
              to: -4.001,
              name: 'very low',
              color: '#ff7474',
            },
            { from: -4, to: -0.001, name: 'low', color: '#f18bc0' },
            { from: 0, to: 2.999, name: 'medium', color: '#ffff7f' },
            { from: 3, to: 5.999, name: 'high', color: '#b8dfca' },
            {
              from: 6,
              to: 66,
              name: 'very high',
              color: '#8af3a1',
            },
          ],
        },
      },
    },
    dataLabels: { enabled: true, style: { colors: ['#104c6d'] } },
    xaxis: {
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: true,
        trim: true,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: '12px',
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: 0,
        offsetY: 0,
      },
    },
  };

  const series = [
    {
      name: '2022',
      data: [
        { x: 'January', y: -5.26 },
        { x: 'February', y: -3.14 },
        { x: 'March', y: 3.58 },
        { x: 'April', y: -8.8 },
        { x: 'May', y: 0.01 },
        { x: 'June', y: -8.39 },
        { x: 'July', y: 9.11 },
        { x: 'August', y: -4.24 },
        { x: 'September', y: -9.34 },
        { x: 'October', y: 7.99 },
        { x: 'November', y: 5.38 },
        { x: 'December', y: -5.9 },
      ],
    },
    {
      name: '2023',
      data: [
        { x: 'January', y: 6.18 },
        { x: 'February', y: -2.61 },
        { x: 'March', y: 3.51 },
        { x: 'April', y: 1.46 },
        { x: 'May', y: 0.25 },
        { x: 'June', y: 6.47 },
        { x: 'July', y: 3.11 },
        { x: 'August', y: -1.77 },
        { x: 'September', y: -4.87 },
        { x: 'October', y: -2.2 },
        { x: 'November', y: 8.92 },
        { x: 'December', y: 4.42 },
      ],
    },
  ];

  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52 ">
      <h2>Monthly Return Heatmap [%]</h2>
      <h3 className=" text-2xl font-semibold">Return since 2022:</h3>

      {typeof window !== 'undefined' && (
        <Chart options={options} series={series} type="heatmap" />
      )}
    </div>
  );
};
