// Chakra imports
import { Flex, Grid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components

export default function Item() {
  // Chakra Color Mode
  const iconTeal = useColorModeValue("orange.300", "orange.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr" }} templateRows={{ sm: "1fr auto" }}>
        <Text>Item</Text>
      </Grid>
    </Flex>
  );
}
