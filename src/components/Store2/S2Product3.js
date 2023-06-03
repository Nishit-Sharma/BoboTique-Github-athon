import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 

function S2Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Product Name</h2>
        <img src="product.png" alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button>Add to Cart</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default S2Product3;