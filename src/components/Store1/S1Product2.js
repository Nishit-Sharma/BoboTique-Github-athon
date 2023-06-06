import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item, total, totalItems } from '../MallScript';

import GucciHatImage from '../static/Gucci_Hat.png';

function S1Product2() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);


  const handleAddToCart = () => {
    const product = new Item("Gucci Bucket Hat", 34.00); 
    Mall1.addItem(product);
    total += 34;
    totalItems += 1;
    console.log("Item added to cart!");
    setCart([...cart, product]);
  }

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Bucket Hat</h2>
        <img src={GucciHatImage} alt="Product" />
        <p>The Gucci Bucket Hat effortlessly blends high-fashion flair with casual streetwear vibes, featuring the iconic GG motif and superior craftsmanship to elevate your headwear game.</p>
        <p>$34.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product2;