import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Image, Text, useColorModeValue, useToast, useDisclosure } from '@chakra-ui/react';
// Assets
import MintSuccess from '../components/modal/MintSuccess';
import Bg from '../assets/img/background.png';
import ZombieMale from '../assets/img/zombie-male.png';
import CowboyFemale from '../assets/img/cowboy-female.png';
import CowboyMale from '../assets/img/cowboy-male.png';
import Knight from '../assets/img/knight.png';
import Robot from '../assets/img/robot.png';
import ShinobiFemale from '../assets/img/shinobi-female.png';
import ShinobiMale from '../assets/img/shinobi-male.png';
import ZombieFemale from '../assets/img/zombie-female.png';
import useApprove from '../hooks/useApprove';
import useMintCharacter from '../hooks/useMintCharacter';
import config from '../artifacts/config';
import ErrorMessages from '../utils/errors';

const minted = {
  id: 1215,
  sprite: 'knight',
  class: 'knight',
  type: 'male',
  rarity: 'legend',
  vitality: 43,
  strength: 44,
  defense: 41,
  morale: 36,
  agility: 22,
};

function Mint() {
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue('gray.700', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');

  const toast = useToast();
  const checkAllowance = useApprove(config.daiAddress);
  const minter = useMintCharacter();

  const nfts = [ZombieMale, CowboyFemale, CowboyMale, Knight, Robot, ShinobiFemale, ShinobiMale, ZombieFemale];

  const handleOnApprove = async () => {
    console.log('handleOnApprove', checkAllowance.approved);
    setLoading(true);

    // await approveSpending();
    if (!checkAllowance.approved) {
      await checkAllowance.approveSpending();
    }
    setLoading(false);
  };

  const handleMint = async () => {
    setLoading(true);

    const minted = await minter.mintNewCharacter();

    if (!minted) {
      setLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(false);
      onOpen();
    }, 3000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let index = selected + 1;
      if (index >= 8) {
        index = 0;
      }

      setSelected(index);
    }, 600);
    return () => clearInterval(interval);
  }, [selected]);

  useEffect(() => {
    const err = minter.error;
    if (err) {
      toast({
        position: 'top-right',
        title: 'Error',
        description: ErrorMessages[err.code].message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [minter.error]);

  return (
    <>
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

        <Flex alignItems="center" justifyContent="center" mb="60px" mt="6.5rem" flexDir={'column'}>
          <Image
            src={nfts[selected]}
            alt="nft collections"
            borderRadius="full"
            objectFit={'cover'}
            objectPosition="top"
            boxSize="200px"
            w="220px"
            mb={8}
          />
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
            <Text fontSize="xx-large" color={textColor} fontWeight="bold" textAlign="center" letterSpacing={4} mb="8px">
              0/5000
            </Text>
            <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center">
              1 NFT costs 0.02 DAI
            </Text>
            <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">
              Excluding gas fees.
            </Text>

            <Text fontSize="md" color="gray.400" textAlign="center" mb="22px">
              Connect to polygon network.
            </Text>

            {!checkAllowance.approved ? (
              <Button
                onClick={handleOnApprove}
                isLoading={loading}
                loadingText="Submitting"
                type="submit"
                bg="teal.300"
                fontSize="sm"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: 'teal.200',
                }}
                _active={{
                  bg: 'teal.400',
                }}
              >
                APPROVE
              </Button>
            ) : (
              <Button
                onClick={handleMint}
                isLoading={loading}
                loadingText="Submitting"
                type="submit"
                bg="teal.300"
                fontSize="sm"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: 'teal.200',
                }}
                _active={{
                  bg: 'teal.400',
                }}
              >
                MINT Character
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
      <MintSuccess isOpen={isOpen} onClose={onClose} item={minted} />
    </>
  );
}

export default Mint;
