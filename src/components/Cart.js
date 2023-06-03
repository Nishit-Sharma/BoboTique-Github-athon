import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';
import { useSpring, animated } from 'react-spring';
import { Mall1, Mall2, Mall3, Mall4, total } from './MallScript.js';

import GucciBeltImage from './static/Gucci_Belt.png';
import GucciHatImage from './static/Gucci_Hat.png';
import GucciShoesImage from './static/Gucci_Shoes.png';
import GucciWalletImage from './static/Gucci_Wallet.png';

function Cart() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  const [cartItems, setCartItems] = useState([]);

  const removeItem = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    malls.forEach((mall) => {
      const index = mall.itemList.indexOf(item);
      if (index !== -1) {
        mall.removeItem(index);
      }
    });
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
    total -= item.getPrice();
  };

  const findStore = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    for (let i = 0; i < malls.length; i++) {
      const index = malls[i].itemList.indexOf(item);
      if (index !== -1) {
        return malls[i].getMallName();
      }
    }
  };

  const displayItems = () => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    const items = malls.flatMap((mall) => mall.itemList);
  
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      const rowItems = items.slice(i, i + 4);
      rows.push(rowItems);
    }
  
    return (
      <div className="cart-item-list">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="cart-item-row">
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className="cart-item">
                {/* If item.getName() = Gucci Belt, it shows the image of the gucci belt */}
                {item.getName() === "Gucci Belt" && <img src={GucciBeltImage} alt={`Gucci Belt`} className="cart-item-image" />}
                {/* <img
                  src={`product${itemIndex + 1}.png`}
                  alt={`Product ${itemIndex + 1}`}
                  className="cart-item-image"
                /> */}
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.getName()}</h4>
                  <p className="cart-item-price">${item.getPrice().toFixed(2)}</p>
                  <p className="cart-item-store">Store: {findStore(item)}</p>
                  <button
                    onClick={() => removeItem(item)}
                    className="cart-item-remove"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <animated.div style={props}>
      <Layout>
        <div className="Cart">
          <h2 className="cart-heading">Shopping Cart</h2>
          {displayItems()}
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button className="cart-checkout-button">Checkout</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Cart;