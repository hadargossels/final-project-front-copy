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
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
  collections: [],
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const [collections, setCollections] = useState();

  useEffect(() => {
    const collectionsRef = fireInfo.database().ref("SHOP_DATA");
    console.log("collectionsRef :", collectionsRef);
    collectionsRef.on("value", (snapshot) => {
      const collectionsMap = snapshot.val();
      console.log("collectionsMap :", collectionsMap);

      const collectionsArr = Object.keys(collectionsMap).map(
        (key) => collectionsMap[key]
      );

      console.log("collectionsArr :", collectionsArr);
      setCollections(collectionsArr);
    });
  }, []);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
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
