import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AiFillTags } from 'react-icons/ai';

function SellForm(props) {
  const toast = useToast();
  const textColor = useColorModeValue('gray.700', 'gray.400');
  const { isOpen, onClose, item } = props;
  const [value, setValue] = useState('0');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const receiveAfterTax = value - value * 0.1;

  const handleSubmitSell = () => {
    if (parseInt(value, 10) <= 0) {
      toast({
        position: 'top-right',
        title: 'Error',
        description: 'Price should be greater than 0',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('price', value);
        resolve();
      }, 3000);
    });
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <form onSubmit={handleSubmit(handleSubmitSell)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text>Sell Character</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection={{ sm: 'column', lg: 'row' }} w="100%">
                <Flex flexDirection="column" h="100%" lineHeight="1.6">
                  <Text fontSize="md" color={textColor}>
                    Your asset will be listed on the Marketplace with a fixed price. In order to get it back, you'll
                    have to cancel the sale.
                  </Text>
                  <Flex my={2} align="center">
                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                      Sell at
                    </Text>
                    <Spacer />
                    <Flex flexDir={'column'} align="flex-end">
                      <NumberInput
                        width="100px"
                        onChange={val => setValue(val)}
                        value={value}
                        isInvalid={parseInt(value, 10) <= 0 || value === '' ? true : false}
                      >
                        <NumberInputField />
                      </NumberInput>
                      <Text textAlign="right" fontSize="xs" color={textColor} width="170px">
                        You'll receive <span style={{ fontWeight: 'bold' }}>{receiveAfterTax}</span> after subtracting a{' '}
                        <span style={{ color: '#5DA1FF' }}>10% fee.</span>
                      </Text>
                    </Flex>
                  </Flex>
                  <Checkbox size="md" colorScheme="teal" mt={4} isRequired>
                    I understand that after successfully bought, It will not be refundable.
                  </Checkbox>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                leftIcon={<AiFillTags />}
                colorScheme="blue"
                variant="solid"
                borderRadius="6px"
                isLoading={isSubmitting}
                type="submit"
              >
                Sell
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default SellForm;
