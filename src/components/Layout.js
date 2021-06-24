import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import useStylesDark from '../utils/darkmode';

const Layout = ({ children }) => {
  const { bgBody } = useStylesDark();
  return (
    <>
      <Header />
      <Flex bg={bgBody} justifyContent="center" px="4" pb="10" pt="32">
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
