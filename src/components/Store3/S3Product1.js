import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall3, Item, total, totalItems } from '../MallScript';

import BalenciagaBagImage from '../static/Balenciaga_Bag.png';

function S3Product1() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Balenciaga Bag', 313.00);
    Mall3.addItem(product);
    total += 313;
    totalItems += 1;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Balenciaga Bag</h2>
        <img src={BalenciagaBagImage} alt="Product" />
        <p>The Balenciaga Bag is a coveted fashion statement, showcasing avant-garde design, impeccable construction, and luxurious materials, embodying a perfect blend of high fashion and urban chic.</p>
        <p>$313.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S3Product1;