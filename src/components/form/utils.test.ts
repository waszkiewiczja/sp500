import { Result } from '../InvestmentCalculatorClient';
import {
  InvestmentFormValues,
  calculateFinalValue,
  calculateInitialShares,
  calculateROI,
  calculateTotalInvestment,
  calculateTotalNumberOfShares,
  handleSubmit,
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
        additionalCapital,
      );

      expect(result).toBe(1000 + 200 + 300 + 150);
    });

    it('should handle empty additional capital array', () => {
      const initialCapital = 1000;
      const additionalCapital: { amount: number }[] = [];

      const result = calculateTotalInvestment(
        initialCapital,
        additionalCapital,
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
        additionalCapital,
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
      expect(result).toBe(30);
    });

    it('should correctly calculate total number of shares when some purchase prices are zero', () => {
      const stockArray: InvestmentFormValues['additionalCapital'] = [
        { date: '2021-01-01', amount: 100, purchasePrice: 10 },
        { date: '2021-02-01', amount: 200, purchasePrice: 0 },
        { date: '2021-03-01', amount: 300, purchasePrice: 30 },
      ];
      const result = calculateTotalNumberOfShares(stockArray);
      expect(result).toBe(20);
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
  });

  describe('calculateInitialShares', () => {
    it('should return the correct number of initial shares when given valid input', () => {
      const initialCapital = 1000;
      const startingPrice = 10;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(100);
    });

    it('should return 0 when startingPrice is 0', () => {
      const initialCapital = 1000;
      const startingPrice = 0;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(0);
    });

    it('should return 0 when initialCapital is 0', () => {
      const initialCapital = 0;
      const startingPrice = 10;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(0);
    });

    it('should handle negative initialCapital input', () => {
      const initialCapital = -1000;
      const startingPrice = 10;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(-100);
    });

    it('should handle negative startingPrice input', () => {
      const initialCapital = 1000;
      const startingPrice = -10;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(0);
    });

    it('should handle decimal initialCapital input', () => {
      const initialCapital = 1000.5;
      const startingPrice = 10;

      const result = calculateInitialShares(initialCapital, startingPrice);

      expect(result).toBe(100.05);
    });
  });

  describe('handleSubmit', () => {
    it('should calculate and return the correct result when given valid input values', () => {
      const values: InvestmentFormValues = {
        startingPrice: 10,
        initialCapital: 100,
        additionalCapital: [
          { date: '2021-01-01', amount: 50, purchasePrice: 20 },
        ],
        closingDate: '2021-12-31',
        closingPrice: 15,
      };
      let result: Result | null = null;
      const changeResult = (newData: Result | null): void => {
        result = newData;
      };

      handleSubmit(values, changeResult);

      expect(result).toEqual({
        totalInvestment: 150,
        finalValue: 187.5,
        roi: 25,
      });
    });

    it('should calculate and return the correct result when the initialCapital is zero', () => {
      const values: InvestmentFormValues = {
        startingPrice: 10,
        initialCapital: 0,
        additionalCapital: [
          { date: '2021-01-01', amount: 50, purchasePrice: 20 },
        ],
        closingDate: '2021-12-31',
        closingPrice: 15,
      };
      let result: Result | null = null;
      const changeResult = (newData: Result | null): void => {
        result = newData;
      };

      handleSubmit(values, changeResult);

      expect(result).toEqual({
        totalInvestment: 50,
        finalValue: 37.5,
        roi: -25,
      });
    });

    it('should calculate and return the correct result when the additionalCapital is empty', () => {
      const values: InvestmentFormValues = {
        startingPrice: 10,
        initialCapital: 100,
        additionalCapital: [],
        closingDate: '2021-12-31',
        closingPrice: 15,
      };
      let result: Result | null = null;
      const changeResult = (newData: Result | null): void => {
        result = newData;
      };

      handleSubmit(values, changeResult);

      expect(result).toEqual({
        totalInvestment: 100,
        finalValue: 150,
        roi: 50,
      });
    });
  });
});
