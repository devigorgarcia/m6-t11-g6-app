import { Button, Flex, Heading, HStack, Tag, Text } from "@chakra-ui/react";

export const CarAnnouncementInfo = () => {
  return (
    <Flex
      bg="grey.9"
      width={["90%", "70%"]}
      height={"350px"}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"lg"}>
        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
      </Heading>
      <HStack spacing={"4"}>
        <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
          2013
        </Tag>
        <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
          0 KM
        </Tag>
      </HStack>
      <Text fontWeight={"700"} fontSize={"lg"}>
        R$ 00.000,00
      </Text>
      <Button variant="outline2">Comprar</Button>
    </Flex>
  );
};
