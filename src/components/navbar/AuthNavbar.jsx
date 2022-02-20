import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

// Chakra imports
import { Button, Flex, HStack, Box, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { HomeIcon, PersonIcon, RocketIcon } from '../icons/Icons';
import Logo from '../../assets/img/logo.png';

import { useAuth } from '../../providers/AuthProvider';

export default function AuthNavbar(props) {
  const auth = useAuth();
  const { logoText } = props;
  // verifies if routeName is the one active (in browser input)

  // Chakra color mode
  let navbarIcon = useColorModeValue('gray.700', 'gray.200');
  let mainText = useColorModeValue('gray.700', 'gray.200');
  let navbarBg = useColorModeValue(
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );
  let navbarBorder = useColorModeValue('1.5px solid #FFFFFF', '1.5px solid rgba(255, 255, 255, 0.31)');
  let navbarShadow = useColorModeValue('0px 7px 23px rgba(0, 0, 0, 0.05)', 'none');
  let navbarFilter = useColorModeValue('none', 'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))');
  let navbarBackdrop = 'blur(21px)';
  let bgButton = useColorModeValue('linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)', 'gray.800');
  let navbarPosition = 'fixed';
  let colorButton = 'white';
  if (props.secondary === true) {
    navbarIcon = 'white';
    navbarBg = 'none';
    navbarBorder = 'none';
    navbarShadow = 'initial';
    navbarFilter = 'initial';
    navbarBackdrop = 'none';
    bgButton = 'white';
    colorButton = 'gray.700';
    mainText = 'white';
    navbarPosition = 'absolute';
  }

  const brand = (
    <Box
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <Image src={Logo} boxSize={7} mr={2} />
      <Text fontSize="sm" mt="3px">
        {logoText}
      </Text>
    </Box>
  );

  const linksAuth = (
    <HStack display={{ sm: 'none', lg: 'flex' }} ml={20}>
      <a href="/marketplace">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<HomeIcon color={navbarIcon} w="18px" h="18px" me="0px" />}
        >
          <Text>Marketplace</Text>
        </Button>
      </a>
      <a href="/inventory">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<PersonIcon color={navbarIcon} w="18px" h="18px" me="0px" />}
        >
          <Text>Inventory</Text>
        </Button>
      </a>
      <a href="/mint">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<RocketIcon color={navbarIcon} w="18px" h="18px" me="0px" />}
        >
          <Text>Mint</Text>
        </Button>
      </a>
    </HStack>
  );

  const handleAuth = useCallback(async () => {
    await auth.connect();
  }, [auth]);

  return (
    <Flex
      position={navbarPosition}
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius="15px"
      px="16px"
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
    >
      <Flex w="100%" justifyContent={{ sm: 'start', lg: 'space-between' }}>
        {brand}
        {linksAuth}

        {auth.connected ? (
          <Button
            disabled={true}
            bg={bgButton}
            color={colorButton}
            fontSize="sm"
            variant="no-hover"
            borderRadius="35px"
            px="30px"
            display={{
              sm: 'none',
              lg: 'flex',
            }}
          >
            {auth.getShortenedAddress()}
          </Button>
        ) : (
          <Button
            onClick={handleAuth}
            bg={bgButton}
            color={colorButton}
            fontSize="sm"
            variant="no-hover"
            borderRadius="35px"
            px="30px"
            display={{
              sm: 'none',
              lg: 'flex',
            }}
          >
            Connect Wallet
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  brandText: PropTypes.string,
};
