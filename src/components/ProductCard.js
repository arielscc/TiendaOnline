import React, { useContext } from 'react';
import {
  Box,
  Badge,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Image,
  useDisclosure,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { BiShow, BiCart } from 'react-icons/bi';
import useStylesDark from '../utils/darkmode';
import AppContext from '../context/AppContext';
import ModalImage from './ModalImage';

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { image, title, price, description } = product;
  const { bgCard, textColor } = useStylesDark();
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (payload) => {
    addToCart(payload);
  };
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bg={bgCard}
      shadow="md"
      border="1px"
      borderColor={useColorModeValue('gray.100', 'inherit')}
      position="relative"
    >
      <IconButton
        icon={<BiShow />}
        position="absolute"
        top="0"
        right="0"
        m="2"
        variant="outline"
        onClick={onOpen}
      />
      <Image
        src={image}
        alt={title}
        h="200px"
        w="full"
        objectFit="contain"
        m="auto"
        loading="lazy"
      />
      <Box p="6" pt="0">
        <Heading mb="4">{title}</Heading>
        <HStack spacing="2">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            3 units &bull; 2 stock
          </Box>
        </HStack>

        <Text
          as="h4"
          color={textColor}
          fontWeight="medium"
          lineHeight="tight"
          mt="1"
        >
          {description}
        </Text>

        <HStack justifyContent="space-between" mt="2">
          <Text as="p" color={textColor} fontWeight="bold" fontSize="xl">
            $ {price} c/u
          </Text>
          <Box d="flex" mt="2" alignItems="center">
            <StarIcon color={useColorModeValue('teal.500', 'teal.200')} />
            <StarIcon color={useColorModeValue('teal.500', 'teal.200')} />
            <StarIcon color={useColorModeValue('teal.500', 'teal.200')} />
            <StarIcon color="gray.300" />
            <StarIcon color="gray.300" />
            <Box
              as="span"
              ml="2"
              color={useColorModeValue('gray.600', 'gray.300')}
              fontSize="sm"
            >
              34 reviews
            </Box>
          </Box>
        </HStack>
        <Button
          leftIcon={<BiCart />}
          w="full"
          mt="4"
          colorScheme="teal"
          fontWeight="bold"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
      <ModalImage
        title={title}
        image={image}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default ProductCard;
