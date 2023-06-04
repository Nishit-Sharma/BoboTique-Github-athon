import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall2, Item, total, totalItems } from '../MallScript';

import LVCapImage from '../static/LV_Cap.png';

function S2Product2() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Louis Vuitton Cap', 25.00);
    Mall2.addItem(product);
    total += 25;
    totalItems += 1;
    console.log('Item added to cart!');
    setCart([...cart, product]);
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Louis Vuitton Cap</h2>
        <img src={LVCapImage} alt="Product" />
        <p>The Louis Vuitton Cap is a fashion-forward headwear essential, featuring the iconic LV monogram, superior craftsmanship, and a sleek design that effortlessly combines luxury and streetwear aesthetics.</p>
        <p>$25.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default S2Product2;