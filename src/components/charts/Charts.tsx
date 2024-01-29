import { YearToYear } from '@/components/charts/yearToYear/YearToYear';
import { ReturnSinceYear } from './returnSinceYear/ReturnSinceYear';
import { TopCompanies } from './topCompanies/TopCompanies';
import { HundredReturn } from './hundredReturns/HundredReturns';

export const Charts: React.FC = () => {
  return (
    <main data-testid="yearToYear" className="mt-10">
      <YearToYear />
      <ReturnSinceYear />
      <HundredReturn />
      <TopCompanies />
    </main>
  );
};
