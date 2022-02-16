import React from "react";
import { Badge } from "@chakra-ui/react";

export default function Type({ name }) {
  switch (name.toLowerCase()) {
    case "male":
      return (
        <Badge
          bg={"yellow.300"}
          color={"white"}
          fontSize="12px"
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
          bg={"orange.300"}
          color={"white"}
          fontSize="12px"
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
          fontSize="12px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
  }
}
