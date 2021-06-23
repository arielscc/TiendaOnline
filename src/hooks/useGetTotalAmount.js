import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

const useGetTotalAmount = () => {
  const [total, setTotal] = useState(0);
  const { state } = useContext(AppContext);
  const { cart } = state;
  const quantity = cart.length;

  useEffect(() => {
    const cost = cart.reduce((acc, { price }) => acc + price, 0);
    setTotal(cost);
  }, [cart]);

  return [total, quantity];
};

export default useGetTotalAmount;
