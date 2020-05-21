import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { toggleCart } from '../../redux/cart/cart-actions';

import './CartDropdown.scss';

const CartDropdown = ({ toggleCartHidden, items }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        {items.map(({ name, id }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
      <CustomButton onClick={toggleCartHidden}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
