import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';
import {useSpring, animated} from 'react-spring'
import { Mall1, Mall2, Mall3, Mall4 } from '../MallScript.js';

function Cart() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cartItems, setCartItems] = useState([]);

  const removeItem = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    malls.forEach(mall => {
      const index = mall.itemList.indexOf(item);
      if (index !== -1) {
        mall.removeItem(index);
      }
    });
    const newCartItems = cartItems.filter(cartItem => cartItem !== item);
    setCartItems(newCartItems);
  }

  const displayItems = () => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    const items = malls.flatMap(mall => mall.itemList);
    return items.map((item, index) => (
      <li key={index}>
        <img src={`product${index + 1}.png`} alt={`Product ${index + 1}`} />
        <h3>{item.getName()}</h3>
        <p>${item.getPrice().toFixed(2)}</p>
        <p>Mall: {item.mallName}</p>
        <button onClick={() => removeItem(item)}>Remove Item</button>
      </li>
    ));
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
                <button onClick={() => removeItem(item)}>Remove Item</button>
              </li>
            ))}
            {displayItems()}
          </ul>
          <p>Total: ${cartItems.reduce((total, item) => total + item.getPrice(), 0).toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Cart;