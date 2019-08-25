import React from 'react';
import Cart from './Cart';

const CartList = ({ carts, dispatch }) => {
  const onIncrement = id => dispatch({ type: 'INCREMENT', payload: id });
  const onDecrement = id => dispatch({ type: 'DECREMENT', payload: id });
  const onDelete = id => dispatch({ type: 'DELETE', payload: id });

  const getCartComp = carts =>
    carts.map(cart => (
      <Cart
        key={cart.id}
        {...cart}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ));

  return <div>{getCartComp(carts)}</div>;
};

export default CartList;
