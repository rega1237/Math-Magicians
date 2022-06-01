import React from 'react';
import CalculatorComp from '../components/Calculator/CalculatorComp';
import CalculatorTitleComp from '../components/Calculator/CalculatorTitleComp';
import './Calculator.css';

const Calculator = () => (
  <div className="calc-page">
    <CalculatorTitleComp />
    <CalculatorComp />
  </div>
);

export default Calculator;
