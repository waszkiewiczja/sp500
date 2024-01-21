import dynamic from "next/dynamic";

const DynamicInvestmentCalculator = dynamic(
  () => import("../components/InvestmentCalculatorClient"),
  {
    ssr: false,
  }
);

const InvestmentCalculator: React.FC = () => {
  return <DynamicInvestmentCalculator />;
};

export default InvestmentCalculator;
