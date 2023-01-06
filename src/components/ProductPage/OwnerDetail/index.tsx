import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IOwnerData } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const ProductPageOwnerDetail = ({ owner }: IOwnerData) => {
  
  const navigate = useNavigate();

  const handleNavigate = (userId: string) => {
    navigate(`/dashboard/${userId}`);
  };

  return (
    <>
      {owner ? (
        <Flex
          bg="grey.9"
          width={["90%", "70%"]}
          height={"350px"}
          margin={"0 auto"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          padding={"3rem"}
          borderRadius={"5px"}
        >
          <Avatar name={owner.name} />
          <Text fontSize="20px" fontWeight="700">
            {owner.name}
          </Text>
          <Text width={"295px"} height={"84px"} paddingLeft={"2rem"}>
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
