import { Start } from './bar-transition/Start';
import { BasicCircle } from './just-circle/BasicCircle';
import { BasicBarchart } from './bar/BasicBarchart';
import { StockHeatmap } from './heatmap/StockHeatmap';
import { Pyramid } from './pyramid/Pyramid';
import { Stacked } from './stacked-bar/Stacked';

export const Upside: React.FC = () => {
  return (
    <main className="bg-gray-700  mb-72 pb-72">
      {/* <Start /> */}
      {/* <BasicCircle /> */}
      <BasicBarchart />
      {/* <StockHeatmap /> */}
      {/* <Pyramid /> */}
      <Stacked />
    </main>
  );
};
