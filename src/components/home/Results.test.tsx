import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { Result } from './InvestmentCalculator';

describe('Results', () => {
  it('should not render results component when props in null', () => {
    render(<Results result={null} />);

    const results = screen.queryByTestId('results');

    expect(results).not.toBeInTheDocument();
  });

  const result: Result = {
    totalInvestment: 1500,
    finalValue: 2250,
    roi: 0.5,
  };

  it('should render results component when props in valid', () => {
    render(<Results result={result} />);

    const results = screen.getByTestId('results');

    expect(results).toBeInTheDocument();
  });

  it('should render with Total Investment data', () => {
    render(<Results result={result} />);

    const resultsContainer = screen.getByTestId('totalInvestment');

    expect(resultsContainer).toHaveTextContent('Total Investment: $1,500.00');
  });

  it('should render with Final Value data', () => {
    render(<Results result={result} />);

    const resultsContainer = screen.getByTestId('finalValue');

    expect(resultsContainer).toHaveTextContent('Final Value: $2,250.00');
  });

  it('should render with ROI data', () => {
    render(<Results result={result} />);

    const resultsContainer = screen.getByTestId('roi');

    expect(resultsContainer).toHaveTextContent('ROI: 0.50%');
  });
});
