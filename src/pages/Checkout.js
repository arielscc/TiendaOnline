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
  Badge,
  Button,
  Heading,
  Divider,
  Flex,
  Image,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons';
import { VscSymbolNumeric } from 'react-icons/vsc';
import { IoPricetagsOutline } from 'react-icons/io5';
import useStylesDark from '../utils/darkmode';
import initialstate from '../initalstate';

const Checkout = () => {
  const { bg } = useStylesDark();
  const { cart } = initialstate;
  const { textColor } = useStylesDark();

  return (
    <>
      <Flex
        direction={['column', 'column', 'row']}
        maxW={['sm', '2xl', '7xl']}
        bg={bg}
        p="4"
        rounded="lg"
      >
        <Table variant="simple" w={['full', 'full', '70%']}>
          <chakra.caption fontSize="xl" fontWeight="bold" mb="4">
            Checkout List
          </chakra.caption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th display={['none', 'none', 'table-cell']}>Status</Th>
              <Th isNumeric>
                <HStack>
                  <VscSymbolNumeric />
                  <Text
                    display={{
                      base: 'none',
                      lg: 'inherit',
                    }}
                  >
                    Quantity
                  </Text>
                </HStack>
              </Th>

              <Th isNumeric>
                <HStack>
                  <IoPricetagsOutline />
                  <Text
                    display={{
                      base: 'none',
                      lg: 'inherit',
                    }}
                  >
                    Price
                  </Text>
                </HStack>
              </Th>

              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((product) => (
              <Tr key={product.id}>
                <Td
                  display="flex"
                  flexDirection={['column', 'row']}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    borderRadius="full"
                    boxSize={['50px', '75px']}
                    bg={useColorModeValue('gray.200', 'gray.700')}
                    objectFit="contain"
                    src={product.image}
                    alt={product.title}
                    mr={['none', 'none', '2']}
                  />
                  <Box>
                    <chakra.h4 color={textColor} fontWeight="bold">
                      {product.title}
                    </chakra.h4>
                    <Text
                      display={['none', 'contents']}
                      color={textColor}
                      pt="1"
                    >
                      {product.description}
                    </Text>
                  </Box>
                </Td>
                <Td display={['none', 'none', 'table-cell']}>
                  <Badge colorScheme="green">New</Badge>
                </Td>
                <Td isNumeric>1</Td>
                <Td isNumeric>$ {product.price}</Td>
                <Td>
                  <IconButton
                    display={['initial', 'initial', 'none']}
                    icon={<DeleteIcon />}
                    variant="solid"
                    colorScheme="red"
                  />
                  <Button
                    display={['none', 'none', 'initial']}
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
        <VStack
          alignSelf="flex-start"
          p="6"
          spacing="3"
          w={['full', 'full', '30%']}
          border="1px"
          borderColor="gray.200"
          rounded="xl"
          boxShadow="md"
          ml={{ base: '0', md: '6' }}
          my={{ base: '6', md: '0' }}
          color={textColor}
        >
          <Heading as="h3" fontSize="xl">
            Details
          </Heading>
          <Divider />
          <HStack justify="space-between" w="full" fontWeight="bold">
            <Text>Total Quantity</Text>
            <Text fontSize="xl"> 2</Text>
          </HStack>
          <Divider />
          <HStack
            justify="space-between"
            w="full"
            fontWeight="bold"
            fontSize="2xl"
          >
            <Text>Total</Text>
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
      </Flex>
    </>
  );
};

export default Checkout;
