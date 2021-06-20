import { useColorModeValue } from '@chakra-ui/react';

const useStylesDark = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const bgCard = useColorModeValue('white', 'gray.700');
  const bgBody = useColorModeValue('white', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const btnHover = useColorModeValue('gray.800', 'white');
  return {
    bg,
    btnHover,
    bgCard,
    bgBody,
    textColor,
  };
};

export default useStylesDark;
