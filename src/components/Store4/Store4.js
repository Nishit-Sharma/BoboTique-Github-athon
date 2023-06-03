import React from 'react';
import Layout from '../Layout.js'; 
import '../Global.css';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { Mall, Item } from '../MallScript.js';

import RolexWatch1 from '../static/Rolex_Watch_1.png';
import RolexWatch2 from '../static/Rolex_Watch_2.png';
import RolexWatch3 from '../static/Rolex_Watch_3.png';
import RolexWatch4 from '../static/Rolex_Watch_4.png';

function Store4() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const myMall = new Mall("Rolex");
  myMall.addItem(new Item("Rolex Watch 1", 10));
  myMall.addItem(new Item("Rolex Watch 2", 20));
  myMall.addItem(new Item("Rolex Watch 3", 30));
  myMall.addItem(new Item("Rolex Watch 4", 40));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Store">
            <h2 className="store-header">Rolex</h2>
            <ul>
              {myMall.itemList.map((item, index) => (
                <li key={index}>
                  {index === 0 && <img className="product-image" src={RolexWatch1} alt={`Rolex Watch 1`} />}
                  {index === 1 && <img className="product-image" src={RolexWatch2} alt={`Rolex Watch 2`} />}
                  {index === 2 && <img className="product-image" src={RolexWatch3} alt={`Rolex Watch 3`} />}
                  {index === 3 && <img className="product-image" src={RolexWatch4} alt={`Rolex Watch 4`} />}
                  <h3><Link to={`/mall4/product${index + 1}`}>{item.getName()}</Link></h3>
                  <p>${item.getPrice().toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
      </Layout>
    </animated.div>
  );
}

export default Store4;
