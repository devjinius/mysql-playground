import React, { useReducer, useState, useEffect } from 'react';
import styled from 'styled-components';

import { cartReducer } from '../reducer';
import CartInput from './CartInput';
import CartShow from './CartShow';

const Wrapper = styled.div``;

const App = () => {
  const [carts, dispatch] = useReducer(cartReducer, []);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const rawData = await fetch('http://localhost:8080/carts');
      const payload = await rawData.json();
      dispatch({ type: 'INIT', payload });
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <Wrapper>
      <CartInput dispatch={dispatch}></CartInput>
      <CartShow carts={carts} dispatch={dispatch}></CartShow>
    </Wrapper>
  );
};

export default App;
