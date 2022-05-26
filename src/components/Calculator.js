import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [input, setValue] = useState(0);

  const calc = (e) => {
    const value = e.target.innerText;
    const calcResult = calculate(input, value);
    setValue(calcResult);
    const display = document.querySelector('.calcFirtsRow');

    if (calcResult.total === null && calcResult.next !== null) {
      display.textContent = calcResult.next;
    } else if (calcResult.total !== null && calcResult.next !== null) {
      display.textContent = calcResult.next;
    } else if (calcResult.total !== null && calcResult.next == null) {
      display.textContent = calcResult.total;
    } else {
      display.textContent = 0;
    }
  };

  return (
    <div className="calcBody">
      <div className="calcFirtsRow">
        <p>0</p>
      </div>
      <button type="button" className="leftCalc one" onClick={calc}>1</button>
      <button type="button" className="leftCalc two" onClick={calc}>2</button>
      <button type="button" className="leftCalc three" onClick={calc}>3</button>
      <button type="button" className="leftCalc four" onClick={calc}>4</button>
      <button type="button" className="leftCalc five" onClick={calc}>5</button>
      <button type="button" className="leftCalc six" onClick={calc}>6</button>
      <button type="button" className="leftCalc seven" onClick={calc}>7</button>
      <button type="button" className="leftCalc eight" onClick={calc}>8</button>
      <button type="button" className="leftCalc nine" onClick={calc}>9</button>
      <button type="button" className="leftCalc cero" onClick={calc}>0</button>
      <button type="button" className="leftCalc dot" onClick={calc}>.</button>
      <button type="button" className="leftCalc AC" onClick={calc}>AC</button>
      <button type="button" className="leftCalc plusMinus" onClick={calc}>+/-</button>
      <button type="button" className="leftCalc reminder" onClick={calc}>%</button>
      <button type="button" className="rightCalc div" onClick={calc}>&divide;</button>
      <button type="button" className="rightCalc mult" onClick={calc}>x</button>
      <button type="button" className="rightCalc sub" onClick={calc}>-</button>
      <button type="button" className="rightCalc plus" onClick={calc}>+</button>
      <button type="button" className="rightCalc equal" onClick={calc}>=</button>
    </div>
  );
}
