import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item } from '../MallScript';

function S1Product1() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item("Product 1", 10.00); 
    Mall1.addItem(product);
    console.log("Item added to cart!");
    console.log(Mall1.displayItems());
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