import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';

function Home() {
  return (
    <div>
      <Layout>
      <h1>Welcome to our shopping website!</h1>
      <p>Choose from our four malls to start shopping:</p>
      <ul>
        <li><Link to="/mall1">Mall1</Link></li>
        <li><Link to="/mall2">Mall2</Link></li>
        <li><Link to="/mall3">Mall3</Link></li>
        <li><Link to="/mall4">Mall4</Link></li>
      </ul>
      <form>
        <input type="text" placeholder="Search for products" />
        <button type="submit">Search</button>
      </form>
      </Layout>
    </div>
  );

}

export default Home;