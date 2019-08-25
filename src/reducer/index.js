import { makeId } from 'simple-util-js';

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload;
    case 'INCREMENT':
      return state.map(item => {
        if (item.id === payload) {
          item.quantity = item.quantity + 1;
          return item;
        }

        return item;
      });
    case 'DECREMENT':
      return state.map(item => {
        if (item.id === payload) {
          item.quantity = item.quantity <= 0 ? 0 : item.quantity - 1;
          return item;
        }

        return item;
      });
    case 'ADD':
      return [
        ...state,
        {
          id: makeId(),
          ...payload,
          quantity: 0
        }
      ];
    case 'DELETE':
      return state.filter(item => item.id !== payload);
    default:
      throw new Error();
  }
};
