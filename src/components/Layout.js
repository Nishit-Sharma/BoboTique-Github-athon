import React from 'react';
import './Global.css';
import Header from './Header.js'
import Footer from './Footer.js'

const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        {children}
        <Navbar />
      </div>
    );
  };
  
  export default Layout