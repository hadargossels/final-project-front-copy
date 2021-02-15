import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

////////////////////////// functions ///////////////////////////
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

  const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const clearItemOutOfCart = (arrOfCartItems, cartItemToClear) => {
    return arrOfCartItems.filter(
      (cartItem) => cartItem.id !== cartItemToClear.id
    );
  };

  ////////////////////Switch/////////////////////////////////////////////
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

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemOutOfCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: (state.cartItems = []),
      };

    // case CartActionTypes.setTotalPrice:
    //   return {
    //     ...state,
    //     cartItems: setTotalPrice(state.cartItems, action.payload),
    //   };

    default:
      return state;
  }
};

export default cartReducer;
