import { FormLabel, Input } from "@chakra-ui/react";

export const NewPasswordPage = () => {
  return (
    <>
      <FormLabel>Insira a nova senha</FormLabel>
      <Input placeholder="Digite a nova senha"/>
      <FormLabel>confirme a nova senha</FormLabel>
      <Input placeholder="Confirme a nova senha"/>
    </>
  );
};
