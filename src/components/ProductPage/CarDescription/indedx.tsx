import { Flex, Heading, Text } from "@chakra-ui/react";

export const CarDescription = () => {
  return (
    <Flex
      bg="#F8F9FA"
      width={"90%"}
      height={"350px"}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"md"}>Descrição</Heading>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Flex>
  );
};
