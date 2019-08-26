import React from 'react';
import styled from 'styled-components';

const Item = styled.div``;

const Cart = ({ id, name, price, quantity, onIncrement, onDecrement, onDelete }) => {
  return (
    <Item>
      {name} ({price}) : {quantity}
      <button onClick={() => onIncrement(id, quantity)}>+1</button>
      <button onClick={() => onDecrement(id, quantity)}>-1</button>
      <button onClick={() => onDelete(id)}>삭제</button>
    </Item>
  );
};

export default Cart;
