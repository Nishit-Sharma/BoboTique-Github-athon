import React from 'react';
import Layout from '../Layout.js'; 
import '../Global.css';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { Mall, Item } from '../MallScript.js';

import LVBriefcaseImage from '../static/LV_Briefcase.png';
import LVCapImage from '../static/LV_Cap.png';
import LVPurseImage from '../static/LV_Purse.png';
import LVSneakersImage from '../static/LV_Sneakers.png';

function Store2() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const myMall = new Mall("Louis Vuitton");
  myMall.addItem(new Item("Louis Vuitton Briefcase", 25));
  myMall.addItem(new Item("Louis Vuitton Cap", 25));
  myMall.addItem(new Item("Louis Vuitton Purse", 160));
  myMall.addItem(new Item("Louis Vuitton Sneakers", 70));

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Store">
          <h2 className="store-header">Louis Vuitton</h2>
          <ul>
            {myMall.itemList.map((item, index) => (
              <li key={index}>
                {index === 0 && <Link to={`/mall2/product${index + 1}`}><img className="product-image" src={LVBriefcaseImage} alt={`Louis Vuitton Briefcase`} /></Link>}
                {index === 1 && <Link to={`/mall2/product${index + 1}`}><img className="product-image" src={LVCapImage} alt={`Louis Vuitton Cap`} /></Link>}
                {index === 2 && <Link to={`/mall2/product${index + 1}`}><img className="product-image" src={LVPurseImage} alt={`Louis Vuitton Purse`} /></Link>}
                {index === 3 && <Link to={`/mall2/product${index + 1}`}><img className="product-image" src={LVSneakersImage} alt={`Louis Vuitton Sneakers`} /></Link>}
                <h3><Link to={`/mall2/product${index + 1}`}>{item.getName()}</Link></h3>
                <p>${item.getPrice().toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Store2;
