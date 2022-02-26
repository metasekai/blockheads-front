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
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EmailPassSchema = Yup.object().shape({
  password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function EmailPassForm(props) {
  const { isOpen, onClose } = props;
  const initialValues = {
    password: '',
    passwordConfirmation: '',
    email: '',
  };

  const toast = useToast();

  const handleSubmitForm = data => {
    console.log(data);

    // success
    toast({
      position: 'top-right',
      title: 'Great!',
      description: 'Check your email for the verification code',
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
        <Formik initialValues={initialValues} validationSchema={EmailPassSchema} onSubmit={handleSubmitForm}>
          {props => (
            <ModalContent>
              <ModalHeader align="center">
                <Text>We will send verification code to your email.</Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Form>
                  <Stack spacing={3}>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <Input {...field} type="email" id="email" placeholder="Email address" />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                          <Input {...field} type="password" id="password" placeholder="Password" />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="passwordConfirmation">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.passwordConfirmation && form.touched.passwordConfirmation}>
                          <Input {...field} type="password" id="passwordConfirmation" placeholder="Repeat password" />
                          <FormErrorMessage>{form.errors.passwordConfirmation}</FormErrorMessage>
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
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default EmailPassForm;
