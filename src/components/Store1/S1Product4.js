import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item, total, totalItems } from '../MallScript';

import GucciWalletImage from '../static/Gucci_Wallet.png';

function S1Product4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item("Gucci Wallet", 50.00); 
    Mall1.addItem(product);
    total += 50;
    totalItems += 1;
    console.log("Item added to cart!");
    setCart([...cart, product]);
  }

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Wallet</h2>
        <img src={GucciWalletImage} alt="Product" />
        <p>The Gucci Wallet is a refined accessory that fuses opulent craftsmanship, premium materials, and iconic design elements, providing both practicality and sophistication for the modern individual.</p>
        <p>$50.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product4;