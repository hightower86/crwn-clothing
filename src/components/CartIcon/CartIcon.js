import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import './CartIcon.scss';

const CartIcon = ({ itemsCount, toggleCartHidden }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon onClick={toggleCartHidden} className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
