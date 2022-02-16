import React from "react";
import { Badge } from "@chakra-ui/react";

export default function Rarity({ name }) {
  switch (name.toLowerCase()) {
    case "common":
      return (
        <Badge
          bgGradient={"linear(green.200 0%, green.500 90%)"}
          color={"white"}
          fontSize="10px"
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
          bgGradient={"linear(pink.300 0%, pink.600 90%)"}
          color={"white"}
          fontSize="10px"
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
          bgGradient={"linear(cyan.400 0%, teal.600 70%)"}
          color={"white"}
          fontSize="10px"
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
          bgGradient={"linear(red.400 0%, orange.300 90%)"}
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
          bgGradient={"linear(green.200 0%, green.500 90%)"}
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

export const GetRarity = (name) => {
  switch (name) {
    case "common":
      return "linear(green.200 0%, green.500 90%)";
    case "rare":
      return "linear(pink.300 0%, pink.600 90%)";
    case "epic":
      return "linear(cyan.400 0%, teal.600 70%)";
    case "legend":
      return "linear(red.400 0%, orange.300 90%)";
    default:
      return "linear(green.400 0%, green.400 90%)";
  }
};
