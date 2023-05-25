import React from 'react';
import Layout from '../Layout.js'; 
import {useSpring, animated} from 'react-spring'

function Store2() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  return (
    <animated.div style={props}>
    <Layout>
      <h2>Store Name</h2>
      <ul>
        <li>
          <img src="product1.png" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$10.00</p>
        </li>
        <li>
          <img src="product2.png" alt="Product 2" />
         <h3>Product 2</h3>
          <p>$20.00</p>
        </li>
        <li>
          <img src="product3.png" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$30.00</p>
        </li>
        <li>
          <img src="product4.png" alt="Product 4" />
          <h3>Product 4</h3>
          <p>$40.00</p>
        </li>
      </ul>
    </Layout>
    </animated.div>
  );
}

export default Store2;
