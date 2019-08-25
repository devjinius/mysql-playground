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
        ...state,
        {
          id: makeId(),
          ...payload,
          quantity: 0
        }
      ];
    case 'DELETE':
      return state.filter(item => item.id !== payload);
    default:
      throw new Error();
  }
};

const App = () => {
  const [carts, dispatch] = useReducer(reducer, []);
  return (
    <Wrapper>
      <CartInput dispatch={dispatch}></CartInput>
      <CartShow carts={carts} dispatch={dispatch}></CartShow>
    </Wrapper>
  );
};

export default App;
