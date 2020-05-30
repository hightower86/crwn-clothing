import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  clearItemFromCart,
  incQuantity,
  decQuantity,
} from '../../redux/cart/cart-actions';

const ItemsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
`;

const ItemBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

const ItemQuantity = styled.div`
  width: 23%;
  display: flex;
`;

const Quantity = styled.span`
  margin: 0 10px;
`;

const RemoveItemBlock = styled(ItemBlock)`
  text-align: center;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Img = styled.img`
  height: 70px;
  margin: 5px 0;
  text-align: center;
`;

const IncDec = styled.span`
  cursor: pointer;
`;

const CheckoutItem = ({ item, dispatch }) => {
  const { id, name, price, imageUrl, quantity } = item;
  return (
    <ItemsRow key={id}>
      <ItemBlock>
        <Img src={imageUrl} alt={name} />
      </ItemBlock>
      <ItemBlock>{name}</ItemBlock>
      <ItemQuantity>
        <IncDec onClick={() => dispatch(decQuantity(item))}>&#10094;</IncDec>
        <Quantity>{quantity}</Quantity>
        <IncDec onClick={() => dispatch(incQuantity(item))}>&#10095;</IncDec>
      </ItemQuantity>
      <ItemBlock>${price}</ItemBlock>
      <RemoveItemBlock onClick={() => dispatch(clearItemFromCart(item))}>
        &#10005;
      </RemoveItemBlock>
    </ItemsRow>
  );
};

export default connect(null)(CheckoutItem);
