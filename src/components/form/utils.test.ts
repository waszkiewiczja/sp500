import {
  InvestmentFormValues,
  calculateFinalValue,
  calculateROI,
  calculateTotalInvestment,
  calculateTotalNumberOfShares,
} from './utils';

describe('utils', () => {
  describe('calculateTotalInvestment', () => {
    it('should calculate total investment correctly with additional capital', () => {
      const initialCapital = 1000;
      const additionalCapital = [
        { amount: 200 },
        { amount: 300 },
        { amount: 150 },
      ];

      const result = calculateTotalInvestment(
        initialCapital,
        additionalCapital
      );

      expect(result).toBe(1000 + 200 + 300 + 150);
    });

    it('should handle empty additional capital array', () => {
      const initialCapital = 1000;
      const additionalCapital: { amount: number }[] = [];

      const result = calculateTotalInvestment(
        initialCapital,
        additionalCapital
      );

      expect(result).toBe(initialCapital);
    });

    it('should handle negative additional capital amounts', () => {
      const initialCapital = 1000;
      const additionalCapital = [
        { amount: -200 },
        { amount: -300 },
        { amount: -150 },
      ];

      const result = calculateTotalInvestment(
        initialCapital,
        additionalCapital
      );

      expect(result).toBe(1000 - 200 - 300 - 150);
    });
  });

  describe('calculateTotalNumberOfShares', () => {
    it('should return 0 when stockArray is empty', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(0);
    });

    it('should correctly calculate total number of shares when all purchase prices are non-zero', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: 100, purchasePrice: 10 },
        { date: '2021-02-01', amount: 200, purchasePrice: 20 },
        { date: '2021-03-01', amount: 300, purchasePrice: 30 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(60);
    });

    it('should correctly calculate total number of shares when some purchase prices are zero', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: 100, purchasePrice: 10 },
        { date: '2021-02-01', amount: 200, purchasePrice: 0 },
        { date: '2021-03-01', amount: 300, purchasePrice: 30 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(40);
    });

    it('should return 0 when all purchase prices are zero', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: 100, purchasePrice: 0 },
        { date: '2021-02-01', amount: 200, purchasePrice: 0 },
        { date: '2021-03-01', amount: 300, purchasePrice: 0 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(0);
    });

    it('should return 0 when all amounts are zero', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: 0, purchasePrice: 10 },
        { date: '2021-02-01', amount: 0, purchasePrice: 20 },
        { date: '2021-03-01', amount: 0, purchasePrice: 30 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(0);
    });

    it('should handle negative amount values', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: -100, purchasePrice: 10 },
        { date: '2021-02-01', amount: -200, purchasePrice: 20 },
        { date: '2021-03-01', amount: -300, purchasePrice: 30 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(-60);
    });
  });

  describe('calculateFinalValue', () => {
    it('should return the correct final value when given valid inputs', () => {
      const totalInvestment = 1000;
      const closingPrice = 10;
      const expected = 10000;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBe(expected);
    });

    it('should return 0 when totalInvestment is 0', () => {
      const totalInvestment = 0;
      const closingPrice = 10;
      const expected = 0;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBe(expected);
    });

    it('should return 0 when closingPrice is 0', () => {
      const totalInvestment = 1000;
      const closingPrice = 0;
      const expected = 0;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBe(expected);
    });

    it('should return NaN when totalInvestment is NaN', () => {
      const totalInvestment = NaN;
      const closingPrice = 10;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBeNaN();
    });

    it('should return NaN when closingPrice is NaN', () => {
      const totalInvestment = 1000;
      const closingPrice = NaN;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBeNaN();
    });

    it('should return NaN when totalInvestment and closingPrice are NaN', () => {
      const totalInvestment = NaN;
      const closingPrice = NaN;

      const result = calculateFinalValue(totalInvestment, closingPrice);

      expect(result).toBeNaN();
    });
  });

  describe('calculateROI', () => {
    it('should return the correct ROI percentage when given valid initial capital and final value', () => {
      const initialCapital = 1000;
      const finalValue = 1500;
      const expectedROI = 50;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBe(expectedROI);
    });

    it('should return 0 when initial capital and final value are equal', () => {
      const initialCapital = 1000;
      const finalValue = 1000;
      const expectedROI = 0;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBe(expectedROI);
    });

    it('should return negative ROI percentage when final value is less than initial capital', () => {
      const initialCapital = 1000;
      const finalValue = 800;
      const expectedROI = -20;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBe(expectedROI);
    });

    it('should return NaN when initial capital is NaN', () => {
      const initialCapital = NaN;
      const finalValue = 1500;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBeNaN();
    });

    it('should return NaN when final value is NaN', () => {
      const initialCapital = 1000;
      const finalValue = NaN;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBeNaN();
    });

    it('should return NaN when initial capital is negative', () => {
      const initialCapital = -1000;
      const finalValue = 1500;

      const actualROI = calculateROI(initialCapital, finalValue);

      expect(actualROI).toBeNaN();
    });
  });
});
