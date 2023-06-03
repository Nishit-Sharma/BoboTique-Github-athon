import React from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall3, Item, total } from '../MallScript';

import BalenciagaShoesImage from '../static/Balenciaga_Shoes.png';


function S3Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const handleAddToCart = () => {
    const product = new Item('Balenciaga Shoes', 10.0);
    Mall3.addItem(product);
    total += 10;
    console.log('Item added to cart!');
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Balenciaga Shoes</h2>
        <img src={BalenciagaShoesImage} alt="Product" />
        <p>Description of the product.</p>
        <p>$10.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S3Product3;