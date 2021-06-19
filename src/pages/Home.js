import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

import initialstate from '../initalstate';

const Home = () => {
  const { products } = initialstate;

  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
};
export default Home;
