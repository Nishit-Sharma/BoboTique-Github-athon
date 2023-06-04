import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall4, Item, total, totalItems } from '../MallScript';

import RolexWatch1 from '../static/Rolex_Watch_1.png';

function S4Product1() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Rolex Watch 1', 1000.00);
    Mall4.addItem(product);
    total += 1000;
    totalItems += 1;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Rolex Watch 1</h2>
        <img src={RolexWatch1} alt="Product" />
        <p>The Rolex Watch epitomizes the pinnacle of Swiss horology, renowned for its exceptional craftsmanship, timeless design, and precision engineering, making it a symbol of luxury and elegance.</p>
        <p>$1000.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S4Product1;