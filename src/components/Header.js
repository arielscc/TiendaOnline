import React, { useContext } from 'react';
import {
  chakra,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Button,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import { FaMoon, FaShoppingBag, FaSun } from 'react-icons/fa';
import { Link as RLink } from 'react-router-dom';
import useStylesDark from '../utils/darkmode';
import AppContext from '../context/AppContext';

export default function Header() {
  const { bg, textColor } = useStylesDark();

  const text = useColorModeValue('dark', 'light');
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { state } = useContext(AppContext);
  const { cart } = state;
  const total = cart.length;

  return (
    <>
      <chakra.header
        position="fixed"
        zIndex="banner"
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Box h="4.5rem" mx="auto" maxW="7xl">
          <Flex
            w="full"
            h="full"
            px="4"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Link
                as={RLink}
                to="/"
                mr="2"
                color={textColor}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
                _focus={{
                  outline: 'none',
                }}
              >
                <chakra.h1 fontSize="3xl" fontWeight="bold">
                  TiendaOnline
                </chakra.h1>
              </Link>
            </Flex>
            <Flex
              justify="flex-end"
              align="center"
              color="gray.400"
              gridGap="4"
            >
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                as={RLink}
                to="/checkout"
                leftIcon={<FaShoppingBag />}
                colorScheme="teal"
                variant="solid"
                size="sm"
                rightIcon={total}
              >
                Checkout
              </Button>
              <Button
                as={RLink}
                to="/checkout"
                color="teal.300"
                display={{ base: 'inline-flex', md: 'none' }}
                leftIcon={<FaShoppingBag />}
                rightIcon={total}
                alignItems="center"
                justifyContent="center"
              />

              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </Flex>
          </Flex>
        </Box>
      </chakra.header>
    </>
  );
}
