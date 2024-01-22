import * as Yup from 'yup';

export const calculateSchema = Yup.object().shape({
  startingPrice: Yup.number()
    .moreThan(0, 'Starting Price must be greater than 0')
    .required('Starting Price is required'),
  initialCapital: Yup.number()
    .moreThan(0, 'Initial Capital must be greater than 0')
    .required('Initial Capital is required'),
  additionalCapital: Yup.array().of(
    Yup.object().shape({
      amount: Yup.number()
        .min(0, 'Capital must be greater than or equal to 0')
        .required('Capital is required'),
      purchasePrice: Yup.number()
        .min(0, 'Purchase Price must be greater than or equal to 0')
        .required('Purchase Price is required'),
    })
  ),
  closingPrice: Yup.number()
    .min(0, 'Closing Price must be greater than or equal to 0')
    .required('Closing Price is required'),
});

export default calculateSchema;
