import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
0% {
  opacity:0;
}
100% {
  opacity:1;
  }
`;
const Name = styled.p`
  color: red;
  animation: 1s ${FadeIn} ease-in;
`;

const Img = styled.img`
  width: 50px;
  animation: 0.5s ${FadeIn} ease-in;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .name-price {
    padding: 10px;
    p {
      margin: 0;
    }
  }
`;

const CartItem = ({ item }) => {
  const { name, id, imageUrl, price, quantity } = item;
  return (
    <Wrapper key={id}>
      <Img src={imageUrl} alt={name} />
      <div className='name-price'>
        <Name>{name}</Name>
        <p>{`${quantity} X $${price}`}</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
