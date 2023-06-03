// Store.js
import React from 'react';
import Layout from '../Layout.js';
import '../Global.css';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Mall, Item } from '../MallScript.js';

import GucciBeltImage from '../static/Gucci_Belt.png';
import GucciHatImage from '../static/Gucci_Hat.png';
import GucciShoesImage from '../static/Gucci_Shoes.png';
import GucciWalletImage from '../static/Gucci_Wallet.png';

function Store() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  const myMall = new Mall("Gucci");
  myMall.addItem(new Item("Gucci Belt", 15));
  myMall.addItem(new Item("Gucci Bucket Hat", 34));
  myMall.addItem(new Item("Gucci Shoes", 75));
  myMall.addItem(new Item("Gucci Wallet", 50));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Store">
          <h2 className="store-header">Gucci</h2>
          <ul>
            {myMall.itemList.map((item, index) => (
              <li key={index}>
                {index === 0 && <img className="product-image" src={GucciBeltImage} alt={`Gucci Belt`} />}
                {index === 1 && <img className="product-image" src={GucciHatImage} alt={`Gucci Bucket Hat`} />}
                {index === 2 && <img className="product-image" src={GucciShoesImage} alt={`Gucci Shoes`} />}
                {index === 3 && <img className="product-image" src={GucciWalletImage} alt={`Gucci Wallet`} />}
                <h3><Link to={`/mall1/product${index + 1}`}>{item.getName()}</Link></h3>
                <p>${item.getPrice().toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Store;