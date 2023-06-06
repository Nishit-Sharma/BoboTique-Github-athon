import React, { useState } from 'react';
import '../Global.css';
import { useSpring, animated } from 'react-spring';
import Layout from '../Layout.js';
import { Mall1, Item, total, totalItems } from '../MallScript';

import GucciBeltImage from '../static/Gucci_Belt.png';

function S1Product1() {
  // The thing for transitions
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  // This updates the state which causes the page to refresh when something happens
  const [cart, setCart] = useState([]);
  

  // Add to cart function
  const handleAddToCart = () => {
    const product = new Item('Gucci Belt', 15.00);
    Mall1.addItem(product);
    total += 15;
    totalItems += 1;
    console.log('Item added to cart!');
    setCart([...cart, product]);
  };

  return (
    // Html for stuff
    <animated.div style={props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Belt</h2>
        <img src={GucciBeltImage} alt="Product" />
        <p>The Gucci Belt is a luxurious and iconic accessory that seamlessly combines Italian craftsmanship, timeless design, and the brand's signature double-G logo for a stylish and statement-making addition to any outfit.</p>
        <p>$15.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product1;