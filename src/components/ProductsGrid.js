import React, { useContext } from 'react';
import { Wrap } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import AppContext from '../context/AppContext';

const ProductsGrid = () => {
  const { state } = useContext(AppContext);
  const { products } = state;
  return (
    <Wrap justify="center" maxW="7xl" justifySelf="center" spacing="6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrap>
  );
};

export default ProductsGrid;
