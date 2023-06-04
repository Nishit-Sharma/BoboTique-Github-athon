import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import image from './static/icooked.png';
import { totalItems } from './MallScript.js';

function Header() {
  return (
    <header className="header">
      <div className="logo header-logo header-logo-size">
        <Link to="/">
          <img src={image} alt="BoboTique" />
        </Link>
      </div>
      <nav>
        <ul>
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="cart">
            <Link to="/cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;