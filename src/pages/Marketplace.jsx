import React, { useEffect, useState } from "react";
import {
  Flex,
  Stack,
  Grid,
  GridItem,
  Box,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";

import MainPanel from "../components/layout/MainPanel";
import PanelContent from "../components/layout/PanelContent";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardBody from "../components/card/CardBody";
import ItemCard from "../components/items/Card";
import Classes from "../components/badge/Classes";
import Type from "../components/badge/Type";
import Rarity from "../components/badge/Rarity";
import { itemsData, classData, typesData, rarityData } from "../utils/data";

export default function Marketplace() {
  const [checkedItems, setCheckedItems] = React.useState(["legend", "zombie"]);

  const textColor = useColorModeValue("gray.700", "white");
  const filterTitleColor = useColorModeValue("gray.700", "gray.400");
  let variantChange = "0.2s linear";

  const handleCheckboxChange = (value) => {
    const index = checkedItems.findIndex((item) => item === value);
    const newCheckedItems = [...checkedItems];
    if (index <= -1) {
      setCheckedItems([...checkedItems, value]);
    } else {
      newCheckedItems.splice(index, 1);
      setCheckedItems(newCheckedItems);
    }
  };

  const marketplaceItems = itemsData.filter((item) => item.owner === false);

  return (
    <Flex flexDirection="row" pt={{ base: "120px", md: "75px" }}>
      <Card
        transition={variantChange}
        overflowX={{ sm: "scroll", xl: "hidden" }}
        display={{ sm: "none", lg: "initial" }}
        position="absolute"
        h="calc(100vh - 180px)"
        ps="20px"
        pe="20px"
        w="270px"
        maxW="270px"
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex justify="space-between" align="flex-end" w="full">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Filters
            </Text>
            <Text
              fontSize="md"
              color="red.500"
              cursor={"pointer"}
              onClick={() => setCheckedItems([])}
            >
              Clear filters
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack w="full">
            <Divider mb={1} />
            <Text fontSize="md" color={filterTitleColor} fontWeight="bold">
              CLASS
            </Text>
            <CheckboxGroup colorScheme="green" value={checkedItems}>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {classData.map((item, key) => (
                  <GridItem key={key}>
                    <Checkbox
                      value={item}
                      onChange={() => handleCheckboxChange(item)}
                    >
                      <Classes name={item} />
                    </Checkbox>
                  </GridItem>
                ))}
              </Grid>
            </CheckboxGroup>

            <Divider py={2} />
            <Text fontSize="md" color={filterTitleColor} fontWeight="bold">
              TYPE
            </Text>
            <CheckboxGroup colorScheme="green" value={checkedItems}>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {typesData.map((item, key) => (
                  <GridItem key={key}>
                    <Checkbox
                      value={item}
                      onChange={() => handleCheckboxChange(item)}
                    >
                      <Type name={item} />
                    </Checkbox>
                  </GridItem>
                ))}
              </Grid>
            </CheckboxGroup>

            <Divider py={2} />
            <Text fontSize="md" color={filterTitleColor} fontWeight="bold">
              RARITY
            </Text>
            <CheckboxGroup colorScheme="green" value={checkedItems}>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {rarityData.map((item, key) => (
                  <GridItem key={key}>
                    <Checkbox
                      value={item}
                      onChange={() => handleCheckboxChange(item)}
                    >
                      <Rarity name={item} />
                    </Checkbox>
                  </GridItem>
                ))}
              </Grid>
            </CheckboxGroup>
          </Stack>
        </CardBody>
      </Card>
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
        h="calc(100vh - 180px)"
        ml={{ sm: "0", lg: "275px" }}
      >
        <PanelContent>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                {marketplaceItems.length} Characters
              </Text>
            </CardHeader>
            <CardBody>
              <Wrap justify="center">
                {marketplaceItems.map((item, key) => {
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
