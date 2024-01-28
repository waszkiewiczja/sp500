import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InvestmentFormValues } from './utils';

type InitialSectionProps = {
  values: InvestmentFormValues;
  setFieldValue: (field: string, value: string | number) => void;
};

export const InitialSection: React.FC<InitialSectionProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <div className="flex space-x-10" data-testid="initialSection">
      <div className="w-1/2 mb-4">
        <label
          data-testid="initialCapital-label"
          htmlFor="initialCapital"
          className="block text-sm font-semibold"
        >
          Initial Capital:
        </label>
        <Field
          data-testid="initialCapital-input"
          type="number"
          name="initialCapital"
          className="w-full border p-2"
          onFocus={() => {
            if (values.initialCapital === 0) {
              setFieldValue('initialCapital', '');
            }
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (!e.target.value) {
              setFieldValue('initialCapital', 0);
            }
          }}
        />
        <ErrorMessage
          name="initialCapital"
          component="div"
          className="text-red-500"
        />
      </div>

      <div className="w-1/2 mb-4">
        <label
          data-testid="startingPrice-label"
          htmlFor="startingPrice"
          className="block text-sm font-semibold"
        >
          Purchase Price:
        </label>
        <Field
          data-testid="startingPrice-input"
          type="number"
          name="startingPrice"
          className="w-full border p-2"
          onFocus={() => {
            if (values.startingPrice === 0) {
              setFieldValue('startingPrice', '');
            }
          }}
        />
        <ErrorMessage
          name="startingPrice"
          component="div"
          className="text-red-500"
        />
      </div>
    </div>
  );
};
