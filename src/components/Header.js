import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import image from './static/icooked.png';
import { store } from './MallScript.js';


const getTotalItems = () => {
  let totalItems = 0;
  for (let i = 0; i < store.length; i++) {
    totalItems += store[i].items.length;
  }
  return totalItems;
}

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
          {/* The total amount of items in all of the carts should be displayed as a badge next to cart */}
          <li className="cart">
            <Link to="/cart">Cart ({getTotalItems()})</Link>
          </li>
          {/* <li className="cart">
            <Link to="/cart">Cart</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;