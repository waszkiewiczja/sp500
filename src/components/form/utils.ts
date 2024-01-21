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
  additionalCapital: { amount: number }[]
): number => {
  const totalAdditionalCapital = additionalCapital.reduce(
    (sum, addition) => sum + addition.amount,
    0
  );
  return initialCapital + totalAdditionalCapital;
};

export const calculateTotalNumberOfShares = (
  stockArray: InvestmentFormValues['additionalCapital']
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
  closingPrice: number
): number => {
  const result = totalInvestment * closingPrice;
  return Math.round(result * 100) / 100;
};

export const calculateROI = (
  initialCapital: number,
  finalValue: number
): number => {
  return ((finalValue - initialCapital) / initialCapital) * 100;
};
