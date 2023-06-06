import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import image from './static/icooked.png';
import { totalItems } from './MallScript.js';

function Header() {
  return (
    <header className="header">
      <div className="logo header-logo header-logo-size">
        {/* Making the image link to something */}
        <Link to="/">
          <img src={image} alt="BoboTique" />
        </Link>
      </div>
      <nav>
        <ul>
          {/* // Adding links to the home and cart */}
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="cart">
            {/* Displaying the total number of items in the cart */}
            <Link to="/cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;