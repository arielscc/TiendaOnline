import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import initialstate from '../initalstate';

const useInitialState = () => {
  const [state, setState] = useState(initialstate);
  const toast = useToast();
  const addToCart = (payload) => {
    if (state.cart.some((item) => item.id === payload.id)) {
      toast({
        title: 'Exist in cart',
        description: 'We have registered this product in cart',
        status: 'warning',
        position: 'bottom-right',
        duration: 2000,
        isClosable: true,
      });
      return state;
    }
    toast({
      title: 'Product Added to cart',
      description: "We've registered your product in the cart.",
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
    return setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

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
