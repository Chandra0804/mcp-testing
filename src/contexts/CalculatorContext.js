import React, { createContext, useState, useEffect } from 'react';
import { evaluateExpression } from '../utils/calculatorUtils';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [equation, setEquation] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState([]);

  const clearAll = () => {
    setDisplayValue('0');
    setEquation('');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleNumberInput = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(digit);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const handleDecimalPoint = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setEquation(`${inputValue} ${nextOperator}`);
    } else if (operator) {
      const currentValue = previousValue || 0;
      const result = evaluateExpression(currentValue, inputValue, operator);

      setPreviousValue(result);
      setDisplayValue(String(result));
      setEquation(`${result} ${nextOperator}`);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    if (previousValue === null || operator === null) {
      return;
    }

    const inputValue = parseFloat(displayValue);
    const currentValue = previousValue || 0;
    const result = evaluateExpression(currentValue, inputValue, operator);
    const newEquation = `${currentValue} ${operator} ${inputValue}`;

    setHistory([{ equation: newEquation, result: String(result) }, ...history]);
    setDisplayValue(String(result));
    setEquation(newEquation + ' = ' + result);
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const handleChangeSign = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(-value));
  };

  const handlePercentage = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  const handleButtonPress = (buttonLabel) => {
    switch (buttonLabel) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        handleNumberInput(buttonLabel);
        break;
      case '.':
        handleDecimalPoint();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        handleOperator(buttonLabel);
        break;
      case '=':
        handleEquals();
        break;
      case 'C':
        clearAll();
        break;
      case '±':
        handleChangeSign();
        break;
      case '%':
        handlePercentage();
        break;
      default:
        break;
    }
  };

  const recallCalculation = (index) => {
    const item = history[index];
    setDisplayValue(item.result);
    setEquation(item.equation);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const value = {
    displayValue,
    equation,
    history,
    handleButtonPress,
    recallCalculation,
    clearHistory,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
