import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { ConfirmTokenForm } from "../../../components/Forms/ConfirmToken";
import { Header } from "../../../components/Header";

export const ConfirmTokenPage = () => {
  return (
    <Flex flexDir={["column"]} h={["100vh"]} justifyContent={["space-between"]}>
      <Header />
      <ConfirmTokenForm />
      <Footer />
    </Flex>
  );
};
