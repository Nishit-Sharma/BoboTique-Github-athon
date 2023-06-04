import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall2, Item, total, totalItems } from '../MallScript';

import LVBriefcaseImage from '../static/LV_Briefcase.png';

function S2Product1() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Louis Vuitton Briefcase', 25.00);
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
        <h2>Louis Vuitton Briefcase</h2>
        <img src={LVBriefcaseImage} alt="Product" />
        <p>The Louis Vuitton Briefcase is a timeless and prestigious statement piece, meticulously crafted with the brand's signature monogram canvas and exquisite leather trim, offering unparalleled style and functionality for the discerning professional.</p>
        <p>$25.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S2Product1;