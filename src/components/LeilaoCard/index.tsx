import {
  Box,
  Card,
  Heading,
  Text,
  Flex,
  Avatar,
  VStack,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { ArrowForwardIcon, TimeIcon } from "@chakra-ui/icons";
import { ILeilaoData } from "../Leilao";

interface ILeilaoProps {
  data: ILeilaoData;
}

export const LeilaoCard = ({ data }: ILeilaoProps) => {
  const { price, km } = data;
  let numberPrice = +price;
  let numberKm = +km;
  return (
    <Card
      bgImage={data.photo}
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPosition={"center"}
      maxW="650px"
      minW={["320px", "350px", "380px", "400px", "500px"]}
      borderRadius="6px"
    >
      <Box
        bgGradient="linear(to-t, rgba(11, 13, 13, 1), rgba(73, 80, 87, 0.5))"
        w="100%"
        h="100%"
        p="1.5rem"
        borderTopRadius="6px"
      >
        <Flex
          w="110px"
          height="35px"
          borderRadius="5rem"
          bgColor="white"
          justifyContent="space-around"
          alignItems="center"
          marginBottom="40px"
          marginTop="8px"
        >
          <TimeIcon color="brand.1" boxSize={5} />
          <Text fontFamily={"Lexend"} fontWeight="500" fontSize="16px">
            {data.time}
          </Text>
        </Flex>
        <VStack mt="8" spacing="3">
          <Heading
            fontFamily={"Lexend"}
            fontSize="20px"
            fontWeight="600"
            color="white"
            noOfLines={1}
          >
            {data.name}
          </Heading>
          <Text
            fontFamily={"Inter"}
            fontSize="16px"
            color="grey.5"
            noOfLines={1}
          >
            {data.description}
          </Text>
          <Flex alignSelf="flex-start" direction="row" align="center">
            <Avatar size="sm" name={data.owner} marginRight="10px" />
            <Text
              color="white"
              fontFamily={"Inter"}
              fontSize="14px"
              fontWeight="500"
            >
              {data.owner}
            </Text>
          </Flex>
        </VStack>
        <CardFooter justify="space-between" padding="0" marginTop="30px">
          <Flex justify="space-between">
            <Flex gap="1rem" justify="center" align="center">
              <Text
                bg="brand.4"
                color="brand.1"
                borderRadius="6px"
                p={["4px 8px"]}
                fontSize="14px"
                fontWeight="500"
                fontFamily={"Inter"}
              >
                {numberKm.toLocaleString("pt-br")} KM
              </Text>
              <Text
                bg="brand.4"
                color="brand.1"
                borderRadius="6px"
                p={["4px 8px"]}
                fontSize="14px"
                fontWeight="500"
                fontFamily={"Inter"}
              >
                {data.year}
              </Text>
            </Flex>
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily={"Lexend"}
            color="white"
          >
            {numberPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </CardFooter>
      </Box>
      <ButtonGroup>
        <Button
          w="100%"
          bgColor="brand.1"
          borderRadius={0}
          borderBottomRadius="6px"
          colorScheme={""}
        >
          <Flex justifyContent="space-between" w="100%">
            <Text>Acessar página do leilão</Text>
            <ArrowForwardIcon boxSize={5} />
          </Flex>
        </Button>
      </ButtonGroup>
    </Card>
  );
};
