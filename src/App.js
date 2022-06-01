import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import HeaderNav from './components/Header/HeaderNav';
import Quote from './pages/Quote';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HeaderNav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/calculator">
              <Calculator />
            </Route>

            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}
