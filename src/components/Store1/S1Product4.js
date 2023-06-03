import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item, total } from '../MallScript';

import GucciWalletImage from '../static/Gucci_Wallet.png';

function S1Product4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item("Gucci Wallet", 50.00); 
    Mall1.addItem(product);
    total += 50;
    console.log("Item added to cart!");
  }

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Wallet</h2>
        <img src={GucciWalletImage} alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product4;