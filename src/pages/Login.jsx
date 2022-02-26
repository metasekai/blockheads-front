// Chakra imports
import { Box, Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
// Assets
import Bg from '../assets/img/background.png';
import React from 'react';
import { MetaMask } from '../components/icons/Icons';

function Login() {
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <Box
        position="absolute"
        minH={{ base: '70vh', md: '50vh' }}
        w={{ md: 'calc(100vw - 50px)' }}
        borderRadius={{ md: '15px' }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={Bg}
        bgSize="cover"
        bgPosition="bottom"
        mx={{ md: 'auto' }}
        mt={{ md: '14px' }}
      ></Box>
      <Flex direction="column" textAlign="center" justifyContent="center" align="center" mt="8.5rem" mb="30px">
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="2rem">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Stack spacing="15px" justify="center">
            <Button colorScheme="blue" variant="outline" size="lg">
              <MetaMask w="20px" h="20px" mr={2} mt={'2px'} />
              Login With Metamask
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
