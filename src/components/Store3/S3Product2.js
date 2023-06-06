import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js';
import { Mall3, Item, total, totalItems } from '../MallScript';


import BalenciagaShirtImage from '../static/Balenciaga_Shirt.png';


function S3Product2() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = new Item('Balenciaga Shirt', 25.00);
    Mall3.addItem(product);
    total += 25;
    totalItems += 1;
    console.log('Item added to cart!');
    setCart([...cart, product]);
  };

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Balenciaga Shirt</h2>
        <img src={BalenciagaShirtImage} alt="Product" />
        <p>The Balenciaga Shirt epitomizes contemporary fashion with its cutting-edge designs, premium fabrics, and distinctive details, ensuring a stylish and edgy look that sets you apart from the crowd.</p>
        <p>$25.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S3Product2;