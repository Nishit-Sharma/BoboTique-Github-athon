import React, { useState } from 'react';
import Store1 from './Store1/Store.js'
import Store2 from './Store2/Store2.js'
import Store3 from './Store3/Store3.js'
import Store4 from './Store4/Store4.js'
import './Global.css';
import Layout from './Layout.js';

function Home() {
  const [showStore1, setShowStore1] = useState(false);
  const [showStore2, setShowStore2] = useState(false);
  const [showStore3, setShowStore3] = useState(false);
  const [showStore4, setShowStore4] = useState(false);

  const handleStore1Click = () => {
    setShowStore1(true);
  }

  const handleStore2Click = () => {
    setShowStore2(true);
  }

  const handleStore3Click = () => {
    setShowStore3(true);
  }

  const handleStore4Click = () => {
    setShowStore4(true);
  }

  if (showStore1) {
    return <Store1></Store1>;
  }

  if (showStore2) {
    return <Store2></Store2>;
  }

  if (showStore3) {
    return <Store3></Store3>;
  }

  if (showStore4) {
    return <Store4></Store4>;
  }

  return (
    <div>
      <Layout>
      <h1>Welcome to our shopping website!</h1>
      <p>Choose from our four malls to start shopping:</p>
      <ul>
        <li><a onClick={handleStore1Click}>Mall 1</a></li>
        <li><a onClick={handleStore2Click}>Mall 2</a></li>
        <li><a onClick={handleStore3Click}>Mall 3</a></li>
        <li><a onClick={handleStore4Click}>Mall 4</a></li>
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