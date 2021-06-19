import React from 'react';
import { Flex, Wrap } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => (
  <Flex bg="gray.50" justifyContent="center" p="24">
    <Wrap justify="center" w="1200px" justifySelf="center" spacing="6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrap>
  </Flex>
);

export default ProductsGrid;
