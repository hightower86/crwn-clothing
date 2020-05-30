import React from 'react';

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

const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.span`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

const Checkout = () => {
  return (
    <Wrapper>
      <CheckoutHeader>
        {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
          (item) => (
            <HeaderBlock>{item}</HeaderBlock>
          )
        )}
      </CheckoutHeader>
    </Wrapper>
  );
};

export default Checkout;
