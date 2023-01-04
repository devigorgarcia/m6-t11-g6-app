import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { Footer } from "../../../components/Footer";
import { NewPasswordForm } from "../../../components/Forms/NewPassword";
import { Header } from "../../../components/Header";

export const NewPasswordPage = () => {
  return (
    <Flex flexDir={["column"]} h={["100vh"]} justifyContent={["space-between"]}>
      <Header />
      <NewPasswordForm />
      <Footer />
    </Flex>
  );
};
