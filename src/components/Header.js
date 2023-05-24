import React from 'react'
import './Global.css';

function Header() {
    return (
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Malls</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;