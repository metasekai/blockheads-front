import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Input,
  useToast,
  Stack,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const NicknameSchema = Yup.object().shape({
  nickname: Yup.string().required('Required'),
});

function ChangeNickname(props) {
  const { isOpen, onClose } = props;
  const initialValues = {
    nickname: '',
  };

  const toast = useToast();
  const textColor = useColorModeValue('gray.700', 'gray.400');

  const handleSubmitForm = data => {
    console.log(data);

    // success
    toast({
      position: 'top-right',
      title: 'Alright!',
      description: 'Thank you for updating us!',
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

    onClose();
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <Formik initialValues={initialValues} validationSchema={NicknameSchema} onSubmit={handleSubmitForm}>
          {props => (
            <ModalContent>
              <ModalHeader align="center">
                <Text>Hello, you are .. ?</Text>
                <Text color={textColor} fontSize={'sm'}>
                  Please select a name. This can be changed later.
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Form>
                  <Stack spacing={3}>
                    <Field name="nickname">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.nickname && form.touched.nickname}>
                          <Input {...field} id="nickname" placeholder="Nickname" />
                          <FormErrorMessage>{form.errors.nickname}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Stack>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  borderRadius="6px"
                  type="submit"
                  onClick={props.handleSubmit}
                >
                  Save
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default ChangeNickname;
