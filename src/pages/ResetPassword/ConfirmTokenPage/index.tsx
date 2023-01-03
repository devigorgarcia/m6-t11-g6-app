import { Button, FormLabel, Input } from "@chakra-ui/react";

export const ConfirmTokenPage = () => {
  return (
    <>
      <FormLabel>Insira o Token</FormLabel>
      <Input placeholder="Insira o token" />
      <Button>Confirmar</Button>
    </>
  );
};
