import { Flex, Image, Text } from "@chakra-ui/react";

import LogoFooter from "../../assets/logoFooter.svg";
import upArrow from "../../assets/Group 30.svg";

export const Footer = () => {
  return (
    <Flex
      h={"200px"}
      bg="grey.0"
      color="white"
      flexDir={["column", "column", "row"]}
      align={["center"]}
      justifyContent={["space-evenly"]}
      width={"100vw"}
    >
      <Image src={LogoFooter} width="150px" />
      <Text>&copy; 2022 - Todos os direitos reservados</Text>
      <Image
        src={upArrow}
        width="50px"
        cursor="pointer"
        display={["block", "block", "none"]}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </Flex>
  );
};
