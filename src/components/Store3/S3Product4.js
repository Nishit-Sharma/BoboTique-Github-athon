import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall3, Item, total, totalItems} from '../MallScript';

import BalenciagaSunglassesImage from '../static/Balenciaga_Sunglasses.png';

function S3Product4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Balenciaga Sunglasses', 150.00);
    Mall3.addItem(product);
    total += 150;
    totalItems += 1;
    console.log('Item added to cart!');
    setCart([...cart, product]);
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Balenciaga Sunglasses</h2>
        <img src={BalenciagaSunglassesImage} alt="Product" />
        <p>The Balenciaga Sunglasses are a striking blend of bold and contemporary aesthetics, crafted with meticulous attention to detail, innovative design elements, and high-quality materials, making them a must-have accessory for the fashion-forward individual.</p>
        <p>$150.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S3Product4;