import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall, Item } from '../MallScript';

function S1Product1() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const myMall = new Mall("My Mall");

  const handleAddToCart = () => {
    const newItem = new Item("Product Name", 10.00);
    myMall.addItem(newItem);
  }

  return (
    <animated.div style = {props}>
      <Layout>
        <h2>Product Name</h2>
        <img src="product.png" alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </Layout>
    </animated.div>
  );
}

export default S1Product1;