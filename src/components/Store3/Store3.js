import React from 'react';
import Layout from '../Layout.js'; 
import '../Global.css';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { Mall, Item } from '../MallScript.js';

import BalenciagaBagImage from '../static/Balenciaga_Bag.png';
import BalenciagaShirtImage from '../static/Balenciaga_Shirt.png';
import BalenciagaShoesImage from '../static/Balenciaga_Shoes.png';
import BalenciagaSunglassesImage from '../static/Balenciaga_Sunglasses.png';

function Store3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const myMall = new Mall("Balenciaga");
  myMall.addItem(new Item("Balenciaga Bag", 313));
  myMall.addItem(new Item("Balenciaga Shirt", 25));
  myMall.addItem(new Item("Balenciaga Shoes", 75));
  myMall.addItem(new Item("Balenciaga Sunglasses", 150));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Store">
          <h2 className="store-header">Balenciaga</h2>
          <ul>
            {myMall.itemList.map((item, index) => (
              <li key={index}>
                {index === 0 && <img className="product-image" src={BalenciagaBagImage} alt={`Balenciaga Bag`} />}
                {index === 1 && <img className="product-image" src={BalenciagaShirtImage} alt={`Balenciaga Shirt`} />}
                {index === 2 && <img className="product-image" src={BalenciagaShoesImage} alt={`Balenciaga Shoes`} />}
                {index === 3 && <img className="product-image" src={BalenciagaSunglassesImage} alt={`Balenciaga Sunglasses`} />}
                <h3><Link to={`/mall3/product${index + 1}`}>{item.getName()}</Link></h3>
                <p>${item.getPrice().toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Store3;
