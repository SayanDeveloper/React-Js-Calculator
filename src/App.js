import React, { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState("");
  const [prev, setPrev] = useState("");

  const operators = ['/', '*', '+', '-', '.'];

  const calcHandling = (val) => {
    if (operators.includes(val) && calc === "" || operators.includes(val) && calc === "syntax error") {
      return;
    }
    if (!operators.includes(val) && calc === "syntax error") {
      setCalc(val);
      return;
    }
    if (operators.includes(calc.slice(-1)) && operators.includes(val)) {
      setCalc(calc.slice(0, -1) + val);
      return;
    }

    setCalc(calc + val);

  }
  const calculate = () => {
    if (calc === "") return;
    try {
      setCalc(eval(calc).toString());
    } catch(err) {
      setCalc("syntax error");
    }
  }
  console.log(calc);

  const deleteLast = () => {
    if (calc == '' || calc === "syntax error") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const deleteAll = () => {
    setCalc("");
  }

  return (
    <>
      <div className="calculator-container">
        <div className="output">{calc || "0"}</div>
        <button className="numbers" onClick={() => calcHandling('1')}>1</button>
        <button className="numbers" onClick={() => calcHandling('2')}>2</button>
        <button className="numbers" onClick={() => calcHandling('3')}>3</button>
        <button className="plus" onClick={deleteAll}>C</button>
        <button className="numbers" onClick={() => calcHandling('4')}>4</button>
        <button className="numbers" onClick={() => calcHandling('5')}>5</button>
        <button className="numbers" onClick={() => calcHandling('6')}>6</button>
        <button className="numbers" onClick={() => calcHandling('7')}>7</button>
        <button className="numbers" onClick={() => calcHandling('8')}>8</button>
        <button className="numbers" onClick={() => calcHandling('9')}>9</button>
        <button className="minus" onClick={deleteLast}>Del</button>
        <button className="numbers" onClick={() => calcHandling('0')}>0</button>
        <button className="numbers" onClick={() => calcHandling('.')}>.</button>
        <button className="numbers" onClick={() => calcHandling('*')}>&times;</button>
        <button className="numbers" onClick={() => calcHandling('+')}>+</button>
        <button className="equal" onClick={calculate}>=</button>
        <button className="numbers" onClick={() => calcHandling('/')}>&divide;</button>
        <button className="numbers" onClick={() => calcHandling('-')}>&minus;</button>
      </div>
    </>
  );
}

export default App;
