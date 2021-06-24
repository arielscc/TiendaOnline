import React from 'react';
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Button,
} from '@chakra-ui/react';

const ModalImage = ({ title, image, isOpen, onClose }) => (
  <Modal
    isCentered
    onClose={onClose}
    isOpen={isOpen}
    motionPreset="slideInBottom"
    size="3xl"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Heading mb="4" textAlign="center">
          {title}
        </Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          src={image}
          w="500px"
          h={['40vh', '400px']}
          objectFit="contain"
          bg="red.200"
          m="auto"
          loading="lazy"
        />
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="teal" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
export default ModalImage;
