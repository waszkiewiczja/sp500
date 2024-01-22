import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormikData } from './FormikData';

describe('FormikData', () => {
  const formikDataProps = {
    changeResult: jest.fn(),
  };

  it('should render with addSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const addSection = screen.getByTestId('addSection');

    expect(addSection).toBeInTheDocument();
  });

  it('should render with input additionalCapital[0].date', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('additionalCapital[0].date-input');

    expect(input).toBeInTheDocument();
  });

  it('should render with input additionalCapital[0].amount', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('additionalCapital[0].amount-input');

    expect(input).toBeInTheDocument();
  });

  it('should render with input additionalCapital[0].purchasePrice', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId(
      'additionalCapital[0].purchasePrice-input',
    );

    expect(input).toBeInTheDocument();
  });

  it('should render with label additionalCapital[0].date', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('additionalCapital[0].date-label');

    expect(input).toBeInTheDocument();
  });

  it('should render with label additionalCapital[0].amount', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId('additionalCapital[0].amount-label');

    expect(input).toBeInTheDocument();
  });

  it('should render with label additionalCapital[0].purchasePrice', () => {
    render(<FormikData {...formikDataProps} />);

    const input = screen.getByTestId(
      'additionalCapital[0].purchasePrice-label',
    );

    expect(input).toBeInTheDocument();
  });
});
