import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormikData } from './FormikData';

describe('FormikData', () => {
  const formikDataProps = {
    changeResult: jest.fn(),
  };
  it('should render with initialSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const initialSection = screen.getByTestId('initialSection');

    expect(initialSection).toBeInTheDocument();
  });

  it('should render with initialSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const initialSection = screen.getByTestId('addSection');

    expect(initialSection).toBeInTheDocument();
  });

  it('should render with initialSection elements', () => {
    render(<FormikData {...formikDataProps} />);

    const initialSection = screen.getByTestId('closingSection');

    expect(initialSection).toBeInTheDocument();
  });
});
