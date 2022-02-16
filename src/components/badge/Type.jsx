import React from "react";
import { Badge } from "@chakra-ui/react";

export default function Type({ name }) {
  switch (name.toLowerCase()) {
    case "male":
      return (
        <Badge
          bg={"teal.800"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "female":
      return (
        <Badge
          bg={"red.300"}
          color={"white"}
          fontSize="10px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "neutral":
      return (
        <Badge
          bg={"blue.300"}
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
          bg={"yellow.300"}
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
