import { Flex, Image } from "@chakra-ui/react";
import car from "../../../assets/car.jpg";

export const CarImage = () => {
  return (
    <Flex
      bg={"grey.10"}
      width={["90%", "70%"]}
      height={"355px"}
      margin={["10% auto 0 auto"]}
      borderRadius={"5px"}
    >
      <Image src={car} minWidth="300px" width="80%" margin={"auto auto"} />
    </Flex>
  );
};
