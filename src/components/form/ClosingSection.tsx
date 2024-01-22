import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InvestmentFormValues } from './utils';

type ClosingSectionProps = {
  values: InvestmentFormValues;
  setFieldValue: (field: string, value: string) => void;
};

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <div className="flex space-x-10" data-testid="closingSection">
      <div className="w-1/2 mb-4">
        <label
          data-testid="closingDate-label"
          htmlFor="closingDate"
          className="block text-sm font-semibold"
        >
          Closing Date:
        </label>
        <Field
          data-testid="closingDate-input"
          type="date"
          name="closingDate"
          className="w-full border p-2"
        />
        <ErrorMessage
          name="closingDate"
          component="div"
          className="text-red-500"
        />
      </div>

      <div className="w-1/2 mb-4">
        <label
          data-testid="closingPrice-label"
          htmlFor="closingPrice"
          className="block text-sm font-semibold"
        >
          Closing Price:
        </label>
        <Field
          data-testid="closingPrice-input"
          type="number"
          name="closingPrice"
          className="w-full border p-2"
          onFocus={() => {
            if (values.closingPrice === 0) {
              setFieldValue('closingPrice', '');
            }
          }}
        />
        <ErrorMessage
          name="closingPrice"
          component="div"
          className="text-red-500"
        />
      </div>
    </div>
  );
};
