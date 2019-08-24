import React from 'react';
import CartList from './CartList';
import TotalCart from './TotalCart';

const CartShow = () => {
  return (
    <>
      <CartList></CartList>
      <hr />
      <TotalCart></TotalCart>
    </>
  );
};

export default CartShow;
