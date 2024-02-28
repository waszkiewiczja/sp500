'use client';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartTypeRegistry,
  Point,
  BubbleDataPoint,
  Color,
  LegendItem,
  TooltipItem,
} from 'chart.js';
import { data, setLabel, setTitle } from './topCompaniesUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export const TopCompanies: React.FC = () => {
  const options = {
    plugins: {
      legend: {
        labels: {
          generateLabels: function (
            chart: ChartJS<
              keyof ChartTypeRegistry,
              (number | [number, number] | Point | BubbleDataPoint | null)[],
              unknown
            >,
          ): LegendItem[] {
            const original =
              ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            let datasetColors = chart.data.datasets.map(function (e) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            labelsOriginal.forEach((label) => {
              if (label && label.index) {
                label.datasetIndex = (label.index - (label.index % 2)) / 2;
                label.fillStyle = datasetColors[label.index] as
                  | Color
                  | undefined;
              }
            });

            return labelsOriginal;
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (
            tooltipItem: { datasetIndex: number; dataIndex: number }[],
          ): string => {
            return setTitle(tooltipItem);
          },
          label: (tooltipItem: TooltipItem<'pie'>): string => {
            return setLabel(tooltipItem);
          },
        },
      },
    },
  };

  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52 ">
      <h2>Top companies by market cap as total market cap each year [%]</h2>
      <h3 className=" text-2xl font-semibold">
        Outer circle is 1 January 2024, Inner circle is 1 January 2023:
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};
