import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Image,
  HStack,
  Box,
  Badge,
} from "@chakra-ui/react";

import Health from "../../assets/img/health.png";
import Strength from "../../assets/img/strength.png";
import Shield from "../../assets/img/shield.png";
import Morale from "../../assets/img/morale.png";
import Speed from "../../assets/img/speed.png";
import { KnightRun } from "../sprites/Actions";
import Classes from "../badge/Classes";
import Type from "../badge/Type";
import Rarity from "../badge/Rarity";

function MintSuccess(props) {
  const { isOpen, onClose, item } = props;
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let index = selected + 1;
      if (index >= 10) {
        index = 0;
      }

      setSelected(index);
    }, 50);
    return () => clearInterval(interval);
  }, [selected]);

  const GetRarity = (name) => {
    switch (name) {
      case "common":
        return "green.200";
      case "rare":
        return "pink.200";
      case "epic":
        return "teal.300";
      case "legend":
        return "orange.400";
      default:
        return "green.300";
    }
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
              <Flex
                bg={GetRarity(item.rarity)}
                align="center"
                justify="center"
                borderRadius="15px"
                width={{ lg: "40%" }}
                minHeight={{ sm: "250px" }}
              >
                <Image
                  src={KnightRun[selected]}
                  alt="nft collections"
                  objectFit={"contain"}
                  boxSize="250px"
                  m={8}
                />
              </Flex>
              <Spacer />

              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "55%" }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Congratulations!
                </Text>
                <Text fontSize="md" color="gray.400" fontWeight="bold">
                  You have minted a{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {item.class}
                  </span>
                  !
                </Text>

                <Box
                  mt={2}
                  p={3}
                  shadow="md"
                  borderWidth="1px"
                  flex="1"
                  borderRadius="md"
                >
                  <HStack spacing={16} mb={2}>
                    <Flex flexDirection="column">
                      <Text fontSize="md" color="gray.400" fontWeight="bold">
                        ID
                      </Text>
                      <Text fontSize="md" fontWeight="bold">
                        #{item.id}
                      </Text>
                    </Flex>

                    <Flex flexDirection="column" align="flex-start">
                      <Text fontSize="md" color="gray.400" fontWeight="bold">
                        CLASS
                      </Text>
                      <Classes name={item.class} />
                    </Flex>
                  </HStack>
                  <HStack spacing={14}>
                    <Flex flexDirection="column">
                      <Text fontSize="md" color="gray.400" fontWeight="bold">
                        TYPE
                      </Text>
                      <Type name={item.type} />
                    </Flex>

                    <Flex flexDirection="column" align="flex-start">
                      <Text fontSize="md" color="gray.400" fontWeight="bold">
                        RARITY
                      </Text>
                      <Rarity name={item.rarity} />
                    </Flex>
                  </HStack>
                </Box>

                <Box
                  mt={2}
                  p={3}
                  shadow="md"
                  borderWidth="1px"
                  flex="1"
                  borderRadius="md"
                >
                  <HStack spacing={8}>
                    <Flex flexDirection="column">
                      <Text fontSize="md" color="gray.400" letterSpacing={1}>
                        Vitality
                      </Text>
                      <Flex flexDirection="row">
                        <Image
                          src={Health}
                          alt="hp icon"
                          objectFit={"contain"}
                          boxSize="30px"
                        />
                        <Text fontSize="md" fontWeight="bold">
                          {item.vitality}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex flexDirection="column" align="flex-start">
                      <Text fontSize="md" color="gray.400" letterSpacing={1}>
                        Strength
                      </Text>
                      <Flex flexDirection="row">
                        <Image
                          src={Strength}
                          alt="hp icon"
                          objectFit={"contain"}
                          boxSize="30px"
                        />
                        <Text fontSize="md" fontWeight="bold">
                          {item.strength}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex flexDirection="column" align="flex-start">
                      <Text fontSize="md" color="gray.400" letterSpacing={1}>
                        Defense
                      </Text>

                      <Flex flexDirection="row">
                        <Image
                          src={Shield}
                          alt="hp icon"
                          objectFit={"contain"}
                          boxSize="25px"
                        />
                        <Text fontSize="md" fontWeight="bold">
                          {item.defense}
                        </Text>
                      </Flex>
                    </Flex>
                  </HStack>
                  <HStack spacing={8}>
                    <Flex flexDirection="column">
                      <Text fontSize="md" color="gray.400" letterSpacing={1}>
                        Morale
                      </Text>
                      <Flex flexDirection="row">
                        <Image
                          src={Morale}
                          alt="hp icon"
                          objectFit={"contain"}
                          boxSize="30px"
                        />
                        <Text fontSize="md" fontWeight="bold">
                          {item.morale}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex flexDirection="column" align="flex-start">
                      <Text fontSize="md" color="gray.400" letterSpacing={1}>
                        Agility
                      </Text>
                      <Flex flexDirection="row">
                        <Image
                          src={Speed}
                          alt="hp icon"
                          objectFit={"contain"}
                          boxSize="25px"
                        />
                        <Text fontSize="md" fontWeight="bold">
                          {item.agility}
                        </Text>
                      </Flex>
                    </Flex>
                  </HStack>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MintSuccess;
