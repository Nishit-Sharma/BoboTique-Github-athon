import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';

function Header() {
    return (
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
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