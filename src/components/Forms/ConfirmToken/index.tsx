import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ResetPasswordContext } from "../../../contexts/ResetPasswordContext";

export const ConfirmTokenForm = () => {
  const { verifyToken } = useContext(ResetPasswordContext);
  const [submitToken, setSubmitToken] = useState<string>("");

  const verifyTokenSubmit = (token: string) => {
    verifyToken(token);
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
        onClick={() => verifyTokenSubmit(submitToken)}
        alignSelf={["center"]}
        variant={"brand1"}
      >
        Confirmar
      </Button>
    </Flex>
  );
};
