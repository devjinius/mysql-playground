import React from 'react';
import styled from 'styled-components';

import CartInput from './CartInput';
import CartShow from './CartShow';

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <CartInput></CartInput>
      <CartShow></CartShow>
    </Wrapper>
  );
};

export default App;
