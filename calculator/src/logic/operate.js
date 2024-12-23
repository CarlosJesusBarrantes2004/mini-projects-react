import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  switch (operator) {
    case '+':
      return numOne.plus(numTwo).toString();
    case '-':
      return numOne.minus(numTwo).toString();
    case '*':
      return numOne.times(numTwo).toString();
    case '/':
      return numOne.div(numTwo).toString();
    default:
      throw new Error('Invalid operator');
  }
};

export default operate;
