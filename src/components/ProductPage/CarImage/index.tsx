import { Flex, Image } from "@chakra-ui/react";
import car from "../../../assets/car.jpg";

export const CarImage = () => {
  return (
    <Flex
      bg={"#FDFDFD"}
      width={"90%"}
      height={"355px"}
      margin={"10% auto 0 auto"}
      borderRadius={"5px"}
    >
      <Image src={car} width={"350px"} height={"300px"} margin={"auto auto"} />
    </Flex>
  );
};
