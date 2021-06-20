import React from 'react';
import { Box, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
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
          <Heading>PlatziStore</Heading>
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
