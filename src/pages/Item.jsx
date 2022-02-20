import React from 'react';
import { useParams } from 'react-router-dom';
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
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillTags, AiFillGift } from 'react-icons/ai';

import Health from '../assets/img/health.png';
import Strength from '../assets/img/strength.png';
import Shield from '../assets/img/shield.png';
import Morale from '../assets/img/morale.png';
import Speed from '../assets/img/speed.png';
import Classes from '../components/badge/Classes';
import Type from '../components/badge/Type';
import Rarity, { GetRarity } from '../components/badge/Rarity';
import SpriteRender from '../components/items/SpriteRender';
import SellForm from '../components/modal/SellForm';
import { itemsData } from '../utils/data';
import useGetNFTInformation from '../hooks/useGetNFTInformation';

export default function ItemDetails() {
  let { id } = useParams();
  console.log('tokenId', id);
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');
  const skillName = useColorModeValue('gray.700', 'gray.500');
  const skillDescription = useColorModeValue('gray.500', 'gray.300');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { character, loading } = useGetNFTInformation(id);

  // const item = itemsData.find(item => item.id === parseInt(id, 10));

  const handleSell = () => {
    onOpen();
  };
  // console.log('ItemDetails', item);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const item = { ...character[0], skills: itemsData[0].skills };
  console.log('item', item);

  return (
    <>
      <Flex flexDirection="row" pt={{ base: '120px', md: '75px' }}>
        <Flex flexDirection={{ sm: 'column', lg: 'row' }} w="100%" maxW="6xl" m="auto">
          <Flex
            pos={{ sm: 'relative', md: 'relative', lg: 'fixed' }}
            bgGradient={GetRarity(item.rarity)}
            align="center"
            justify="center"
            borderRadius="15px"
            width={'400px'}
            margin={'auto'}
            mb={4}
            minHeight={{ sm: '400px' }}
          >
            <SpriteRender item={item} />
          </Flex>

          <Spacer />

          <Flex flexDirection="column" h="100%" lineHeight="1.6" width={{ lg: '55%' }}>
            {item.owner ? (
              <Stack direction="row" spacing={4} mb={4}>
                <Button
                  leftIcon={<AiFillTags />}
                  onClick={handleSell}
                  colorScheme="blue"
                  variant="solid"
                  borderRadius={'5px'}
                >
                  Sell
                </Button>
                <Button leftIcon={<AiFillGift />} colorScheme="blue" variant="outline" borderRadius={'8px'}>
                  Gift
                </Button>
              </Stack>
            ) : (
              <Stack direction="row" spacing={4} mb={4} align="center" justify="flex-end">
                <Text fontSize="lg" fontWeight="bold">
                  {item.price} DAI
                </Text>
                <Button leftIcon={<AiFillTags />} colorScheme="blue" variant="solid" borderRadius={'5px'}>
                  Buy
                </Button>
              </Stack>
            )}
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
                    <Image src={Health} alt="hp icon" objectFit={'contain'} boxSize="40px" />
                    <Text fontSize="xl" fontWeight="bold" ml={1}>
                      {item.vitality}
                    </Text>
                  </Flex>
                </GridItem>

                <GridItem>
                  <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                    Strength
                  </Text>
                  <Flex flexDirection="row" align="center" my={1}>
                    <Image src={Strength} alt="hp icon" objectFit={'contain'} boxSize="40px" />
                    <Text fontSize="xl" fontWeight="bold" ml={1}>
                      {item.strength}
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                    Defense
                  </Text>

                  <Flex flexDirection="row" align="center" my={1}>
                    <Image src={Shield} alt="hp icon" objectFit={'contain'} boxSize="40px" />
                    <Text fontSize="xl" fontWeight="bold" ml={1}>
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
                    <Image src={Morale} alt="hp icon" objectFit={'contain'} boxSize="40px" />
                    <Text fontSize="xl" fontWeight="bold" ml={1}>
                      {item.morale}
                    </Text>
                  </Flex>
                </GridItem>

                <GridItem>
                  <Text fontSize="xl" color="gray.400" letterSpacing={1}>
                    Agility
                  </Text>
                  <Flex flexDirection="row" align="center" my={1}>
                    <Image src={Speed} alt="hp icon" objectFit={'contain'} boxSize="40px" />
                    <Text fontSize="xl" fontWeight="bold" ml={1}>
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
              <Stack spacing={4} mt={4}>
                {item.skills.map((skill, key) => (
                  <Box key={key} p={3} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                    <Avatar size="md" p={1} bg={'#2D3748'} name={skill.name} src={skill.icon} />
                    <Text fontSize="lg" color={skillName} fontWeight="bold" textTransform="capitalize">
                      {skill.name}
                    </Text>
                    <Text color={skillDescription}>{skill.description}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <SellForm isOpen={isOpen} onClose={onClose} item={item} />
    </>
  );
}
