import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { toggleCart } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import './CartDropdown.scss';

const CartDropdown = ({ toggleCartHidden, items }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        {items.map(({ name, id, imageUrl, price, quantity }) => (
          <div key={id} className='cart-item'>
            <img style={{ width: '50px' }} src={imageUrl} alt={name} />
            <div className='name-price'>
              <p>{name}</p>
              <p>{`${quantity} X $${price}`}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomButton onClick={toggleCartHidden}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
