import React from 'react';
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Link,
  chakra,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import useStylesDark from '../utils/darkmode';

const Footer = () => {
  const { textColor, bg } = useStylesDark();
  return (
    <Box
      as="footer"
      transition="box-shadow 0.2s"
      bg={bg}
      w="full"
      overflowY="hidden"
      borderTopWidth={2}
      borderTopColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Box role="contentinfo" mx="auto" maxW="7xl" py="12">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          px="4"
        >
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
            <chakra.h3 fontSize="3xl" fontWeight="bold">
              Platzi Merch
            </chakra.h3>
          </Link>
          <Box color={textColor}>
            <Text fontWeight="semibold">
              Diseñado y Desarrollado con el ♥ por @arielscc
            </Text>
            <Text>&copy; Todos los izquierdos reservados</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
