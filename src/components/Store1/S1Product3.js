import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item, total } from '../MallScript';

import GucciShoesImage from '../static/Gucci_Shoes.png';

function S1Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item("Gucci Shoes", 10.00); 
    Mall1.addItem(product);
    total += 10;
    console.log("Item added to cart!");
  }

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Shoes</h2>
        <img src={GucciShoesImage} alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product3;