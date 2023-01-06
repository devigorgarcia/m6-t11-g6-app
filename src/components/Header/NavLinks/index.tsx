import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import { ModalContext } from "../../../contexts/ModalContext";
import { EditProfileModal } from "../../Modals/EditProfileModal";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../../contexts/UserContext";

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {
  const { getUserProfile, userProfile } = useContext(UserContext);
  const { onOpenEditProfile } = useContext(ModalContext);

  const [logged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@MotorShop:Token") || "";

    const verifyLogged = (token: string) => {
      if (token) {
        setIsLogged(true);
        let decodeToken = jwt_decode<any>(token);
        getUserProfile(decodeToken.id);
      } else {
        setIsLogged(false);
      }
    };
    verifyLogged(token);
  }, []);

  const logout = () => {
    localStorage.removeItem("@MotorShop:Token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        p="4"
      >
        <Stack
          spacing={[4, 4, 4, 4]}
          align={["flex-start", "flex-start", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[10, 10, 0, 0]}
        >
          <MenuItem to="/">Carros</MenuItem>
          <MenuItem to="/">Motos</MenuItem>
          <MenuItem to="/">Leilão</MenuItem>
          <Center height="50px" display={["none", "none", "block", "block"]}>
            <Divider orientation="vertical" />
          </Center>
          <Divider display={["block", "block", "none", "none"]} />

          {logged ? (
            <Flex align="center" justify="center">
              <Menu>
                <Flex align="center" gap="3">
                  <MenuButton fontSize="16px" color="grey.2">
                    <Flex align={"center"} gap="4">
                      <Avatar size={"sm"} name={userProfile.name} />
                      <Text fontSize="14px" fontWeight="700">
                        {userProfile.name}
                      </Text>
                    </Flex>
                  </MenuButton>
                </Flex>
                <Portal>
                  <MenuList p={"21px"} mt="2">
                    <VStack alignItems="flex-start" spacing="4">
                      <Text
                        cursor="pointer"
                        display={"flex"}
                        alignItems="center"
                        fontSize={["18px", "17px"]}
                        gap="2"
                        color="grey.900"
                        _hover={{ color: "brand.1" }}
                        onClick={onOpenEditProfile}
                      >
                        Editar Perfil
                      </Text>
                      <MenuItem to="/">Editar Endereço</MenuItem>
                      {logged ? (
                        <MenuItem to="/dashboardAdmin">Meus Anuncios</MenuItem>
                      ) : (
                        <MenuItem to="/">Minhas Compras</MenuItem>
                      )}

                      <Text
                        cursor="pointer"
                        display={"flex"}
                        alignItems="center"
                        fontSize={["18px", "17px"]}
                        gap="2"
                        color="grey.900"
                        _hover={{ color: "brand.1" }}
                        onClick={logout}
                      >
                        Sair
                      </Text>
                    </VStack>
                  </MenuList>
                </Portal>
              </Menu>
            </Flex>
          ) : (
            <Flex justifyContent={"space-evenly"} gap="4">
              <Button
                w="100%"
                variant={"light"}
                onClick={() => navigate("/login")}
              >
                Fazer Login
              </Button>
              <Button
                w="100%"
                variant="outline1"
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </Flex>
          )}
        </Stack>
      </Box>
      <EditProfileModal />
    </>
  );
};
