import React, { useState } from 'react';
import './Global.css';
import Home from './Home.js'

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
          <img onClick={handleHomeClick} src="logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a onClick={handleHomeClick}>Home</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;