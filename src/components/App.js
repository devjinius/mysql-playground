import React, { useReducer } from 'react';
import styled from 'styled-components';

import CartInput from './CartInput';
import CartShow from './CartShow';

const Wrapper = styled.div``;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return state.map(item => {
        if (item.id === payload.id) {
          item.quantity = item.quantity + 1;
          return item;
        }

        return item;
      });
    case 'DECREMENT':
      return state.map(item => {
        if (item.id === payload.id) {
          item.quantity = item.quantity - 1;
          return item;
        }

        return item;
      });
    case 'ADD':
      return [
        state,
        {
          payload
        }
      ];
    default:
      throw new Error();
  }
};

const App = () => {
  const [carts, dispatch] = useReducer(reducer, [
    {
      id: 'test',
      name: 'test',
      price: 10,
      quantity: 10
    },
    {
      id: 'test2',
      name: 'test2',
      price: 100,
      quantity: 4
    }
  ]);
  return (
    <Wrapper>
      <CartInput dispatch={dispatch}></CartInput>
      <CartShow carts={carts}></CartShow>
    </Wrapper>
  );
};

export default App;
