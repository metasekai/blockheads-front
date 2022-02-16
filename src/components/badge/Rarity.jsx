import React from "react";
import { Badge } from "@chakra-ui/react";

export default function Rarity({ name }) {
  switch (name.toLowerCase()) {
    case "common":
      return (
        <Badge
          bg={"green.200"}
          color={"white"}
          fontSize="12px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "rare":
      return (
        <Badge
          bg={"pink.200"}
          color={"white"}
          fontSize="12px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "epic":
      return (
        <Badge
          bg={"teal.300"}
          color={"white"}
          fontSize="12px"
          p="3px 10px"
          borderRadius="8px"
          textTransform="uppercase"
        >
          {name}
        </Badge>
      );
    case "legend":
      return (
        <Badge
          bg={"orange.400"}
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
          bg={"green.200"}
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
