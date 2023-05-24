import React from 'react';
import './Global.css';
import Store1 from './Store1/Store.js'
import Store2 from './Store2/Store2.js'
import Store3 from './Store3/Store3.js'
import Store4 from './Store4/Store4.js'

function Home() {
  return (
    <div>
      <h1>Welcome to our shopping website!</h1>
      <p>Choose from our four malls to start shopping:</p>
      <ul>
        <li><a href="Store1/Store.js">Mall 1</a></li>
        <li><a href="#">Mall 2</a></li>
        <li><a href="#">Mall 3</a></li>
        <li><a href="#">Mall 4</a></li>
      </ul>
      <form>
        <input type="text" placeholder="Search for products" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
