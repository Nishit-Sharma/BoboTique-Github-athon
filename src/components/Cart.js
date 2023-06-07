import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';
import { useSpring, animated } from 'react-spring';
import { Mall1, Mall2, Mall3, Mall4, total, totalItems } from './MallScript.js';

// Importing all of the images

import GucciBeltImage from './static/Gucci_Belt.png';
import GucciHatImage from './static/Gucci_Hat.png';
import GucciShoesImage from './static/Gucci_Shoes.png';
import GucciWalletImage from './static/Gucci_Wallet.png';

import LVBriefcaseImage from './static/LV_Briefcase.png';
import LVCapImage from './static/LV_Cap.png';
import LVPurseImage from './static/LV_Purse.png';
import LVSneakersImage from './static/LV_Sneakers.png';

import BalenciagaBagImage from './static/Balenciaga_Bag.png';
import BalenciagaShirtImage from './static/Balenciaga_Shirt.png';
import BalenciagaShoesImage from './static/Balenciaga_Shoes.png';
import BalenciagaSunglassesImage from './static/Balenciaga_Sunglasses.png';

import RolexWatch1 from './static/Rolex_Watch_1.png';
import RolexWatch2 from './static/Rolex_Watch_2.png';
import RolexWatch3 from './static/Rolex_Watch_3.png';
import RolexWatch4 from './static/Rolex_Watch_4.png';

function Cart() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  // Things to update the state
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Function for removing items from the malls
  const removeItem = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    // Iterates through the mall until it gets to the index and then removes it
    malls.forEach((mall) => {
      const index = mall.itemList.indexOf(item);
      if (index !== -1) {
        mall.removeItem(index);
      }
    });
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
    // Updating total and total items
    total -= item.getPrice();
    totalItems -= 1;
    setCart([...cart, total]);
  };

  // Finding what mall the item is in
  const findStore = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    // Going through each mall object and finding what index the item is in and then returning the name of the mall
    for (let i = 0; i < malls.length; i++) {
      const index = malls[i].itemList.indexOf(item);
      if (index !== -1) {
        return malls[i].getMallName();
      }
      else {
        console.log("Something went wrong");
      }
    }
  };

  // Create a function that has a pop up that says test
  const displayAlert = () => {
    alert("This is a simulation of a shopping mall created for a project. \n\nThis simulation is created by Nishit, Brayden, Afnan, Vansh, Chris, and Reihan \n\nYou have purchased " + totalItems + " items. \n\nYour total is $" + total.toFixed(2) + "\n\nThank you for shopping with us!");
  };

  // Sort his items alphabetically
  const sortItemsAlphabetically = (items) => {
    return items.sort((a, b) => a.getName().localeCompare(b.getName()));
  };

  const displayItems = () => {
    // Getting all of the items from the malls
    const malls = [Mall1, Mall2, Mall3, Mall4];
    const items = malls.flatMap((mall) => mall.itemList);

    // Sorting the items alphabetically
    const sortedItems = sortItemsAlphabetically(items);
  
    const rows = [];
    // Creating rows of 4 items
    for (let i = 0; i < sortedItems.length; i += 4) {
      const rowItems = sortedItems.slice(i, i + 4);
      rows.push(rowItems);
    }
  
    return (
      <div className="cart-item-list">
        {/* Iterating through the rows and then the items in the rows */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="cart-item-row">
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className="cart-item">

                {/* Displaying the image of the item */}
                {item.getName() === "Gucci Belt" && <img src={GucciBeltImage} alt={`Gucci Belt`} className="cart-item-image" />}
                {item.getName() === "Gucci Bucket Hat" && <img src={GucciHatImage} alt={`Gucci Bucket Hat`} className="cart-item-image" />}
                {item.getName() === "Gucci Shoes" && <img src={GucciShoesImage} alt={`Gucci Shoes`} className="cart-item-image" />}
                {item.getName() === "Gucci Wallet" && <img src={GucciWalletImage} alt={`Gucci Wallet`} className="cart-item-image" />}

                {item.getName() === "Louis Vuitton Briefcase" && <img src={LVBriefcaseImage} alt={`Louis Vuitton Briefcase`} className="cart-item-image" />}
                {item.getName() === "Louis Vuitton Cap" && <img src={LVCapImage} alt={`Louis Vuitton Cap`} className="cart-item-image" />}
                {item.getName() === "Louis Vuitton Purse" && <img src={LVPurseImage} alt={`Louis Vuitton Purse`} className="cart-item-image" />}
                {item.getName() === "Louis Vuitton Sneakers" && <img src={LVSneakersImage} alt={`Louis Vuitton Sneakers`} className="cart-item-image" />}

                {item.getName() === "Balenciaga Bag" && <img src={BalenciagaBagImage} alt={`Balenciaga Bag`} className="cart-item-image" />}
                {item.getName() === "Balenciaga Shirt" && <img src={BalenciagaShirtImage} alt={`Balenciaga Shirt`} className="cart-item-image" />}
                {item.getName() === "Balenciaga Shoes" && <img src={BalenciagaShoesImage} alt={`Balenciaga Shoes`} className="cart-item-image" />}
                {item.getName() === "Balenciaga Sunglasses" && <img src={BalenciagaSunglassesImage} alt={`Balenciaga Sunglasses`} className="cart-item-image" />}

                {item.getName() === "Rolex Watch 1" && <img src={RolexWatch1} alt={`Rolex Watch 1`} className="cart-item-image" />}
                {item.getName() === "Rolex Watch 2" && <img src={RolexWatch2} alt={`Rolex Watch 2`} className="cart-item-image" />}
                {item.getName() === "Rolex Watch 3" && <img src={RolexWatch3} alt={`Rolex Watch 3`} className="cart-item-image" />}
                {item.getName() === "Rolex Watch 4" && <img src={RolexWatch4} alt={`Rolex Watch 4`} className="cart-item-image" />}

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
          <button className="cart-checkout-button" onClick={() => displayAlert()}>Checkout</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Cart;