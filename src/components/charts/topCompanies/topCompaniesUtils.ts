import { TooltipItem } from 'chart.js';
import { companiesByMarketCap2023, companiesByMarketCap2024 } from './data';

export const data = {
  labels: [...companiesByMarketCap2024, ...companiesByMarketCap2023].map(
    (data) => data.company,
  ),

  datasets: [
    {
      data: companiesByMarketCap2024.map((data) => data.marketCap),
      backgroundColor: companiesByMarketCap2024.map(
        (data) => data.companyColor,
      ),
      label: '2024',
      color: 'white',
      datalabels: { color: 'white' },
    },
    {
      data: companiesByMarketCap2023.map((data) => data.marketCap),
      backgroundColor: companiesByMarketCap2023.map(
        (data) => data.companyColor,
      ),
      label: '2023',
      datalabels: { color: 'white' },
    },

    {
      data: [0],
      backgroundColor: [],
      hoverBackgroundColor: [],
      label: '',
      datalabels: { color: 'white' },
    },
  ],
};

export const setTitle = (
  tooltipItem: { datasetIndex: number; dataIndex: number }[],
): string => {
  if (tooltipItem[0].datasetIndex === 0)
    return companiesByMarketCap2024[tooltipItem[0].dataIndex].company;
  else if (tooltipItem[0].datasetIndex === 1)
    return companiesByMarketCap2023[tooltipItem[0].dataIndex].company;
  return '';
};

export const setLabel = (tooltipItem: TooltipItem<'pie'>): string => {
  let label = tooltipItem.dataset.label || '';

  if (label) label += ': ';

  if (tooltipItem.parsed !== null) {
    label += tooltipItem.formattedValue + '%';
  }
  return label;
};
