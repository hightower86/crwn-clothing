import React from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import CustomButton from '../CustomButton/CustomButton';
import { toggleCart } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ toggleCartHidden, items, hidden }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return (
    <animated.div className='cart-dropdown' style={fade}>
      <div className='cart-items'>
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        {items.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}
      </div>
      <CustomButton onClick={toggleCartHidden}>GO TO CHECKOUT</CustomButton>
    </animated.div>
  );
};

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
  hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
