import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => (
  <header className="header">
    <h2>Math Magicians</h2>
    <ul>
      <li>
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
      </li>
      <li className="middle">
        <NavLink activeClassName="active" to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/quote">Quote</NavLink>
      </li>
    </ul>
  </header>
);

export default HeaderNav;
