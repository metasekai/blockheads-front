import React from 'react';
import Blockies from 'react-blockies';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  Wrap,
  WrapItem,
  Image,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCube, FaCoins, FaAddressCard } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';

import { useAuth } from '../providers/AuthProvider';
import Card from '../components/card/Card';
import CardBody from '../components/card/CardBody';
import CardHeader from '../components/card/CardHeader';
import TimelineRow from '../components/tables/TimelineRow';
import EmailPassForm from '../components/modal/EmailPassForm';
import ChangeNickname from '../components/modal/ChangeNickname';

import ProfileBgImage from '../assets/img/background.png';
import Logo from '../assets/img/logo.png';
import { timelineData } from '../utils/data';

function Profile() {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: openNick, onOpen: onOpenNick, onClose: onCloseNick } = useDisclosure();

  const textColor = useColorModeValue('gray.700', 'white');
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.7)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );
  const borderProfileColor = useColorModeValue('white', 'rgba(255, 255, 255, 0.31)');
  const emailColor = useColorModeValue('gray.400', 'gray.300');
  const alertBg = useColorModeValue(
    'linear-gradient(142.83deg, rgb(0 137 255 / 57%) 0%, rgb(37 104 255 / 10%) 100.84%)',
    'linear-gradient(112.83deg, rgb(122 120 255 / 21%) 0%, rgb(15 1 227 / 0%) 110.84%)'
  );

  const accountInfoCardBg = useColorModeValue(
    'linear-gradient(112.83deg, rgb(37 104 255 / 20%) 0%, rgb(0 137 255 / 48%) 130.84%)',
    'linear-gradient(112.83deg, rgb(198 223 255 / 20%) 0%, rgb(0 16 74 / 53%) 110.84%)'
  );

  const handleEdit = () => {
    onOpenNick();
  };

  const handleAddEmailPass = () => {
    onOpen();
  };

  return (
    <Flex direction="column">
      <EmailPassForm isOpen={isOpen} onClose={onClose} />
      <ChangeNickname isOpen={openNick} onClose={onCloseNick} />
      <Box
        mb={{ sm: '95px', md: '75px', xl: '70px' }}
        mt={{ sm: '-10px', md: '-10px' }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: 'column', md: 'row' }}
            mx={{ sm: 'auto', md: 'auto' }}
            maxH="330px"
            w={{ sm: '90%', xl: '95%' }}
            justifyContent={{ sm: 'center', md: 'space-between' }}
            align="center"
            backdropFilter="saturate(200%) blur(10px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: 'translateY(45%)',
              md: 'translateY(110%)',
              lg: 'translateY(160%)',
            }}
          >
            <Flex
              align="center"
              mb={{ sm: '10px', md: '0px' }}
              direction={{ sm: 'column', md: 'row' }}
              w={{ sm: '100%' }}
              textAlign={{ sm: 'center', md: 'start' }}
            >
              <Box me={'16px'}>
                <Blockies
                  seed="Jeremy"
                  size={16}
                  scale={5}
                  color="#dfe"
                  bgColor="#ffe"
                  spotColor="#abc"
                  className="profile-blockies"
                />
              </Box>
              <Flex direction="column" maxWidth="100%" my={{ sm: '14px' }}>
                <Text
                  fontSize={{ sm: 'lg', lg: 'xl' }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: '8px', md: '0px' }}
                >
                  Esthera Jackson <Icon as={BiEdit} cursor="pointer" onClick={handleEdit} />
                </Text>
                <Text fontSize={{ sm: 'sm', md: 'md' }} color={emailColor} fontWeight="semibold">
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex direction={{ sm: 'column', lg: 'row' }} w={{ sm: '100%', md: '50%', lg: 'auto' }}>
              <NavLink to="/inventory">
                <Button p="0px" bg="transparent" _hover={{ bg: 'none' }}>
                  <Flex
                    align="center"
                    w={{ sm: '100%', lg: '135px' }}
                    bg="hsla(0,0%,100%,.3)"
                    borderRadius="15px"
                    justifyContent="center"
                    py="10px"
                    boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                    border="1px solid gray.200"
                    cursor="pointer"
                  >
                    <Icon as={FaCube} me="6px" />
                    <Text fontSize="xs" color={textColor} fontWeight="bold">
                      Inventory
                    </Text>
                  </Flex>
                </Button>
              </NavLink>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Card
        p="16px"
        mt="0px"
        mb="24px"
        backdropFilter="saturate(200%) blur(50px)"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={borderProfileColor}
        bg={alertBg}
      >
        <CardHeader p="12px 5px" mb="4px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Let's complete setting up your account
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px="5px">
          <Button
            onClick={handleAddEmailPass}
            bg="blue.400"
            fontSize="sm"
            color="white"
            fontWeight="bold"
            h="45"
            mb="8px"
            _hover={{
              bg: 'blue.200',
            }}
            _active={{
              bg: 'blue.200',
            }}
          >
            <Icon as={FaAddressCard} me="6px" /> Set up email and password
          </Button>
        </CardBody>
      </Card>
      <Grid templateColumns={{ sm: '1fr', xl: 'repeat(3, 1fr)' }} gap="22px">
        <GridItem colSpan={2}>
          <Card p="16px" my={{ sm: '24px', xl: '0px' }}>
            <CardHeader p="12px 5px" mb="12px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Account Information
              </Text>
            </CardHeader>
            <CardBody px="5px">
              <Flex direction="column">
                <Wrap spacing="24px" mb="16px">
                  <WrapItem>
                    <Card
                      minW={'150px'}
                      p="16px"
                      mt="0px"
                      mb="24px"
                      backdropFilter="saturate(200%) blur(50px)"
                      boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                      border="2px solid"
                      borderColor={borderProfileColor}
                      borderRadius="8px"
                      bg={accountInfoCardBg}
                    >
                      <CardBody p="4px 24px">
                        <Flex direction="column" align="center" justify="center" w={'100%'} h={'100%'}>
                          <Icon as={FaCoins} boxSize={8} me="6px" mb={2} />
                          <Text fontSize="sm">0 MATIC</Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </WrapItem>
                  <WrapItem>
                    <Card
                      minW={'150px'}
                      p="16px"
                      mt="0px"
                      mb="24px"
                      backdropFilter="saturate(200%) blur(50px)"
                      boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                      border="2px solid"
                      borderColor={borderProfileColor}
                      borderRadius="8px"
                      bg={accountInfoCardBg}
                    >
                      <CardBody p="4px 24px">
                        <Flex direction="column" align="center" w={'100%'}>
                          <Image src={Logo} boxSize={8} me="6px" mb={2} />
                          <Text fontSize="sm">0 CHAR</Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </WrapItem>
                  <WrapItem>
                    <Card
                      minW={'150px'}
                      p="16px"
                      mt="0px"
                      mb="24px"
                      backdropFilter="saturate(200%) blur(50px)"
                      boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                      border="2px solid"
                      borderColor={borderProfileColor}
                      borderRadius="8px"
                      bg={accountInfoCardBg}
                    >
                      <CardBody p="4px 24px">
                        <Flex direction="column" align="center" w={'100%'}>
                          <Image src={Logo} boxSize={8} me="6px" mb={2} />
                          <Text fontSize="sm">0 BLK</Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </WrapItem>
                </Wrap>
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={textColor} fontWeight="bold" me="10px">
                    Wallet Address:{' '}
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="400">
                    {auth && auth.address}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={textColor} fontWeight="bold" me="10px">
                    Email:{' '}
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="400">
                    esthera@simmmple.com
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card p="16px">
            <CardHeader p="12px 5px" mb="12px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Recent Transactions
              </Text>
            </CardHeader>
            <CardBody px="5px">
              <Flex direction="column">
                {timelineData.map((row, index, arr) => {
                  return (
                    <TimelineRow
                      logo={row.logo}
                      title={row.title}
                      date={row.date}
                      color={row.color}
                      index={index}
                      arrLength={arr.length}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Profile;
