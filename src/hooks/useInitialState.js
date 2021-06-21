import { useState } from 'react';
import initialstate from '../initalstate';

const useInitialState = () => {
  const [state, setState] = useState(initialstate);
  const addToCart = (payload) =>
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  const removeFromCart = (payload) =>
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
