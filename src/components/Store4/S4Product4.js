import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall4, Item, total, totalItems } from '../MallScript';

import RolexWatch4 from '../static/Rolex_Watch_4.png';

function S4Product4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Rolex Watch 4', 1000.00);
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
        <h2>Rolex Watch 4</h2>
        <img src={RolexWatch4} alt="Product" />
        <p>The Rolex Watch is an iconic timepiece that epitomizes luxury, precision, and timeless elegance, crafted with exceptional Swiss craftsmanship and unparalleled attention to detail.</p>
        <p>$1000.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S4Product4;