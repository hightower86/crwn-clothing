import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import './CartIcon.scss';

const CartIcon = ({ items, toggleCartHidden }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon onClick={toggleCartHidden} className='shopping-icon' />
      <span className='item-count'>{items.length}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
