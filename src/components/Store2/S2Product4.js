import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall2, Item, total } from '../MallScript';

import LVSneakersImage from '../static/LV_Sneakers.png';

function S2Product4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Louis Vuitton Sneakers', 10.0);
    Mall2.addItem(product);
    total += 10;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Louis Vuitton Sneakers</h2>
        <img src={LVSneakersImage} alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default S2Product4;