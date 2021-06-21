import React from 'react';
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
  SimpleGrid,
  VStack,
  Divider,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';
import {
  FaCity,
  FaUser,
  FaEnvelope,
  FaAddressBook,
  FaLocationArrow,
  FaFlag,
  FaShieldAlt,
  FaDirections,
  FaPhone,
  FaShoppingBag,
} from 'react-icons/fa';
import useStylesDark from '../utils/darkmode';

const Information = () => {
  const { bg, textColor } = useStylesDark();
  return (
    <>
      <HStack as="form" w="7xl" bg={bg} p="8" spacing="8">
        <VStack w="70%">
          <Heading size="lg" color={textColor} mb="4">
            Submission Form
          </Heading>
          <SimpleGrid columns="2" spacing="4" w="full">
            <FormControl id="full-name" mt="2" isRequired>
              <FormLabel>Full name</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaUser />
                </InputLeftElement>
                <Input placeholder="Full name" type="text" autoComplete="off" />
              </InputGroup>
            </FormControl>

            <FormControl id="email" mt="2" isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaEnvelope />
                </InputLeftElement>
                <Input placeholder="Email" type="email" autoComplete="off" />
              </InputGroup>
            </FormControl>

            <FormControl id="adreess" mt="2" isRequired>
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaAddressBook />
                </InputLeftElement>
                <Input placeholder="Address" />
              </InputGroup>
            </FormControl>

            <FormControl id="apto" mt="2" isRequired>
              <FormLabel>Apto</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaLocationArrow />
                </InputLeftElement>
                <Input placeholder="Apto" />
              </InputGroup>
            </FormControl>

            <FormControl id="city" mt="2" isRequired>
              <FormLabel>City</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaCity />
                </InputLeftElement>
                <Input placeholder="City" />
              </InputGroup>
            </FormControl>

            <FormControl id="country" mt="2" isRequired>
              <FormLabel>Country</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaFlag />
                </InputLeftElement>
                <Input placeholder="Country" />
              </InputGroup>
            </FormControl>

            <FormControl id="state" mt="2" isRequired>
              <FormLabel>State</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaShieldAlt />
                </InputLeftElement>
                <Input placeholder="State" />
              </InputGroup>
            </FormControl>

            <FormControl id="postal" mt="2" isRequired>
              <FormLabel>Postal</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaDirections />
                </InputLeftElement>
                <Input placeholder="Postal" />
              </InputGroup>
            </FormControl>

            <FormControl id="phone" mt="2" isRequired>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.400">
                  <FaPhone />
                </InputLeftElement>
                <Input placeholder="Phone" />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
        </VStack>
        <VStack
          alignSelf="flex-start"
          p="6"
          spacing="3"
          w={['full', 'full', '30%']}
          border="1px"
          borderColor="gray.200"
          rounded="xl"
          boxShadow="md"
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
            rightIcon={<FaShoppingBag />}
            variant="solid"
            colorScheme="green"
            shadow="md"
            w="full"
            type="submit"
          >
            Buy
          </Button>
        </VStack>
      </HStack>
    </>
  );
};

export default Information;
