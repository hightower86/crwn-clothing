import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CustomButton from '../CustomButton/CustomButton';
import { toggleCart } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../CartItem';
import './CartDropdown.scss';

const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 50px auto;
  color: red;
`;

const CartDropdown = ({ dispatch, items, hidden, history }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return (
    <animated.div className='cart-dropdown' style={fade}>
      <div className='cart-items'>
        {items.length ? (
          items.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>The Cart is Empty</EmptyMessage>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </animated.div>
  );
};

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
  hidden: state.cart.hidden,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
