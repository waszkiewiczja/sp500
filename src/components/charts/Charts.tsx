import { YearToYear } from '@/components/charts/yearToYear/YearToYear';
import { ReturnSinceYear } from './returnSinceYear/ReturnSinceYear';
import { TopCompanies } from './topCompanies/TopCompanies';
import { HundredReturn } from './hundredReturns/HundredReturns';
import { MedianReturn } from './median/MedianReturn';
import StackedBarChart from './steppedReturn/StackedBarChart';

export const Charts: React.FC = () => {
  return (
    <main data-testid="yearToYear">
      <YearToYear />
      <ReturnSinceYear />
      <MedianReturn />
      <StackedBarChart />
      <HundredReturn />
      <TopCompanies />
    </main>
  );
};
