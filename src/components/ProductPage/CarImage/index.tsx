import { Flex, Image } from "@chakra-ui/react";
import { IImg } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const CarImage = ({image}:IImg) => {
  return (
    <Flex
      bg={"grey.10"}
      width={["90%", "70%"]}
      height={"355px"}
      margin={["10% auto 0 auto"]}
      borderRadius={"5px"}
    >
      <Image src={image} minWidth="300px" width="60%" margin={"auto auto"} />
    </Flex>
  );
};
