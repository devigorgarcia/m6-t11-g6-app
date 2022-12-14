import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { MenuToogle } from "./MenuToggle";
import { NavLinks } from "./NavLinks";
import MotorsLogo from "../../assets/Motors shop.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100vw"
      p={["2rem", "2rem", "1rem"]}
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
    >
      <Image src={MotorsLogo} h='30px'/>
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} />
    </Flex>
  );
};
