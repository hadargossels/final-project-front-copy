import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const addItemToCart = (arrOfCartItems, cartItemToAdd) => {
    let itemExist = arrOfCartItems.find((cartItem) => {
      return cartItem.id === cartItemToAdd.id;
    });

    if (itemExist) {
      return arrOfCartItems.map((cartItem) => {
        return cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    }
    return [...arrOfCartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
