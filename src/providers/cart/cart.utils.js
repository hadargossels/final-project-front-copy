export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const addWishItemToCart = (wishItems, wishItemToAdd) => {
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === wishItemToAdd.id
  );

  if (existingWishItem) {
    return wishItems.map((wishItem) =>
      wishItem.id === wishItemToAdd.id
        ? { ...wishItem, quantity: wishItem.quantity + 1 }
        : wishItem
    );
  }

  return [...wishItems, { ...wishItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeWishItemFromCart = (wishItems, wishItemToRemove) => {
  const existingWishCartItem = wishItems.find(
    (wishItem) => wishItem.id === wishItemToRemove.id
  );

  if (existingWishCartItem.quantity === 1) {
    return wishItems.filter((wishItem) => wishItem.id !== wishItemToRemove.id);
  }

  return wishItems.map((wishItem) =>
    wishItem.id === wishItemToRemove.id
      ? { ...wishItem, quantity: wishItem.quantity - 1 }
      : wishItem
  );
};

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const filterItemFromWishlist = (wishItems, item) =>
  wishItems.filter((wishItem) => wishItem.id !== item.id);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

export const getWishItemsCount = (wishItems) =>
  wishItems.reduce(
    (accumalatedQuantity, wishItem) => accumalatedQuantity + 1,
    0
  );

export const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
