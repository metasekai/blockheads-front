import React from "react";
import { Flex, Text, Wrap, useColorModeValue } from "@chakra-ui/react";

import MainPanel from "../components/layout/MainPanel";
import PanelContent from "../components/layout/PanelContent";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardBody from "../components/card/CardBody";
import ItemCard from "../components/items/Card";

const items = [
  {
    id: 1102,
    sprite: "knight",
    class: "knight",
    type: "male",
    rarity: "epic",
    vitality: 43,
    strength: 44,
    defense: 41,
    morale: 36,
    agility: 12,
  },
  {
    id: 1033,
    sprite: "zombie",
    class: "zombie",
    type: "male",
    rarity: "legend",
    vitality: 43,
    strength: 44,
    defense: 41,
    morale: 36,
    agility: 12,
  },
];

export default function Inventory() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex flexDirection="row" pt={{ base: "120px", md: "75px" }}>
      <MainPanel w={"100%"}>
        <PanelContent>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                {items.length} Characters
              </Text>
            </CardHeader>
            <CardBody>
              <Wrap justify="center">
                {items.map((item, key) => {
                  return <ItemCard item={item} priceView={false} />;
                })}
              </Wrap>
            </CardBody>
          </Card>
        </PanelContent>
      </MainPanel>
    </Flex>
  );
}
