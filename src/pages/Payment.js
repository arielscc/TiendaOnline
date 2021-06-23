import React, { useContext } from 'react';
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
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import useStylesDark from '../utils/darkmode';
import useGetTotalAmount from '../hooks/useGetTotalAmount';
import AppContext from '../context/AppContext';

const Payment = () => {
  const [total, quantity] = useGetTotalAmount();
  const { bg } = useStylesDark();
  const { addNewOrder, state } = useContext(AppContext);
  const { buyer, cart } = state;
  const history = useHistory();
  const paypalOptions = {
    clientId:
      'AfeX8Fr9W-zFMyfpIqCwgLbLOBjrE5_hupuCMekXKBaYSj2zbAjDYWBHV1pR2kmaQ4YXIrkcpIYiPEnD',
    intent: 'capture',
    currency: 'USD',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  return (
    <>
      <Box w="7xl" bg={bg} p="8" spacing="8">
        <VStack maxW="xs" m="auto">
          <Heading as="h3" fontSize="xl">
            Details
          </Heading>
          <Divider />
          <HStack justify="space-between" w="full" fontWeight="bold">
            <Text>Total Quantity</Text>
            <Text fontSize="xl"> {quantity}</Text>
          </HStack>
          <Divider />
          <HStack
            justify="space-between"
            w="full"
            fontWeight="bold"
            fontSize="2xl"
          >
            <Text>Total</Text>
            <Text>{total}</Text>
          </HStack>

          <PayPalButton
            paypalOptions={paypalOptions}
            amount={total}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
          />

          <Button
            rightIcon={<FaPaypal />}
            variant="solid"
            colorScheme="green"
            shadow="md"
            w="full"
            type="submit"
            onClick={() => handlePaymentSuccess({ status: 'COMPLETED' })}
          >
            Buy
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Payment;
