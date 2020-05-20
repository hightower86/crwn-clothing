import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { toggleCart } from '../../redux/cart/cart-actions';

import './CartDropdown.scss';

const CartDropdown = ({ toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton onClick={toggleCartHidden}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
