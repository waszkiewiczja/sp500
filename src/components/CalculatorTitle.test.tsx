import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CalculatorTitle } from './CalculatorTitle';

describe('CalculatorTitle', () => {
  it('should render proper calculator title', () => {
    render(<CalculatorTitle />);

    const title = screen.getByTestId('title');

    expect(title).toBeInTheDocument();
  });
});
