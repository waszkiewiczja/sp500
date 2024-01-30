export type MonthData = {
  month: string;
  result: number;
  isPositive: boolean;
};

export const monthlyData: MonthData[] = [
  { month: '12.2023', result: 4.42, isPositive: true },
  { month: '11.2023', result: 8.92, isPositive: true },
  { month: '10.2023', result: -2.2, isPositive: false },
  { month: '9.2023', result: -4.87, isPositive: false },
  { month: '8.2023', result: -1.77, isPositive: false },
  { month: '7.2023', result: 3.11, isPositive: true },
  { month: '6.2023', result: 6.47, isPositive: true },
  { month: '5.2023', result: 0.25, isPositive: true },
  { month: '4.2023', result: 1.46, isPositive: true },
  { month: '3.2023', result: 3.51, isPositive: true },
  { month: '2.2023', result: -2.61, isPositive: false },
  { month: '1.2023', result: 6.18, isPositive: true },
];
