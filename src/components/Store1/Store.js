import React from 'react';
import Layout from '../Layout.js'; 
import '../Global.css';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { Mall1 } from '../MallScript.js';

function Store() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  return (
    <animated.div style={props}>
      <Layout>
        <div className="storeBox">
          <h2>{Mall1.getMallName()}</h2>
          <ul>
            {Mall1.itemList.map((item, index) => (
              <li key={index}>
                <img src={`product${index + 1}.png`} alt={`Product ${index + 1}`} />
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
