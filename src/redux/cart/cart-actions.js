import CartActionTypes from './cart-types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item,
});
export const incQuantity = (item) => ({
  type: CartActionTypes.INC_QUANTITY,
  payload: item,
});
export const decQuantity = (item) => ({
  type: CartActionTypes.DEC_QUANTITY,
  payload: item,
});
