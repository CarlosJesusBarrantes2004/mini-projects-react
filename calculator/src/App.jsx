import { useState } from 'react';
import Display from './components/Display';
import PanelButtons from './components/PanelButtons';
import isNumber from './logic/isNumber';
import isOperator from './logic/isOperator';
import operate from './logic/operate';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [error, setError] = useState('');

  const clickHandle = (sign) => {
    try {
      //Write digits
      if (isNumber(sign)) {
        if (error) setError('');
        else if (!operator) setNum1(`${num1}${sign}`);
        else if (operator === '=' && num1) setNum1(sign);
        else setNum2(`${num2}${sign}`);
      }
      //Set sign
      else if (isOperator(sign)) {
        if (num2 && operator) {
          setNum1(operate(num1, num2, operator));
          setNum2('');
        }
        setOperator(sign);
      }
      //Reset
      else if ('AC' === sign) {
        setNum1('');
        setNum2('');
        setOperator('');
        setError('');
      }
      //Result
      else if ('=' === sign) {
        if (operator === '/' && num2 === '0') {
          setNum1('');
          setNum2('');
          setOperator('');
          throw new Error('Cannot divide by zero');
        }
        setNum1(operate(num1, num2 || 0, operator || '+'));
        setNum2('');
        setOperator('=');
      }
      //Write decimals
      else if ('.' === sign) {
        if (!num2 && !operator) setNum1(!num1 ? '0.' : `${num1}.`);
        else if (num1 && operator) setNum2(!num2 ? '0.' : `${num2}.`);
      }
      //Delete digits
      else if ('x' === sign) {
        if (!operator && !num2) setNum1(num1.slice(0, -1));
        else setNum2(num2.slice(0, -1));
      }
      //Negate
      else if ('+/-' === sign) {
        if (!num2 && !operator) setNum1(num1 ? `-${num1}` : '0');
        else if (num1 && operator) setNum2(num2 && `-${num2}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="calculator">
        <Display total={num1 || '0'} num2={num2} error={error}></Display>
        <PanelButtons clickHandle={clickHandle}></PanelButtons>
      </div>
    </>
  );
}

export default App;
