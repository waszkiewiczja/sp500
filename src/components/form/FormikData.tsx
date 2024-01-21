import { Formik, FieldArray, Form, Field } from 'formik';
import {
  InvestmentFormValues,
  calculateFinalValue,
  calculateROI,
  calculateTotalInvestment,
  calculateTotalNumberOfShares,
} from './utils';
import { Result } from '../InvestmentCalculatorClient';

type FormikDataPropsType = {
  changeResult: (newData: Result | null) => void;
};

export const FormikData: React.FC<FormikDataPropsType> = ({ changeResult }) => {
  const handleSubmit = (values: InvestmentFormValues): void => {
    const startingPrice = values.startingPrice;
    const initialCapital = values.initialCapital;
    const totalInvestment = calculateTotalInvestment(
      values.initialCapital,
      values.additionalCapital
    );
    const initialNumberOfShares = initialCapital / startingPrice;

    const addedShares = calculateTotalNumberOfShares(values.additionalCapital);

    const totalShares = initialNumberOfShares + addedShares;

    const finalValue = calculateFinalValue(totalShares, values.closingPrice);

    const roi = calculateROI(totalInvestment, finalValue);

    changeResult({
      totalInvestment,
      finalValue,
      roi,
    });
  };

  return (
    <Formik
      initialValues={{
        startingPrice: 0,
        initialCapital: 0,
        additionalCapital: [{ date: '', amount: 0, purchasePrice: 0 }],
        closingDate: '',
        closingPrice: 0,
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="grid gap-4">
          <div className="flex space-x-10" data-testid="initialSection">
            <div className="w-1/2  mb-4">
              <label className="block text-sm font-semibold">
                Initial Capital:
              </label>
              <Field
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
            </div>
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-semibold">
                Purchase Price:
              </label>
              <Field
                type="number"
                name="startingPrice"
                className="w-full border p-2"
                onFocus={() => {
                  if (values.startingPrice === 0) {
                    setFieldValue('startingPrice', '');
                  }
                }}
              />
            </div>
          </div>

          <div className="mb-4" data-testid="addSection">
            <label className="block text-sm font-semibold">
              Additional Capital:
            </label>
            <FieldArray name="additionalCapital">
              {({ push, remove }) => (
                <div className="grid">
                  {values.additionalCapital.map((_, index) => (
                    <div key={index} className="grid gap-4">
                      <label className="block text-sm font-semibold mt-6">
                        Date:
                      </label>
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
                              if (
                                values.additionalCapital[index].amount === 0
                              ) {
                                setFieldValue(
                                  `additionalCapital[${index}].amount`,
                                  ''
                                );
                              }
                            }}
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
                              if (
                                values.additionalCapital[index]
                                  .purchasePrice === 0
                              ) {
                                setFieldValue(
                                  `additionalCapital[${index}].purchasePrice`,
                                  ''
                                );
                              }
                            }}
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
                    onClick={() =>
                      push({ date: '', amount: 0, purchasePrice: 0 })
                    }
                    className="bg-blue-500 text-white px-3 py-2 rounded mt-4"
                  >
                    Add More
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          <div className="flex space-x-10" data-testid="closingSection">
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-semibold">
                Closing Date:
              </label>
              <Field
                type="date"
                name="closingDate"
                className="w-full border p-2"
              />
            </div>

            <div className="w-1/2 mb-4">
              <label className="block text-sm font-semibold">
                Closing Price:
              </label>
              <Field
                type="number"
                name="closingPrice"
                className="w-full border p-2"
                onFocus={() => {
                  if (values.closingPrice === 0) {
                    setFieldValue('closingPrice', '');
                  }
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Calculate
          </button>
        </Form>
      )}
    </Formik>
  );
};
