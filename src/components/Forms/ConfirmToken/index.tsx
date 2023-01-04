import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export const ConfirmTokenForm = () => {
  const [submitToken, setSubmitToken] = useState<string>("");
  
  const verifyToken = (token: string) => {
    console.log(token);
  };
  return (
    <Flex flexDir={["column"]} gap={["4"]} p={["8"]}>
      <FormLabel>Insira o Token</FormLabel>
      <Input
        width={["100%"]}
        placeholder="Insira o token"
        onChange={(e) => setSubmitToken(e.target.value)}
      />
      <Button
        onClick={() => verifyToken(submitToken)}
        alignSelf={["center"]}
        variant={"brand1"}
      >
        Confirmar
      </Button>
    </Flex>
  );
};
