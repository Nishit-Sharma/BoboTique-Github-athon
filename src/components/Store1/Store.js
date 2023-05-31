import React from 'react';
import Layout from '../Layout.js'; 
import { Link } from 'react-router-dom';
import '../Global.css';
import { useSpring, animated } from 'react-spring';
import { Mall, Item } from './MallScript';

function Store() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  const myMall = new Mall("My Mall");
  myMall.addItem(new Item("Product 1", 10));
  myMall.addItem(new Item("Product 2", 20));
  myMall.addItem(new Item("Product 3", 30));
  myMall.addItem(new Item("Product 4", 40));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="storeBox">
          <h2>Store Name</h2>
          <ul className="Store">
            <li>
              <img src="product1.png" alt="Product 1" />
              <h3><Link to="/mall1/product1">Product 1</Link></h3>
              <p>$10.00</p>
              <button>Add to Cart</button>
            </li>
            <li>
              <img src="product2.png" alt="Product 2" />
              <h3><Link to="/mall1/product2">Product 2</Link></h3>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </li>
            <li>
              <img src="product3.png" alt="Product 3" />
              <h3><Link to="/mall1/product3">Product 3</Link></h3>
              <p>$30.00</p>
              <button>Add to Cart</button>
            </li>
            <li>
              <img src="product4.png" alt="Product 4" />
              <h3><Link to="/mall1/product4">Product 4</Link></h3>
              <p>$40.00</p>
              <button>Add to Cart</button>
            </li>
          </ul>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Store;