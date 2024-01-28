import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InvestmentCalculatorClient from './InvestmentCalculator';

describe('InvestmentCalculatorClient', () => {
  it('should render proper componenet', () => {
    render(<InvestmentCalculatorClient />);

    const result = screen.getByTestId('investmentCalculatorClient');

    expect(result).toBeInTheDocument();
  });
});
