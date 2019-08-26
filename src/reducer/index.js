// import { makeId } from 'simple-util-js';

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload;
    case 'INCREMENT':
      return state.map(item => {
        if (item.id === payload.id) {
          return payload;
        }

        return item;
      });
    case 'DECREMENT':
      return state.map(item => {
        if (item.id === payload.id) {
          return payload;
        }

        return item;
      });
    case 'ADD':
      return [...state, payload];
    case 'DELETE':
      return state.filter(item => item.id !== payload);
    default:
      throw new Error();
  }
};
