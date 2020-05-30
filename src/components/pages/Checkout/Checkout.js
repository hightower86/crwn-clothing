import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cart-selectors';

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
const CheckoutBody = styled.div`
  color: blue;
`;

const ItemBlock = styled.span`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
const Img = styled.img`
  height: 70px;
  margin: 5px 0;
`;

const Checkout = ({ cartItems }) => {
  return (
    <Wrapper>
      <CheckoutHeader>
        {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
          (item) => (
            <ItemBlock>{item}</ItemBlock>
          )
        )}
      </CheckoutHeader>
      {cartItems.map(({ id, name, price, imageUrl, quantity }) => (
        <ItemsRow key={id}>
          <ItemBlock>
            <Img src={imageUrl} alt={name} />
          </ItemBlock>
          <ItemBlock>{name}</ItemBlock>
          <ItemBlock>{quantity}</ItemBlock>
          <ItemBlock>${price}</ItemBlock>
          <ItemBlock>X</ItemBlock>
        </ItemsRow>
      ))}

      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
