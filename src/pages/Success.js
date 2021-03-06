import React, { useContext } from 'react';
import { Text, VStack, AspectRatio, Box, Heading } from '@chakra-ui/react';
import useStylesDark from '../utils/darkmode';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { bg, textColor } = useStylesDark();
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const buyerLocation = useGoogleAddress(buyer);
  return (
    <VStack as="form" w="7xl" bg={bg} p="8" color={textColor}>
      <Heading>Punchase Confirmation</Heading>
      <Text>Gracias por Realizar tu compra {buyer.name}</Text>
      <Text>Tu pedido llegara en 3 días a tu dirección</Text>
      <Box w="full">
        <AspectRatio ratio={4 / 2}>
          <Map data={buyerLocation} />
        </AspectRatio>
      </Box>
    </VStack>
  );
};

export default Success;
