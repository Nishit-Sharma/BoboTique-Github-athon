import React from 'react';
import './Global.css';
import Layout from './Layout.js';
import { motion } from 'framer-motion';

function Cart() {
  return (
    <Layout>
    <motion.div
      initial={{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
    >
      <h2>Shopping Cart</h2>
      <ul>
        <li>
          <img src="product1.png" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$10.00</p>
          <button>Remove</button>
        </li>
        <li>
          <img src="product2.png" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$20.00</p>
          <button>Remove</button>
        </li>
        <li>
          <img src="product3.png" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$30.00</p>
          <button>Remove</button>
        </li>
      </ul>
      <p>Total: $60.00</p>
      <button>Checkout</button>
    </motion.div>
    </Layout>
  );
}

export default Cart;