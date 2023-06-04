import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall2, Item, total, totalItems } from '../MallScript';

import LVPurseImage from '../static/LV_Purse.png';

function S2Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Louis Vuitton Purse', 160.00);
    Mall2.addItem(product);
    total += 160;
    totalItems += 1;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Louis Vuitton Purse</h2>
        <img src={LVPurseImage} alt="Product" />
        <p>The Louis Vuitton Purse is an exquisite accessory that exemplifies elegance and sophistication, crafted with meticulous attention to detail, iconic monogram patterns, and luxurious materials, making it a timeless investment piece.</p>
        <p>$160.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S2Product3;