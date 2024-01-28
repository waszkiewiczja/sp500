import { YearToYear } from '@/components/charts/YearToYear';
import { ReturnSinceYear } from './ReturnSinceYear';

export const Charts: React.FC = () => {
  return (
    <main data-testid="yearToYear">
      <YearToYear />
      <ReturnSinceYear />
    </main>
  );
};
