import { Result } from './InvestmentCalculatorClient';

type ResultsPropsType = {
  result: Result | null;
};

const resultStyle = `mt-4 p-4 border rounded-md bg-green-100 border-green-500`;

export const Results: React.FC<ResultsPropsType> = ({ result }) => {
  if (!result) return null;

  return (
    <div data-testid="results" className={resultStyle}>
      <h2 className="text-lg font-bold mb-2">Result:</h2>
      <p data-testid="totalInvestment">
        Total Investment:{' '}
        {result.totalInvestment.toLocaleString('en-US', {
          style: 'currency',

          currency: 'USD',
        })}
      </p>
      <p data-testid="finalValue">
        Final Value:{' '}
        {result.finalValue.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <p data-testid="roi">ROI: {result.roi.toFixed(2)}%</p>
    </div>
  );
};
