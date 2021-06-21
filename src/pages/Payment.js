import React from 'react';
import {
  Text,
  Heading,
  HStack,
  VStack,
  Divider,
  Box,
  Button,
} from '@chakra-ui/react';
import { FaPaypal } from 'react-icons/fa';
import useStylesDark from '../utils/darkmode';

const Payment = () => {
  const { bg } = useStylesDark();
  return (
    <>
      <Box w="7xl" bg={bg} p="8" spacing="8">
        <VStack maxW="xs" m="auto">
          <Heading as="h3" fontSize="xl">
            Details
          </Heading>
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
            rightIcon={<FaPaypal />}
            variant="solid"
            colorScheme="green"
            shadow="md"
            w="full"
            type="submit"
          >
            Buy
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Payment;
