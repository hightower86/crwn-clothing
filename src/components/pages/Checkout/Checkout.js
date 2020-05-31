import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../../redux/cart/cart-selectors';

import CheckoutItem from '../../../components/CheckoutItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  font-size: 1.2rem;
`;

const ItemsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
`;

const CheckoutHeader = styled(ItemsRow)`
  color: red;
  height: 40px;
  position: sticky;
`;

const ItemBlock = styled.span`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

const Total = styled.span`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const Checkout = ({ cartItems, total, dispatch }) => {
  return (
    <Wrapper>
      <CheckoutHeader>
        {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
          (item) => (
            <ItemBlock key={item}>{item}</ItemBlock>
          )
        )}
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${total}</Total>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
