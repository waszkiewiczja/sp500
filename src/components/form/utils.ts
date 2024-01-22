import { Result } from '../InvestmentCalculatorClient';

export type InvestmentFormValues = {
  initialCapital: number;
  startingPrice: number;
  additionalCapital: {
    date: string;
    amount: number;
    purchasePrice: number;
  }[];
  closingDate: string;
  closingPrice: number;
};

export const calculateTotalInvestment = (
  initialCapital: number,
  additionalCapital: { amount: number }[],
): number => {
  const totalAdditionalCapital = additionalCapital.reduce(
    (sum, addition) => sum + addition.amount,
    0,
  );
  return initialCapital + totalAdditionalCapital;
};

export const calculateTotalNumberOfShares = (
  stockArray: InvestmentFormValues['additionalCapital'],
): number => {
  let totalShares = 0;

  stockArray.forEach(({ amount, purchasePrice }) => {
    if (purchasePrice === 0) {
    } else {
      const numberOfShares = amount / purchasePrice;
      totalShares += numberOfShares;
    }
  });

  return totalShares;
};

export const calculateFinalValue = (
  totalInvestment: number,
  closingPrice: number,
): number => {
  const result = totalInvestment * closingPrice;
  return Math.round(result * 100) / 100;
};

export const calculateROI = (
  initialCapital: number,
  finalValue: number,
): number => {
  return ((finalValue - initialCapital) / initialCapital) * 100;
};

export const calculateInitialShares = (
  initialCapital: number,
  startingPrice: number,
): number => {
  let initialNumberOfShares = 0;
  if (startingPrice > 0) initialNumberOfShares = initialCapital / startingPrice;
  return initialNumberOfShares;
};

export const handleSubmit = (
  values: InvestmentFormValues,
  changeResult: (newData: Result | null) => void,
): void => {
  const { startingPrice, initialCapital, closingPrice, additionalCapital } =
    values;

  const initialNumberOfShares = calculateInitialShares(
    initialCapital,
    startingPrice,
  );

  const totalInvestment = calculateTotalInvestment(
    initialCapital,
    additionalCapital,
  );

  const addedShares = calculateTotalNumberOfShares(additionalCapital);

  const totalShares = initialNumberOfShares + addedShares;

  const finalValue = calculateFinalValue(totalShares, closingPrice);

  const roi = calculateROI(totalInvestment, finalValue);

  changeResult({
    totalInvestment,
    finalValue,
    roi,
  });
};
