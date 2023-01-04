import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

export const ConfirmTokenPage = () => {
  const [token, setToken] = useState("");

  const submitToken = (newToken: string) => {
    console.log(newToken);
  };

  return (
    <Flex flexDir={["column"]} h={["100vh"]} justifyContent={["space-between"]}>
      <Header />
      <VStack spacing={"6"} p={["1rem"]}>
        <Heading size={"md"}>Digite o Token</Heading>
        <Input
          onChange={(e) => setToken(e.target.value)}
          placeholder="Insira o Token"
          type="text"
        />
        <Button onClick={() => submitToken(token)} variant="brand1">
          Enviar Email
        </Button>
      </VStack>
      <Footer />
    </Flex>
  );
};
