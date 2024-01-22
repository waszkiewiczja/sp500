import React from 'react';
import { Field, FieldArray, ErrorMessage } from 'formik';
import { InvestmentFormValues } from './utils';

type AddSectionProps = {
  values: InvestmentFormValues;
  setFieldValue: (field: string, value: string) => void;
};

const AddSection: React.FC<AddSectionProps> = ({ values, setFieldValue }) => (
  <div className="mb-4" data-testid="addSection">
    <label className="block text-sm font-semibold">Additional Capital:</label>
    <FieldArray name="additionalCapital">
      {({ push, remove }) => (
        <div className="grid">
          {values.additionalCapital.map((_, index) => (
            <div key={index} className="grid gap-4">
              <label className="block text-sm font-semibold mt-6">Date:</label>
              <Field
                type="date"
                name={`additionalCapital[${index}].date`}
                className="w-full border p-2"
              />
              <div className="flex space-x-10">
                <div className="w-1/2  mb-4">
                  <label className="block text-sm font-semibold">
                    Capital:
                  </label>
                  <Field
                    type="number"
                    name={`additionalCapital[${index}].amount`}
                    className="w-full border p-2"
                    onFocus={() => {
                      if (values.additionalCapital[index].amount === 0) {
                        setFieldValue(`additionalCapital[${index}].amount`, '');
                      }
                    }}
                  />
                  <ErrorMessage
                    name={`additionalCapital[${index}].amount`}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-1/2  mb-4">
                  <label className="block text-sm font-semibold">
                    Purchase Price:
                  </label>
                  <Field
                    type="number"
                    name={`additionalCapital[${index}].purchasePrice`}
                    className="w-full border p-2"
                    onFocus={() => {
                      if (values.additionalCapital[index].purchasePrice === 0) {
                        setFieldValue(
                          `additionalCapital[${index}].purchasePrice`,
                          ''
                        );
                      }
                    }}
                  />
                  <ErrorMessage
                    name={`additionalCapital[${index}].purchasePrice`}
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Remove
              </button>
              <hr></hr>
            </div>
          ))}
          <button
            type="button"
            onClick={() => push({ date: '', amount: 0, purchasePrice: 0 })}
            className="bg-blue-500 text-white px-3 py-2 rounded mt-4"
          >
            Add More
          </button>
        </div>
      )}
    </FieldArray>
  </div>
);

export default AddSection;
