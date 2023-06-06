import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall4, Item, total, totalItems } from '../MallScript';

import RolexWatch3 from '../static/Rolex_Watch_3.png';


function S4Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Rolex Watch 3', 1000.0);
    Mall4.addItem(product);
    total += 1000;
    totalItems += 1;
    console.log('Item added to cart!');
    setCart([...cart, product]);
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Rolex Watch 3</h2>
        <img src={RolexWatch3} alt="Product" />
        <p>The Rolex Watch is a pinnacle of luxury timepieces, renowned for its precision, craftsmanship, and timeless design, representing a symbol of prestige and sophistication.</p>
        <p>$1000.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S4Product3;