import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Spacer,
  Grid,
  GridItem,
  Image,
  Box,
  Stack,
  Avatar,
} from "@chakra-ui/react";

import Health from "../assets/img/health.png";
import Strength from "../assets/img/strength.png";
import Shield from "../assets/img/shield.png";
import Morale from "../assets/img/morale.png";
import Speed from "../assets/img/speed.png";
import Classes from "../components/badge/Classes";
import Type from "../components/badge/Type";
import Rarity, { GetRarity } from "../components/badge/Rarity";
import SpriteRender from "../components/items/SpriteRender";

const item = {
  id: 1102,
  sprite: "zombie",
  class: "zombie",
  type: "male",
  rarity: "rare",
  vitality: 43,
  strength: 44,
  defense: 41,
  morale: 36,
  agility: 12,
  skills: [
    {
      id: 1,
      icon: Strength,
      name: "Netflix",
      description:
        "Healer crafts a potion of poison. Throwing it in the dragon’s mouth causes damage, which can be blocked by defense.",
    },
    {
      id: 2,
      icon: Shield,
      name: "Spotify",
      description:
        "Hammer rushes to one Hero and protects them from enemy’s incoming attacks.",
    },
    {
      id: 3,
      icon: Health,
      name: "Youtube",
      description:
        "Mage strikes the dragon with a flash of lightning and drains their health. Causes major damage and heals an ally.",
    },
    {
      id: 4,
      icon: Speed,
      name: "Facebook",
      description:
        "Knight lunges at the dragon with their sword. Causes physical damage that may be blocked by dragon’s defense.",
    },
  ],
};

export default function ItemDetails() {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const skillName = useColorModeValue("gray.700", "gray.500");

  return (
    <Flex flexDirection="row" pt={{ base: "120px", md: "75px" }}>
      <Flex
        flexDirection={{ sm: "column", lg: "row" }}
        w="100%"
        maxW="6xl"
        m="auto"
      >
        <Flex
          pos={"fixed"}
          bgGradient={GetRarity(item.rarity)}
          align="center"
          justify="center"
          borderRadius="15px"
          width={"400px"}
          minHeight={{ sm: "450px" }}
        >
          <SpriteRender item={item} />
        </Flex>

        <Spacer />

        <Flex
          flexDirection="column"
          h="100%"
          lineHeight="1.6"
          width={{ lg: "55%" }}
        >
          <Box
            my={2}
            p={3}
            shadow="lg"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            bg={cardBg}
            borderColor={cardBorder}
          >
            <Text fontSize="lg" color="gray.400" fontWeight="bold">
              ABOUT
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem flexDirection="column">
                <Text fontSize="md" color="gray.400" fontWeight="bold">
                  ID
                </Text>
                <Text fontSize="md" fontWeight="bold">
                  #{item.id}
                </Text>
              </GridItem>

              <GridItem flexDirection="column" align="flex-start">
                <Text fontSize="md" color="gray.400" fontWeight="bold">
                  CLASS
                </Text>
                <Classes name={item.class} />
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem flexDirection="column">
                <Text fontSize="md" color="gray.400" fontWeight="bold">
                  TYPE
                </Text>
                <Type name={item.type} />
              </GridItem>

              <GridItem flexDirection="column" align="flex-start">
                <Text fontSize="md" color="gray.400" fontWeight="bold">
                  RARITY
                </Text>
                <Rarity name={item.rarity} />
              </GridItem>
            </Grid>
          </Box>

          <Box
            my={2}
            p={3}
            shadow="lg"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            bg={cardBg}
            borderColor={cardBorder}
          >
            <Text fontSize="lg" color="gray.400" fontWeight="bold">
              STATS
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} my={2}>
              <GridItem>
                <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                  Vitality
                </Text>
                <Flex flexDirection="row" align="center" my={1}>
                  <Image
                    src={Health}
                    alt="hp icon"
                    objectFit={"contain"}
                    boxSize="40px"
                  />
                  <Text fontSize="xl" fontWeight="bold" ml={2}>
                    {item.vitality}
                  </Text>
                </Flex>
              </GridItem>

              <GridItem>
                <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                  Strength
                </Text>
                <Flex flexDirection="row" align="center" my={1}>
                  <Image
                    src={Strength}
                    alt="hp icon"
                    objectFit={"contain"}
                    boxSize="40px"
                  />
                  <Text fontSize="xl" fontWeight="bold" ml={2}>
                    {item.strength}
                  </Text>
                </Flex>
              </GridItem>
              <GridItem>
                <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                  Defense
                </Text>

                <Flex flexDirection="row" align="center" my={1}>
                  <Image
                    src={Shield}
                    alt="hp icon"
                    objectFit={"contain"}
                    boxSize="40px"
                  />
                  <Text fontSize="xl" fontWeight="bold" ml={2}>
                    {item.defense}
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} my={2}>
              <GridItem>
                <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                  Morale
                </Text>
                <Flex flexDirection="row" align="center" my={1}>
                  <Image
                    src={Morale}
                    alt="hp icon"
                    objectFit={"contain"}
                    boxSize="40px"
                  />
                  <Text fontSize="xl" fontWeight="bold" ml={2}>
                    {item.morale}
                  </Text>
                </Flex>
              </GridItem>

              <GridItem>
                <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                  Agility
                </Text>
                <Flex flexDirection="row" align="center" my={1}>
                  <Image
                    src={Speed}
                    alt="hp icon"
                    objectFit={"contain"}
                    boxSize="40px"
                  />
                  <Text fontSize="xl" fontWeight="bold" ml={2}>
                    {item.agility}
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Box>

          <Box
            my={2}
            p={3}
            shadow="lg"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            bg={cardBg}
            borderColor={cardBorder}
          >
            <Text fontSize="lg" color="gray.400" fontWeight="bold">
              SKILLS
            </Text>
            <Stack spacing={8} mt={4}>
              {item.skills.map((skill, key) => (
                <Box
                  p={3}
                  shadow="md"
                  borderWidth="1px"
                  flex="1"
                  borderRadius="md"
                >
                  <Avatar
                    size="md"
                    p={1}
                    bg={"#2D3748"}
                    name={skill.name}
                    src={skill.icon}
                  />
                  <Text
                    fontSize="lg"
                    color={skillName}
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {skill.name}
                  </Text>
                  <Text color="gray.400">{skill.description}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
