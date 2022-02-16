import { Box, Wrap, Text, useColorModeValue } from "@chakra-ui/react";
import ImageRender from "./ImageRender";
import Classes from "../badge/Classes";
import Type from "../badge/Type";
import Rarity from "../badge/Rarity";

export default function Card(props) {
  const { item, priceView } = props;

  let boxBackground = useColorModeValue("white", "gray.800");
  let boxBorder = useColorModeValue("white", "gray.700");
  let boxBorderHover = useColorModeValue("gray.300", "gray.700");

  return (
    <Box
      w={{ sm: "calc(50% - 8px)", md: "calc(33% - 8px)", lg: "240px" }}
      borderWidth="1px"
      borderColor={boxBorder}
      borderRadius="lg"
      boxShadow="md"
      bg={boxBackground}
      overflow="hidden"
      _hover={{
        borderColor: boxBorderHover,
        boxShadow: "xl",
        cursor: "pointer",
      }}
      px={2}
      py={4}
    >
      <Box fontWeight="semibold" letterSpacing={1} isTruncated>
        #{item.id}
      </Box>
      <Wrap>
        <Classes name={item.class} />
        <Type name={item.type} />
        <Rarity name={item.rarity} />
      </Wrap>
      <ImageRender item={item} />
      {priceView && (
        <Text
          fontWeight="semibold"
          fontSize={{ sm: "base", md: "xl" }}
          letterSpacing={1}
          align="center"
          isTruncated
        >
          0.02 USDT
        </Text>
      )}
    </Box>
  );
}
