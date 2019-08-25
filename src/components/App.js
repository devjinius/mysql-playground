import React, { useReducer } from 'react';
import styled from 'styled-components';
import { makeId } from 'simple-util-js';

import CartInput from './CartInput';
import CartShow from './CartShow';

const Wrapper = styled.div``;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return state.map(item => {
        if (item.id === payload) {
          item.quantity = item.quantity + 1;
          return item;
        }

        return item;
      });
    case 'DECREMENT':
      return state.map(item => {
        if (item.id === payload) {
          item.quantity = item.quantity <= 0 ? 0 : item.quantity - 1;
          return item;
        }

        return item;
      });
    case 'ADD':
      return [
        state,
        {
          ...payload
        }
      ];
    case 'DELETE':
      return state.filter(item => item.id !== payload);
    default:
      throw new Error();
  }
};

const App = () => {
  const [carts, dispatch] = useReducer(reducer, [
    {
      id: makeId(),
      name: 'test',
      price: 10,
      quantity: 10
    },
    {
      id: makeId(),
      name: 'test2',
      price: 100,
      quantity: 4
    }
  ]);
  return (
    <Wrapper>
      <CartInput dispatch={dispatch}></CartInput>
      <CartShow carts={carts} dispatch={dispatch}></CartShow>
    </Wrapper>
  );
};

export default App;
