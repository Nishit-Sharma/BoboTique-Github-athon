import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';
import {useSpring, animated} from 'react-spring'
import { Mall, Item } from './MallScript.js';

function Cart({ malls }) {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }

  return (
    <animated.div style={props}>
      <Layout>
        <div className="storeBox">
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={`product${index + 1}.png`} alt={`Product ${index + 1}`} />
                <h3>{item.getName()}</h3>
                <p>${item.getPrice().toFixed(2)}</p>
                <p>Mall: {item.mallName}</p>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${cartItems.reduce((total, item) => total + item.getPrice(), 0).toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Cart;