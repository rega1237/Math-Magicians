import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calcInitial: 0,
    };
    this.calc = this.calc.bind(this);
  }

  calc(e) {
    const value = e.target.innerText;
    const { calcInitial } = this.state;
    const calcResult = calculate(calcInitial, value);
    this.setState({ calcInitial: calcResult });
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
  }

  render() {
    return (
      <div className="calcBody">
        <div className="calcFirtsRow">
          <p>0</p>
        </div>
        <button type="button" className="leftCalc one" onClick={this.calc}>1</button>
        <button type="button" className="leftCalc two" onClick={this.calc}>2</button>
        <button type="button" className="leftCalc three" onClick={this.calc}>3</button>
        <button type="button" className="leftCalc four" onClick={this.calc}>4</button>
        <button type="button" className="leftCalc five" onClick={this.calc}>5</button>
        <button type="button" className="leftCalc six" onClick={this.calc}>6</button>
        <button type="button" className="leftCalc seven" onClick={this.calc}>7</button>
        <button type="button" className="leftCalc eight" onClick={this.calc}>8</button>
        <button type="button" className="leftCalc nine" onClick={this.calc}>9</button>
        <button type="button" className="leftCalc cero" onClick={this.calc}>0</button>
        <button type="button" className="leftCalc dot" onClick={this.calc}>.</button>
        <button type="button" className="leftCalc AC" onClick={this.calc}>AC</button>
        <button type="button" className="leftCalc plusMinus" onClick={this.calc}>+/-</button>
        <button type="button" className="leftCalc reminder" onClick={this.calc}>%</button>
        <button type="button" className="rightCalc div" onClick={this.calc}>&divide;</button>
        <button type="button" className="rightCalc mult" onClick={this.calc}>x</button>
        <button type="button" className="rightCalc sub" onClick={this.calc}>-</button>
        <button type="button" className="rightCalc plus" onClick={this.calc}>+</button>
        <button type="button" className="rightCalc equal" onClick={this.calc}>=</button>
      </div>
    );
  }
}
