import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import Home from './Home.js'
import Cart from './Cart.js'

function Header() {
  const [showHome, setShowHome] = useState(false);

  const handleHomeClick = () => {
    setShowHome(true);
  }

  if (showHome) {
    return <Home></Home>;
  }

    return (
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home Switch</Link></li>
            {/* <li><a href="#" onClick={handleHomeClick}>Home</a></li> */}
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;