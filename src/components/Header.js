import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import './i cooked.png'

function Header() {
    return (
      <header>
        <div className="logo">
          <Link to ="/"></Link>
          <img src="i cooked.png" alt="BoboTique" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;