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
  myMall.addItem(new Item("Rolex Watch 1", 1000));
  myMall.addItem(new Item("Rolex Watch 2", 1000));
  myMall.addItem(new Item("Rolex Watch 3", 1000));
  myMall.addItem(new Item("Rolex Watch 4", 1000));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Store">
            <h2 className="store-header">Rolex</h2>
            <ul>
              {myMall.itemList.map((item, index) => (
                <li key={index}>
                  {index === 0 && <Link to={`/mall4/product${index + 1}`}><img className="product-image" src={RolexWatch1} alt={`Rolex Watch 1`} /></Link>}
                  {index === 1 && <Link to={`/mall4/product${index + 1}`}><img className="product-image" src={RolexWatch2} alt={`Rolex Watch 2`} /></Link>}
                  {index === 2 && <Link to={`/mall4/product${index + 1}`}><img className="product-image" src={RolexWatch3} alt={`Rolex Watch 3`} /></Link>}
                  {index === 3 && <Link to={`/mall4/product${index + 1}`}><img className="product-image" src={RolexWatch4} alt={`Rolex Watch 4`} /></Link>}
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
