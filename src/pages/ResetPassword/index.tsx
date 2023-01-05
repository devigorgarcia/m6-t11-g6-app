import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ResetPasswordContext } from "../../contexts/ResetPasswordContext";

export const ResetPasswordPage = () => {
  const { sendEmailRequest } = useContext(ResetPasswordContext);
  const [requestEmail, setRequestEmail] = useState("");

  const sendEmail = (email: string) => {
    sendEmailRequest(email);
  };
  return (
    <Flex flexDir={["column"]} h={["100vh"]} justifyContent={["space-between"]}>
      <Header />
      <VStack spacing={"6"} p={["1rem"]} margin={"0 auto"}>
        <Heading size={"md"}>Digite o email cadastrado</Heading>
        <Input
          onChange={(e) => setRequestEmail(e.target.value)}
          type="email"
        />
        <Button onClick={() => sendEmail(requestEmail)} variant="brand1">
          Enviar Email
        </Button>
      </VStack>
      <Footer />
    </Flex>
  );
};
