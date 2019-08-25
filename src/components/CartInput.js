import React, { useState } from 'react';

const CartInput = ({ dispatch }) => {
  const [newCart, setNewCart] = useState('');
  const parsingData = data => {
    const [name, price] = data.split('/');
    return { name, price };
  };
  const onAdd = () => dispatch({ type: 'ADD', payload: { ...parsingData(newCart) } });
  return (
    <>
      <input type="text" onChange={e => setNewCart(e.target.value)} value={newCart} />
      <button onClick={onAdd}>add</button>
    </>
  );
};

export default CartInput;
