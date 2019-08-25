import React from 'react';
import styled from 'styled-components';

const Item = styled.div``;

const Cart = ({ id, name, price, quantity }) => {
  return (
    <Item>
      {name} ({price}) : {quantity}
      <button>+1</button>
      <button>-1</button>
      <button>삭제</button>
    </Item>
  );
};

export default Cart;
