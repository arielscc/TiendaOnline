import React from 'react';
import { Flex, Wrap } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import useStylesDark from '../utils/darkmode';

const ProductsGrid = ({ products }) => {
  const { bgBody } = useStylesDark();
  return (
    <Flex bg={bgBody} justifyContent="center" p="24">
      <Wrap justify="center" w="1200px" justifySelf="center" spacing="6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    </Flex>
  );
};

export default ProductsGrid;
