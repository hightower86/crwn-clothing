import CartActionTypes from './cart-types';

import addItemToCart from './cart-utils';

const INITIAL_STATE = { hidden: true, cartItems: [] };

const updateQuantity = (cartItem, items, value) => {
  const idx = items.findIndex((item) => item.id === cartItem.id);
  const newQuantity = items[idx].quantity + value;
  if (newQuantity === 0) {
    return items.filter((item) => item.id !== cartItem.id);
  }
  const newItems = [
    ...items.slice(0, idx),
    { ...cartItem, quantity: newQuantity },
    ...items.slice(idx + 1),
  ];
  return newItems;
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems),
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.INC_QUANTITY:
      return {
        ...state,
        cartItems: updateQuantity(action.payload, state.cartItems, 1),
      };
    case CartActionTypes.DEC_QUANTITY:
      return {
        ...state,
        cartItems: updateQuantity(action.payload, state.cartItems, -1),
      };
    default:
      return state;
  }
};

export default cartReducer;
