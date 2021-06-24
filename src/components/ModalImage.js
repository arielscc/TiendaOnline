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
          objectFit="contain"
          m="auto"
          loading="lazy"
          w="full"
          h={['40vh', '400px']}
          htmlWidth="500px"
          htmlHeight="400px"
        />
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="teal" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
export default ModalImage;
