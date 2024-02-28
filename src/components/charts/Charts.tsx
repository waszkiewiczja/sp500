import { YearToYear } from '@/components/charts/bar-redgreen/YearToYear';
import { ReturnSinceYear } from './bar-blue/ReturnSinceYear';
import { MedianReturn } from './bubble/MedianReturn';
import { StackedBarChart } from './stepped/StackedBarChart';
import { TopCompanies } from './pie/TopCompanies';
import { HundredReturn } from './bar-green/HundredReturns';
import { MonthlyReturn } from './bar-redblue/MonthlyReturn';
import { CandlestickChart } from './candlestick/CandlestickChart';
import { StockHeatmap } from '../d3/heatmap/StockHeatmap';
import { Pyramid } from '../d3/pyramid/Pyramid';

export const Charts: React.FC = () => {
  return (
    <main data-testid="yearToYear" className="mb-52">
      <StockHeatmap />
      <CandlestickChart />
      <MedianReturn />
      <StackedBarChart />
      <YearToYear />
      <ReturnSinceYear />
      <HundredReturn />
      <TopCompanies />
      <MonthlyReturn />
      <Pyramid />
    </main>
  );
};
