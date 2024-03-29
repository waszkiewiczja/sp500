'use client';
import React, { useState } from 'react';
import { Results } from './Results';
import { CalculatorTitle } from './CalculatorTitle';
import { FormikData } from './form/FormikData';
import { Strategy } from './Strategy';

export type Result = {
  totalInvestment: number;
  finalValue: number;
  roi: number;
};

const containerStyle = `max-w-2xl mx-auto p-4 border rounded-md shadow-md mt-8`;

export const InvestmentCalculator: React.FC = () => {
  const [result, setResult] = useState<Result | null>(null);

  const changeResult = (newData: Result | null): void => {
    setResult(newData);
  };

  return (
    <div className={containerStyle} data-testid="investmentCalculatorClient">
      <CalculatorTitle />
      <FormikData changeResult={changeResult} />
      <Results result={result} />
      {/* <Strategy /> */}
    </div>
  );
};
