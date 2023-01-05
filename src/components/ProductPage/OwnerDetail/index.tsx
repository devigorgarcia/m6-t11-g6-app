import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IOwnerData } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const ProductPageOwnerDetail = ({ owner }: IOwnerData) => {
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  
  if (owner && avatar === "") {
    const name = owner.name;
    const fl = name.split(" ")[0][0];
    const sl = name.split(" ")[1][0];
    setAvatar(fl + sl);
  }

  const handleNavigate = (userId: string) => {
    navigate(`/dashboard/${userId}`);
  };

  return (
    <>
      {owner ? (
        <Flex
          bg="grey.9"
          width={["90%","70%"]}
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
          </Text>
          <Button
            onClick={() => handleNavigate(owner.id)}
            variant="grey1"
            width={""}
          >
            Ver todos os anúncios
          </Button>
        </Flex>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};
