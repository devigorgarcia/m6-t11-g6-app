import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { MenuToogle } from "./MenuToggle";
import { NavLinks } from "./NavLinks";
import MotorsLogo from "../../assets/Motors shop.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
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
      p={["2rem", "2rem", "1rem", "0 3rem"]}
    >
      <Image
        src={MotorsLogo}
        h="30px"
        onClick={() => navigate("/")}
        cursor="pointer"
      />
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} />
    </Flex>
  );
};
