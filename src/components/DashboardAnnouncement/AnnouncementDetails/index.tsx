import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export const AnnouncementDetails = () => {
  return (
    <Flex
      bg="grey.9"
      width={"90%"}
      height={"350px"}
      margin={"4rem auto"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Flex alignSelf={"flex-start"} flexDir="column">
        <Avatar name="Samuel Rodrigues" />
        <Flex>
          <Text>Samuel Leão</Text>
          <Text as="span">Anunciante</Text>
        </Flex>
      </Flex>

      <Text fontSize="20px" fontWeight="700"></Text>
      <Text width={"295px"} height={"84px"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button variant="grey1" width={""}>
        Ver todos os anúncios
      </Button>
    </Flex>
  );
};
