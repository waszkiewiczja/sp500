import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormikData } from './FormikData';
import { waitToResolve } from '@/utils/waitToResolve';

describe('FormikData', () => {
  const formikDataProps = {
    changeResult: jest.fn(),
  };
  it('should render with initialSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const initialSection = screen.getByTestId('initialSection');

    expect(initialSection).toBeInTheDocument();
  });

  it('should render with input initialCapital', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('initialCapital-input');

    expect(input).toBeInTheDocument();
  });

  it('should render with input startingPrice', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('startingPrice-input');

    expect(input).toBeInTheDocument();
  });

  it('should change input initialCapital', async () => {
    render(<FormikData {...formikDataProps} />);

    const initialCapitalInput = screen.getByTestId(
      'initialCapital-input',
    ) as HTMLInputElement;
    expect(initialCapitalInput.value).toBe('0');

    fireEvent.change(initialCapitalInput, { target: { value: 100 } });
    await waitToResolve();

    expect(initialCapitalInput.value).toBe('100');
  });

  it('should change input startingPrice', async () => {
    render(<FormikData {...formikDataProps} />);

    const startingPriceInput = screen.getByTestId(
      'startingPrice-input',
    ) as HTMLInputElement;
    expect(startingPriceInput.value).toBe('0');

    fireEvent.change(startingPriceInput, { target: { value: 100 } });
    await waitToResolve();

    expect(startingPriceInput.value).toBe('100');
  });

  it('should render with label initialCapital', () => {
    render(<FormikData {...formikDataProps} />);

    const label = screen.getByTestId('initialCapital-label');

    expect(label).toBeInTheDocument();
  });

  it('should render with label startingPrice', () => {
    render(<FormikData {...formikDataProps} />);

    const label = screen.getByTestId('startingPrice-label');

    expect(label).toBeInTheDocument();
  });
});
