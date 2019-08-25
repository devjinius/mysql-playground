import React from 'react';
import Cart from './Cart';

const getCartComp = carts => carts.map(cart => <Cart {...cart}></Cart>);

const CartList = ({ carts }) => {
  return <div>{getCartComp(carts)}</div>;
};

export default CartList;
