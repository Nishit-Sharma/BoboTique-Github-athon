import React from 'react';
import './Global.css';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import gucciLogo from './static/gucci-logo.png'; // Import the Gucci logo image
import lvLogo from './static/Louis-Vuitton-logo.png';
import balenciagaLogo from './static/Balenciaga-logo-1917-removebg-preview.png';
import rolexLogo from './static/Rolex-logo.png';

function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div style={props}>
      <Layout>
        
        {/* Linking to all of the stores */}
        <div className="Home">
          <h1>Welcome to our shopping website!</h1>
          <p>Choose from our four stores and start shopping:</p>
          <ul>
            <li>
              <Link to="/mall1">
                <img className="logo logo-size" src={gucciLogo} alt="Gucci" /> {/* Replace with the Gucci logo */}
              </Link>
            </li>
            <li>
              <Link to="/mall2">
                <img className="logo logo-size" src={lvLogo} alt="LV" />
              </Link>
            </li>
            <li>
              <Link to="/mall3">
                <img className="logo logo-size" src={balenciagaLogo} alt="Balenciaga" />
              </Link>
            </li>
            <li>
              <Link to="/mall4">
                <img className="logo logo-size" src={rolexLogo} alt="Rolex" />
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Home;