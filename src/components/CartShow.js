import React from 'react';
import CartList from './CartList';
import TotalCart from './TotalCart';

const getTotal = carts => carts.reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);

const CartShow = ({ carts, dispatch }) => {
  return (
    <>
      <CartList carts={carts} dispatch={dispatch}></CartList>
      <hr />
      <TotalCart total={getTotal(carts)}></TotalCart>
    </>
  );
};

export default CartShow;
