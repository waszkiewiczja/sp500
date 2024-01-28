import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormikData } from './FormikData';
import { waitToResolve } from '@/utils/waitToResolve';

describe('FormikData', () => {
  const formikDataProps = {
    changeResult: jest.fn(),
  };

  it('should render with closingSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const closingSection = screen.getByTestId('closingSection');

    expect(closingSection).toBeInTheDocument();
  });

  it('should render with input closingDate', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('closingDate-input');

    expect(input).toBeInTheDocument();
  });

  it('should render with input closingPrice', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('closingPrice-input');

    expect(input).toBeInTheDocument();
  });

  it('should change input closingPrice', async () => {
    render(<FormikData {...formikDataProps} />);

    const closingPriceInput = screen.getByTestId(
      'closingPrice-input',
    ) as HTMLInputElement;
    expect(closingPriceInput.value).toBe('0');

    fireEvent.change(closingPriceInput, { target: { value: 100 } });
    await waitToResolve();

    expect(closingPriceInput.value).toBe('100');
  });

  it('should render with label closingDate', () => {
    render(<FormikData {...formikDataProps} />);

    const label = screen.getByTestId('closingDate-label');

    expect(label).toBeInTheDocument();
  });

  it('should render with label closingPrice', () => {
    render(<FormikData {...formikDataProps} />);

    const label = screen.getByTestId('closingPrice-label');

    expect(label).toBeInTheDocument();
  });
});
