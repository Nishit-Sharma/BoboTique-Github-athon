import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall3, Item, total, totalItems } from '../MallScript';

import BalenciagaShoesImage from '../static/Balenciaga_Shoes.png';


function S3Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Balenciaga Shoes', 75.00);
    Mall3.addItem(product);
    total += 75;
      
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Balenciaga Shoes</h2>
        <img src={BalenciagaShoesImage} alt="Product" />
        <p>The Balenciaga Shoe pushes the boundaries of footwear fashion with its avant-garde design, innovative silhouettes, and premium materials, creating a distinct and bold statement for those seeking cutting-edge style.</p>
        <p>$75.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S3Product3;