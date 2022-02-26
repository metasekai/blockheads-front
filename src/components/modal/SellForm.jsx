import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Spacer,
  Button,
  Checkbox,
  NumberInput,
  useToast,
  NumberInputField,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AiFillTags } from 'react-icons/ai';

const SellFormSchema = Yup.object().shape({
  price: Yup.number().positive('Price must be greater than 0').required('Price should be greater than 0'),
  agree: Yup.boolean().oneOf([true], 'You must check the checkbox'),
});

function SellForm(props) {
  const toast = useToast();
  const { isOpen, onClose, item } = props;
  const initialValues = {
    price: '',
    agree: false,
  };
  const [value, setValue] = useState('0');
  const receiveAfterTax = value - value * 0.1;
  const textColor = useColorModeValue('gray.700', 'gray.400');

  const handleSubmitForm = data => {
    console.log(data);

    // success
    toast({
      position: 'top-right',
      title: 'Great!',
      description: 'Your NFT is already on marketplace',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // error
    // toast({
    //   position: 'top-right',
    //   title: 'Oppps',
    //   description: 'Something went wrong with submission',
    //   status: 'error',
    //   duration: 3000,
    //   isClosable: true,
    // });
  };

  const handleChangeNumber = (val, form) => {
    form.setFieldValue('price', val);
    setValue(val);
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <Formik initialValues={initialValues} validationSchema={SellFormSchema} onSubmit={handleSubmitForm}>
          {props => (
            <>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Text>Sell Character</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Form>
                    <Flex flexDirection={{ sm: 'column', lg: 'row' }} w="100%">
                      <Flex flexDirection="column" h="100%" lineHeight="1.6">
                        <Text fontSize="md" color={textColor}>
                          Your asset will be listed on the Marketplace with a fixed price. In order to get it back,
                          you'll have to cancel the sale.
                        </Text>
                        <Flex my={2} align="center">
                          <Text fontSize="lg" color={textColor} fontWeight="bold">
                            Sell at
                          </Text>
                          <Spacer />
                          <Flex flexDir={'column'} align="flex-end">
                            <Field name="price" style={{}}>
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={form.errors.price && form.touched.price}
                                  display="flex"
                                  flexDir={'column'}
                                  alignItems="flex-end"
                                  justifyContent="flex-end"
                                >
                                  <NumberInput
                                    {...field}
                                    id="price"
                                    width="100px"
                                    onChange={val => {
                                      handleChangeNumber(val, form);
                                    }}
                                    value={value}
                                  >
                                    <NumberInputField />
                                  </NumberInput>
                                  <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>

                            <Text textAlign="right" fontSize="xs" color={textColor} width="170px">
                              You'll receive <span style={{ fontWeight: 'bold' }}>{receiveAfterTax}</span> after
                              subtracting a <span style={{ color: '#5DA1FF' }}>10% fee.</span>
                            </Text>
                          </Flex>
                        </Flex>
                        <Field name="agree" type="checkbox">
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.agree && form.touched.agree}>
                              <Checkbox
                                {...field}
                                size="md"
                                colorScheme="blue"
                                mt={4}
                                isRequired
                                isInvalid={form.errors.agree}
                              >
                                I understand that after successfully bought, It will not be refundable.
                              </Checkbox>
                            </FormControl>
                          )}
                        </Field>
                      </Flex>
                    </Flex>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    leftIcon={<AiFillTags />}
                    colorScheme="blue"
                    variant="solid"
                    borderRadius="6px"
                    // isLoading={loading}
                    type="submit"
                    onClick={props.handleSubmit}
                  >
                    Sell
                  </Button>
                </ModalFooter>
              </ModalContent>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default SellForm;
