import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from "@chakra-ui/react";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToogle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none", lg: "none" }} onClick={toggle}>
      {isOpen ? (
        <IoMdClose size={"35px"} cursor="pointer" color="black" />
      ) : (
        <GiHamburgerMenu size={"35px"} cursor="pointer" color="black" />
      )}
    </Box>
  );
};
