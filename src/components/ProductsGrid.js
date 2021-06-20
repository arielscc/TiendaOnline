import React from 'react';
import { Wrap } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => (
  <Wrap justify="center" maxW="7xl" justifySelf="center" spacing="6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Wrap>
);

export default ProductsGrid;
