import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calcBody">
        <div className="calcFirtsRow">
          <p>0</p>
        </div>
        <button type="button" className="leftCalc one">1</button>
        <button type="button" className="leftCalc two">2</button>
        <button type="button" className="leftCalc three">3</button>
        <button type="button" className="leftCalc four">4</button>
        <button type="button" className="leftCalc five">5</button>
        <button type="button" className="leftCalc six">6</button>
        <button type="button" className="leftCalc seven">7</button>
        <button type="button" className="leftCalc eight">8</button>
        <button type="button" className="leftCalc nine">9</button>
        <button type="button" className="leftCalc cero">0</button>
        <button type="button" className="leftCalc AC">A/C</button>
        <button type="button" className="leftCalc plusMinus">+/-</button>
        <button type="button" className="leftCalc reminder">%</button>
        <button type="button" className="rightCalc div">&divide;</button>
        <button type="button" className="rightCalc mult">X</button>
        <button type="button" className="rightCalc sub">-</button>
        <button type="button" className="rightCalc plus">+</button>
        <button type="button" className="rightCalc equal">=</button>
      </div>
    );
  }
}
