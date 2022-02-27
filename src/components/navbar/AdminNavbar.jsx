import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HomeIcon, PersonIcon, RocketIcon } from '../icons/Icons';
import { Box, Flex, HStack, Button, Text, Image, useColorModeValue } from '@chakra-ui/react';

import AdminNavbarLinks from './AdminNavbarLinks';
import { useAuth } from '../../providers/AuthProvider';
import Logo from '../../assets/img/logo.png';

export default function AdminNavbar(props) {
  const auth = useAuth();

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let navbarIcon = useColorModeValue('gray.700', 'gray.200');
  let mainText = useColorModeValue('gray.700', 'gray.200');
  let navbarFilter = 'none';
  let navbarShadow = 'none';
  let navbarBg = useColorModeValue(
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );
  let navbarBorder = useColorModeValue('1.5px solid #FFFFFF', '1.5px solid rgba(255, 255, 255, 0.31)');
  let secondaryMargin = '0px';
  let paddingX = '15px';

  if (props.secondary) {
    mainText = 'white';
    secondaryMargin = '22px';
    paddingX = '30px';
  }

  var linksAuth = (
    <HStack display={{ sm: 'none', lg: 'flex' }} ml={10}>
      <NavLink to="/marketplace">
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
      </NavLink>
      <NavLink to="/profile">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<PersonIcon color={navbarIcon} w="18px" h="18px" me="0px" />}
        >
          <Text>Profile</Text>
        </Button>
      </NavLink>
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
        BLOCKHEADS
      </Text>
    </Box>
  );

  return (
    <Flex
      position={'absolute'}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      borderWidth="1.5px"
      borderStyle="solid"
      alignItems={{ xl: 'center' }}
      borderRadius="16px"
      display="flex"
      minH={{ sm: 'auto', md: '75px' }}
      justifyContent={{ xl: 'center' }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      left={{ sm: '16px', xl: '36px' }}
      px={{
        sm: paddingX,
        md: '30px',
      }}
      ps={{
        xl: '12px',
      }}
      pt="8px"
      top="18px"
      w={{ sm: 'calc(100vw - 30px)', xl: 'calc(100vw - 75px )' }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: 'column',
          md: 'row',
        }}
        alignItems={{ xl: 'center' }}
      >
        {brand}
        {linksAuth}
        <Box ms="auto" w={{ sm: '100%', md: 'unset' }}>
          <AdminNavbarLinks auth={auth} onOpen={props.onOpen} logoText={'BLOCKHEADS'} secondary={props.secondary} />
        </Box>
      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
