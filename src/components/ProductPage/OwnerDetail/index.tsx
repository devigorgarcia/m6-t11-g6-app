import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { IOwnerData } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const ProductPageOwnerDetail = ({ owner }: IOwnerData) => {
  const [avatar, setAvatar] = useState("");

  if (owner && avatar === "") {
    const name = owner.name;
    const fl = name.split(" ")[0][0];
    const sl = name.split(" ")[1][0];
    setAvatar(fl + sl);
  }

  return (
    <>
      {owner ? (
        <Flex
          bg="grey.9"
          width={"90%"}
          height={"350px"}
          margin={"0 auto"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          padding={"2rem"}
          borderRadius={"5px"}
        >
          <Flex
            w="60px"
            h="60px"
            rounded="full"
            bg="brand.1"
            align="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="20px" fontWeight="700">
              {avatar}
            </Text>
          </Flex>
          <Text fontSize="20px" fontWeight="700">
            {owner.name}
          </Text>
          <Text width={"295px"} height={"84px"}>
            {owner.descripiton}
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's */}
          </Text>
          <Button variant="grey1" width={""}>
            Ver todos os anúncios
          </Button>
        </Flex>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};
