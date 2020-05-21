import CartActionTypes from './cart-types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});
