import { Button, Flex, Heading, HStack, Tag, Text } from "@chakra-ui/react";
import { IInfoVehicle } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const CarAnnouncementInfo = ({title, year, price, km}: IInfoVehicle) => {
  return (
    <Flex
      bg="grey.9"
      width={["90%", "70%"]}
      height={"350px"}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"lg"}>
        {title}
      </Heading>
      <HStack spacing={"4"}>
        <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
          {year}
        </Tag>
        <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
          {km} KM
        </Tag>
      </HStack>
      <Text fontWeight={"700"} fontSize={"lg"}>
        R$ {price},00
      </Text>
      <Button variant="outline2">Comprar</Button>
    </Flex>
  );
};
