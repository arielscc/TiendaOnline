import React, { useContext } from 'react';
import {
  HStack,
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
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import useStylesDark from '../utils/darkmode';
import FormInputs from '../components/FormInputs';
import useGetTotalAmount from '../hooks/useGetTotalAmount';
import AppContext from '../context/AppContext';

const formIcons = {
  name: <FaUser />,
  email: <FaEnvelope />,
  address: <FaAddressBook />,
  apto: <FaLocationArrow />,
  city: <FaCity />,
  country: <FaFlag />,
  state: <FaShieldAlt />,
  postal: <FaDirections />,
  phone: <FaPhone />,
};

const Information = () => {
  const [total, quantity] = useGetTotalAmount();

  const { bg, textColor } = useStylesDark();
  const { addToBuyer } = useContext(AppContext);
  const inputs = Object.keys(formIcons);
  const history = useHistory();

  const handleSubmit = (values) => {
    addToBuyer(values);
    history.push('/checkout/payment');
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        address: '',
        apto: '',
        city: '',
        country: '',
        state: '',
        postal: '',
        phone: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        address: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        apto: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        city: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        country: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        state: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        postal: Yup.string()
          .max(4, 'Must be 4 characters or less')
          .required('Required'),
        phone: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <HStack as={Form} w="7xl" bg={bg} p="8" spacing="8" noValidate>
          <VStack w="70%">
            <Heading size="lg" color={textColor} mb="4">
              Submission Form
            </Heading>
            <SimpleGrid columns="2" spacing="4" w="full">
              {inputs.map((input) => {
                const icon = formIcons[input];
                const isvalid = errors?.[input] && touched?.[input];
                return (
                  <FormInputs
                    key={input}
                    type={input}
                    Icon={icon}
                    isnotvalid={isvalid}
                  />
                );
              })}
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
              <Text fontSize="xl">{quantity}</Text>
            </HStack>
            <Divider />
            <HStack
              justify="space-between"
              w="full"
              fontWeight="bold"
              fontSize="2xl"
            >
              <Text>Total</Text>
              <Text>${total}</Text>
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
      )}
    </Formik>
  );
};

export default Information;
