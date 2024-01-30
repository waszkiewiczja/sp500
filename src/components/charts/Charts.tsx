import { YearToYear } from '@/components/charts/yearToYear/YearToYear';
import { ReturnSinceYear } from './returnSinceYear/ReturnSinceYear';
import { MedianReturn } from './median/MedianReturn';
import { StackedBarChart } from './steppedReturn/StackedBarChart';
import { TopCompanies } from './topCompanies/TopCompanies';
import { HundredReturn } from './hundredReturns/HundredReturns';
import { MonthlyReturn } from './monthly/MonthlyReturn';
import { MonthlyHeatmap } from './monthlyHeatmap/monthlyHeatmap';

export const Charts: React.FC = () => {
  return (
    <main data-testid="yearToYear" className="mb-52">
      <YearToYear />
      <ReturnSinceYear />
      <MedianReturn />
      <StackedBarChart />
      <HundredReturn />
      <TopCompanies />
      <MonthlyReturn />
      <MonthlyHeatmap />
    </main>
  );
};
