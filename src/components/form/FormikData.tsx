import { Formik, Form } from 'formik';
import { handleSubmit } from './utils';
import { Result } from '../InvestmentCalculatorClient';
import calculateSchema from './validationSchema';
import { InitialSection } from './InitialSection';
import { ClosingSection } from './ClosingSection';
import { AddSection } from './AddSection';

type FormikDataPropsType = {
  changeResult: (newData: Result | null) => void;
};

export const FormikData: React.FC<FormikDataPropsType> = ({ changeResult }) => {
  return (
    <Formik
      initialValues={{
        startingPrice: 0,
        initialCapital: 0,
        additionalCapital: [{ date: '', amount: 0, purchasePrice: 0 }],
        closingDate: '',
        closingPrice: 0,
      }}
      onSubmit={(values) => handleSubmit(values, changeResult)}
      validationSchema={calculateSchema}
    >
      {({ values, setFieldValue }) => (
        <Form className="grid gap-4">
          <InitialSection values={values} setFieldValue={setFieldValue} />
          <AddSection values={values} setFieldValue={setFieldValue} />
          <ClosingSection values={values} setFieldValue={setFieldValue} />

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
