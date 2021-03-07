import React, { createContext, useState, useEffect } from "react";
import { fireInfo } from "../../firebase/firebase.utils";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  receipt: false,

  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  clearCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
  collections: [],
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [receipt, setReceipt] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  const [cartItemsCount, setCartItemsCount] = useState(0);

  const [cartTotal, setCartTotal] = useState(0);

  const [collections, setCollections] = useState();

  useEffect(() => {
    const collectionsRef = fireInfo.database().ref("SHOP_DATA");
    // console.log("collectionsRef :", collectionsRef);
    collectionsRef.on("value", (snapshot) => {
      const collectionsMap = snapshot.val();
      // console.log("collectionsMap :", collectionsMap);

      const collectionsArr = Object.keys(collectionsMap).map(
        (key) => collectionsMap[key]
      );

      // console.log("collectionsArr :", collectionsArr);
      setCollections(collectionsArr);
    });

    const localData = localStorage.getItem("cartItems");
    const cartData = localData ? JSON.parse(localData) : [];

    setCartItems(cartData);
  }, []);

  const makeCartShowAndHidden = (item) => {
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  };

  const addItem = (item) => {
    makeCartShowAndHidden();
    return setCartItems(addItemToCart(cartItems, item));
  };

  const removeItem = (item) => {
    makeCartShowAndHidden();

    return setCartItems(removeItemFromCart(cartItems, item));
  };

  const toggleHidden = () => setHidden(!hidden);

  const makeReceipt = () => setReceipt(true);

  const clearItemFromCart = (item) => setCartItems(filterItemFromCart());

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        receipt,
        makeReceipt,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        clearCart,
        cartItemsCount,
        cartTotal,
        collections,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
