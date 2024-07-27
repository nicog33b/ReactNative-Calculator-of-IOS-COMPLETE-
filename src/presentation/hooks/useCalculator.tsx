import {useEffect, useRef, useState} from 'react';

enum Operator {
  add,
  sustract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');

  const lastOperation = useRef<Operator>();

  const clearNumber = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const deleteEndNumber = () => {
    if (number !== '0' && number.length === 1) {
      return setNumber('0');
    } else if (number === '0' && number.length === 1) {
      return;
    } else {
      setNumber(number.slice(0, -1));
    }
  };
  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      //evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      //evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      // evitar 00.000000 + de un cero seguido antes del .
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    return setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const sustractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.sustract;
  };

  const calculateResult = () => {
    const num1 = Number(number); //NaN not a number
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.sustract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;

      default:
        throw new Error('operation not implemented');
    }
    setPrevNumber('0');
  };

  return {
    //properties
    number,
    prevNumber,
    buildNumber,
    clearNumber,
    deleteEndNumber,
    addOperation,
    divideOperation,
    multiplyOperation,
    sustractOperation,
    calculateResult,
    //methods
  };
};
