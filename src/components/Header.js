import React from 'react';
import {
  chakra,
  HStack,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Button,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';
import useStylesDark from '../utils/darkmode';

export default function Header() {
  const { bg, btnHover, textColor } = useStylesDark();

  const text = useColorModeValue('dark', 'light');
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const MobileNavContent = (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="1px"
          display="flex"
          justifyContent="space-between"
        >
          <Heading size="lg">PlatziStore</Heading>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="close menu"
            fontSize="20px"
            color={useColorModeValue('gray.800', 'inherit')}
            variant="ghost"
            icon={<VscClose />}
            onClick={onClose}
          />
        </DrawerHeader>
        <DrawerBody>
          <VStack>
            <Button
              variant="ghost"
              color={textColor}
              display="inline-flex"
              fontSize="md"
              w="full"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              color={textColor}
              display="inline-flex"
              fontSize="md"
              w="full"
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              color={textColor}
              display="inline-flex"
              fontSize="md"
              w="full"
            >
              Pricing
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Box h="4.5rem" mx="auto" maxW="7xl">
          <Flex
            w="full"
            h="full"
            px="4"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Heading size="lg" mr="4">
                PlatziStore
              </Heading>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <Button
                  bg={bg}
                  color={textColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: btnHover }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Features
                </Button>
                <Button
                  bg={bg}
                  color={textColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: btnHover }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Blog
                </Button>
                <Button
                  bg={bg}
                  color={textColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: btnHover }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Pricing
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="2" display={{ base: 'none', md: 'flex' }}>
                <Button colorScheme="teal" variant="outline" size="sm">
                  Sign in
                </Button>
                <Button colorScheme="teal" variant="solid" size="sm">
                  Sign up
                </Button>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.500', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </Box>
      </chakra.header>
    </>
  );
}