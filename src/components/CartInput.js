import React, { useState } from 'react';

const CartInput = ({ dispatch }) => {
  const [newCart, setNewCart] = useState('');
  const parsingData = data => {
    const [name, price] = data.split('/');
    return { name, price };
  };
  const onAdd = async () => {
    const rawData = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...parsingData(newCart), quantity: 0 })
    });
    const data = await rawData.json();
    dispatch({ type: 'ADD', payload: data });
  };
  return (
    <>
      <input type="text" onChange={e => setNewCart(e.target.value)} value={newCart} />
      <button onClick={onAdd}>add</button>
    </>
  );
};

export default CartInput;
