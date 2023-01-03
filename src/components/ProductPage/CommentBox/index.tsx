import { Button, Flex, HStack, Tag, Text, Textarea } from "@chakra-ui/react";

export const CommentBox = () => {
  const name = "Samuel Leão";
  const firstLetter = name.split(" ")[0][0];
  const secondLetter = name.split(" ")[1][0];
  const avatar = `${firstLetter + secondLetter}`;
  return (
    <Flex
      bg="grey.9"
      width={["90%","70%"]}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
      gap={"24px"}
      marginBottom={"45px"}
    >
      <Flex alignItems={"center"} gap={"8px"}>
        <Flex
          w="50px"
          h="50px"
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
      </Flex>
      <Textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
      <Button bg={"#4529E6"} color={"white"} fontSize={"md"}>
        Comentar
      </Button>
      <HStack wrap={"wrap"} gap={"24px"}>
        <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
          Gostei muito!
        </Tag>
        <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
          Incrível
        </Tag>
        <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
          Recomendarei para meus amigos!
        </Tag>
      </HStack>
    </Flex>
  );
};
