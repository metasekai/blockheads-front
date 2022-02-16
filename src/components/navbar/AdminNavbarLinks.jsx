import React from "react";
import PropTypes from "prop-types";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ProfileIcon, SettingsIcon } from "../icons/Icons";
import { SidebarResponsive } from "../sidebar/Sidebar";

import routes from "../../routes";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, logoText, ...rest } =
    props;

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");
  let colorButton = "white";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <Button
        bg={bgButton}
        color={colorButton}
        fontSize="sm"
        variant="no-hover"
        borderRadius="35px"
        px="30px"
        display={{
          sm: "none",
          lg: "flex",
        }}
        mr={4}
      >
        Connect Wallet
      </Button>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  logoText: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
