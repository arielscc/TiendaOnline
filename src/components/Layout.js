import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import useStylesDark from '../utils/darkmode';

const Layout = ({ children }) => {
  const { bgBody } = useStylesDark();
  return (
    <div>
      <Header />
      <Flex bg={bgBody} justifyContent="center" p="4" py="10">
        {children}
      </Flex>
      <Footer />
    </div>
  );
};

export default Layout;
