import React from 'react';
import Cart from './Cart';

const CartList = ({ carts, dispatch }) => {
  const onIncrement = async (id, quantity) => {
    const rawData = await fetch(`http://localhost:8080/cart/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity + 1
      })
    });
    const data = await rawData.json();
    dispatch({ type: 'INCREMENT', payload: data });
  };

  const onDecrement = async (id, quantity) => {
    const rawData = await fetch(`http://localhost:8080/cart/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity <= 0 ? 0 : quantity - 1
      })
    });
    const data = await rawData.json();
    dispatch({ type: 'DECREMENT', payload: data });
  };

  const onDelete = async id => {
    const rawData = await fetch(`http://localhost:8080/cart/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await rawData.json();
    dispatch({ type: 'DELETE', payload: id });
  };

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
