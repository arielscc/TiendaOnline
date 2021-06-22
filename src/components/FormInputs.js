import { Field, ErrorMessage } from 'formik';
import React from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from '@chakra-ui/react';

const FormInputs = React.memo(({ type, Icon, isnotvalid }) => (
  <FormControl id={type} mt="2" h="20" isRequired isInvalid={isnotvalid}>
    <FormLabel textTransform="capitalize">{type}</FormLabel>
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.400">
        {Icon}
      </InputLeftElement>
      <Input
        as={Field}
        placeholder={type}
        _placeholder={{
          textTransform: 'capitalize',
        }}
        focusBorderColor={isnotvalid ? 'red.400' : 'teal.400'}
        autoComplete="off"
        type={type}
        name={type}
      />
    </InputGroup>
    <Box color="red.400" fontSize="sm">
      <ErrorMessage name={type} />
    </Box>
  </FormControl>
));

export default FormInputs;
