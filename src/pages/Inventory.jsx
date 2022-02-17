import React from "react";
import { Flex, Text, Wrap, useColorModeValue } from "@chakra-ui/react";

import MainPanel from "../components/layout/MainPanel";
import PanelContent from "../components/layout/PanelContent";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardBody from "../components/card/CardBody";
import ItemCard from "../components/items/Card";
import { itemsData } from "../utils/data";

export default function Inventory() {
  const textColor = useColorModeValue("gray.700", "white");

  const ownItems = itemsData.filter((item) => item.owner === true);

  return (
    <Flex flexDirection="row" pt={{ base: "120px", md: "75px" }}>
      <MainPanel w={"100%"}>
        <PanelContent>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                {ownItems.length} Characters
              </Text>
            </CardHeader>
            <CardBody>
              <Wrap justify="center">
                {ownItems.map((item, key) => {
                  return (
                    <ItemCard key={key} item={item} priceView={!item.owner} />
                  );
                })}
              </Wrap>
            </CardBody>
          </Card>
        </PanelContent>
      </MainPanel>
    </Flex>
  );
}
