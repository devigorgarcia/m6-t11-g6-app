import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export const AnnouncementDetails = ({ user }: any) => {
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
      <Flex alignSelf={"flex-start"} flexDir="column" gap={4}>
        <Avatar size="xl" name={user.name} />
        <Flex gap={4} align="center">
          <Text fontFamily="Lexend" fontWeight="600" fontSize="20px">
            {user.name}
          </Text>
          <Text
            fontSize="14px"
            fontFamily="Inter"
            fontWeight="500"
            bg="brand.4"
            color="brand.1"
            borderRadius="4px"
            p="4px 8px"
            as="span"
          >
            Anunciante
          </Text>
        </Flex>
      </Flex>

      <Text mt="1rem">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button
        alignSelf={"flex-start"}
        variant="brandOpacity"
        mt={"1.4rem"}
        width={""}
      >
        Criar anuncio
      </Button>
    </Flex>
  );
};
