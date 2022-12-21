import { Flex, Heading, Text } from "@chakra-ui/react";
import { ICarDescription } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const CarDescription = ({description}: ICarDescription) => {
  return (
    <Flex
      bg="grey.9"
      width={["90%","70%"]}
      height={"350px"}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"md"}>Descrição</Heading>
      <Text>
        {description}
      </Text>
    </Flex>
  );
};
