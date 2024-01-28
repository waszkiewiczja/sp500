import React from 'react';
import { Field, FieldArray, ErrorMessage } from 'formik';
import { InvestmentFormValues } from './utils';

type AddSectionProps = {
  values: InvestmentFormValues;
  setFieldValue: (field: string, value: string) => void;
};

export const AddSection: React.FC<AddSectionProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <div className="mb-4" data-testid="addSection">
      <p className="block text-sm font-semibold">Additional Capital:</p>
      <FieldArray name="additionalCapital">
        {({ push, remove }) => (
          <div className="grid">
            {values.additionalCapital.map((_, index) => {
              const timestamp = new Date().toISOString();
              return (
                <div key={timestamp} className="grid gap-4">
                  <label
                    data-testid={`additionalCapital[${index}].date-label`}
                    htmlFor={`additionalCapital[${index}].date`}
                    className="block text-sm font-semibold mt-6 -mb-4"
                  >
                    Date:
                  </label>
                  <Field
                    data-testid={`additionalCapital[${index}].date-input`}
                    type="date"
                    name={`additionalCapital[${index}].date`}
                    className="w-full border p-2"
                  />
                  <div className="flex space-x-10">
                    <div className="w-1/2  mb-4">
                      <label
                        data-testid={`additionalCapital[${index}].amount-label`}
                        htmlFor={`additionalCapital[${index}].amount`}
                        className="block text-sm font-semibold"
                      >
                        Capital:
                      </label>
                      <Field
                        data-testid={`additionalCapital[${index}].amount-input`}
                        type="number"
                        name={`additionalCapital[${index}].amount`}
                        className="w-full border p-2"
                        onFocus={() => {
                          if (values.additionalCapital[index].amount === 0) {
                            setFieldValue(
                              `additionalCapital[${index}].amount`,
                              '',
                            );
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
                      <label
                        data-testid={`additionalCapital[${index}].purchasePrice-label`}
                        htmlFor={`additionalCapital[${index}].purchasePrice`}
                        className="block text-sm font-semibold"
                      >
                        Purchase Price:
                      </label>
                      <Field
                        data-testid={`additionalCapital[${index}].purchasePrice-input`}
                        type="number"
                        name={`additionalCapital[${index}].purchasePrice`}
                        className="w-full border p-2"
                        onFocus={() => {
                          if (
                            values.additionalCapital[index].purchasePrice === 0
                          ) {
                            setFieldValue(
                              `additionalCapital[${index}].purchasePrice`,
                              '',
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
              );
            })}
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
};
