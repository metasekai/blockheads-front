import React from "react";
import { Badge } from "@chakra-ui/react";

export default function Classes({ name }) {
  switch (name.toLowerCase()) {
    case "knight":
      return (
        <Badge
          bg={"blue.800"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "cowboy":
      return (
        <Badge
          bg={"red.700"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "robot":
      return (
        <Badge
          bg={"gray.400"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "shinobi":
      return (
        <Badge
          bg={"cyan.700"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "zombie":
      return (
        <Badge
          bg={"purple.700"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    default:
      return (
        <Badge
          bg={"blue.800"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
  }
}
