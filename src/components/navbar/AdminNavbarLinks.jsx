import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Flex,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SidebarResponsive } from "../sidebar/Sidebar";

import routes from "../../routes";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, logoText, ...rest } =
    props;

  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  let colorButton = "white";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.600"
  );

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
        mr={2}
      >
        Connect Wallet
      </Button>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
      <Box onClick={toggleColorMode} _hover={{ cursor: "pointer" }}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Box>
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
