import React from 'react';
import '../Global.css';
import { useSpring, animated } from 'react-spring';
import Layout from '../Layout.js';
import { Mall1, Item, total } from '../MallScript';

import GucciBeltImage from '../static/Gucci_Belt.png';

function S1Product1() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Gucci Belt', 10.0);
    Mall1.addItem(product);
    total += 10;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style={props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Belt</h2>
        <img src={GucciBeltImage} alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product1;