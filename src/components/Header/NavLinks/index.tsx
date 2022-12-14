import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MenuItem } from "./MenuItem";

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {
  const [logged, setIsLogged] = useState(true);
  const name = "Samuel Leão";
  const firstLetter = name.split(" ")[0][0];
  const secondLetter = name.split(" ")[1][0];
  const avatar = `${firstLetter + secondLetter}`;

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 4, 4, 4]}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[10, 10, 10, 0]}
      >
        <MenuItem to="/">Carros</MenuItem>
        <MenuItem to="/">Motos</MenuItem>
        <MenuItem to="/">Leilão</MenuItem>
        <Divider display={["block", "block", "block", "none"]} />
        {logged ? (
          <Flex
            align="center"
            justify="center"
            width="200px"
            borderLeft="1px solid black"
          >
            <Menu>
              <Flex align="center" gap="3">
                <Flex
                  w="32px"
                  h="32px"
                  rounded="full"
                  bg="brand.1"
                  align="center"
                  justifyContent="center"
                >
                  <Text color="white" fontSize="14px" fontWeight="700">
                    {avatar}
                  </Text>
                </Flex>
                <MenuButton fontSize="16px" color="gray.2">
                  {name}
                </MenuButton>
              </Flex>
              <Portal>
                <MenuList p={"21px"}>
                  <VStack alignItems="flex-start" spacing="4">
                    <MenuItem to="/">Editar Perfil</MenuItem>
                    <MenuItem to="/">Editar Endereço</MenuItem>
                    <MenuItem to="/">Minhas Compras</MenuItem>
                    <MenuItem to="/">Sair</MenuItem>
                  </VStack>
                </MenuList>
              </Portal>
            </Menu>
          </Flex>
        ) : (
          <Flex
            gap="72px
            "
          >
            <Button variant={"light"}>Fazer Login</Button>
            <Button variant="outline1">Cadastrar</Button>
          </Flex>
        )}
      </Stack>
    </Box>
  );
};
