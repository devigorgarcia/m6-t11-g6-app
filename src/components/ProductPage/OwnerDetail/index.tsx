import { Button, Flex, Text } from "@chakra-ui/react";

export const ProductPageOwnerDetail = () => {
  const name = "Samuel Leão";
  const firstLetter = name.split(" ")[0][0];
  const secondLetter = name.split(" ")[1][0];
  const avatar = `${firstLetter + secondLetter}`;
  
  return (
    <Flex
      bg="#F8F9FA"
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
        {name}
      </Text>
      <Text width={"295px"} height={"84px"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button bg={"black"} color={"white"} width={[""]}>
        Ver todos os anúncios
      </Button>
    </Flex>
  );
};
