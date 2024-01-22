import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormikData } from './FormikData';
import { waitToResolve } from '@/utils/waitToResolve';

describe('FormikData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const formikDataProps = {
    changeResult: jest.fn(),
  };

  it('should renders Calculate button', () => {
    render(<FormikData {...formikDataProps} />);

    const calculateButton = screen.getByRole('button', { name: /calculate/i });

    expect(calculateButton).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    render(<FormikData {...formikDataProps} />);

    const initialCapitalInput = screen.getByTestId(
      'initialCapital-input',
    ) as HTMLInputElement;
    const startingPriceInput = screen.getByTestId(
      'startingPrice-input',
    ) as HTMLInputElement;
    const closingPriceInput = screen.getByTestId(
      'closingPrice-input',
    ) as HTMLInputElement;
    const calculateButton = screen.getByRole('button', { name: /calculate/i });

    fireEvent.change(initialCapitalInput, { target: { value: 100 } });
    fireEvent.change(startingPriceInput, { target: { value: 10 } });
    fireEvent.change(closingPriceInput, { target: { value: 15 } });

    await waitToResolve();
    fireEvent.click(calculateButton);
    await waitToResolve();

    expect(formikDataProps.changeResult).toHaveBeenCalledTimes(1);
    expect(formikDataProps.changeResult).toHaveBeenCalledWith({
      totalInvestment: 100,
      finalValue: 150,
      roi: 50,
    });
  });
});
