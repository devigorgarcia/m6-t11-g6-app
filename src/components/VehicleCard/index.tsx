import {
  Card,
  Image,
  Heading,
  Text,
  Flex,
  Avatar,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { IVehicleProfileData } from "../../interfaces/VehicleContext/Vehicle.interfaces";

interface IVehicleProps {
  data: IVehicleProfileData;
}

export function VehicleCard({ data }: IVehicleProps) {
  const navigate = useNavigate();

  const { price, km } = data;
  let numberPrice = +price;
  let numberKm = +km;

  const handleNavigate = (id: string) => {
    navigate(`product/${id}`);
  };

  return (
    <Card
      minW={"350px"}
      maxW="350px"
      flex="1"
      p="1rem"
      onClick={() => handleNavigate(data.id)}
      cursor="pointer"
    >
      <Image src={data.frontImg} alt="Green double couch with wooden legs" />
      <VStack mt="8" spacing="3">
        <Heading size="md" color="grey.1" noOfLines={1}>
          {data.title}
        </Heading>
        <Text noOfLines={2}>{data.description}</Text>
        <Flex alignSelf="flex-start" direction="row" align="center">
          <Avatar size="sm" name={data.user?.name} marginRight="10px" />
          <Text>{data.user?.name}</Text>
        </Flex>
      </VStack>
      <CardFooter justify="space-between" padding="0" marginTop={8}>
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
          fontFamily={"Inter"}
          color="grey.1"
        >
          {numberPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </CardFooter>
    </Card>
  );
}
