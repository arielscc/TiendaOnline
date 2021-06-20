import React from 'react';
import {
  Box,
  Badge,
  Image,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import useStylesDark from '../utils/darkmode';

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;
  const { bgCard } = useStylesDark();

  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bg={bgCard}
      shadow="md"
      border="1px"
      borderColor={useColorModeValue('gray.100', 'inherit')}
    >
      <Image src={image} alt={title} h="250px" objectFit="contain" m="auto" />
      <Box p="6">
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

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {description}
        </Text>

        <HStack justifyContent="space-between" mt="2">
          <Text as="p" color="gray.500" fontWeight="semibold">
            $ {price} c/u
          </Text>
          <Box d="flex" mt="2" alignItems="center">
            <StarIcon color="teal.500" />
            <StarIcon color="teal.500" />
            <StarIcon color="teal.500" />
            <StarIcon color="gray.300" />
            <StarIcon color="gray.300" />
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              34 reviews
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
