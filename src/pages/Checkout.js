import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  HStack,
  Text,
  chakra,
  Avatar,
  Badge,
  Button,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons';
import useStylesDark from '../utils/darkmode';
import initialstate from '../initalstate';

const Checkout = () => {
  const { bg } = useStylesDark();
  const { cart } = initialstate;
  const { textColor } = useStylesDark();

  return (
    <>
      <HStack w="7xl" bg={bg} spacing="4" p="4" rounded="lg">
        <Table variant="simple" w="70%">
          <chakra.caption fontSize="xl" fontWeight="bold" mb="4">
            Checkout List
          </chakra.caption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Status</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((product) => (
              <Tr key={product.id}>
                <Td display="flex">
                  <Avatar
                    size="lg"
                    name={product.title}
                    src={product.image}
                    bg="gray.200"
                  />
                  <Box ml="3">
                    <chakra.h4 color={textColor} fontWeight="bold">
                      {product.title}
                    </chakra.h4>
                    <Text color={textColor} pt="1">
                      {product.description}
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Td>
                <Td isNumeric>1</Td>
                <Td isNumeric>$ {product.price}</Td>
                <Td>
                  <Button
                    leftIcon={<DeleteIcon />}
                    variant="solid"
                    colorScheme="red"
                    size="sm"
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <VStack w="30%" p="6" spacing="3" alignSelf="flex-start">
          <Heading as="h3" fontSize="xl">
            Details
          </Heading>
          <Divider />
          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Total Quantity</Text>
            <Text>2</Text>
          </HStack>
          <Divider />
          <HStack justify="space-between" w="full">
            <Text fontWeight="bold">Total Price</Text>
            <Text>$35</Text>
          </HStack>
          <Button
            rightIcon={<ArrowForwardIcon />}
            variant="solid"
            colorScheme="green"
            shadow="md"
            w="full"
          >
            Continue Order
          </Button>
        </VStack>
      </HStack>
    </>
  );
};

export default Checkout;
