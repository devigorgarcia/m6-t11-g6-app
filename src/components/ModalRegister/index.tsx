import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

interface IModalRegister {
  isOpen: boolean;
  onClose: () => void;
}

function ModalRegister({ isOpen, onClose }: IModalRegister) {

    const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody ><b>Sua conta foi criada com sucesso!</b></ModalBody>
          <ModalBody>
            Agora você poderá ver seus negócios crescendo em grande escala
          </ModalBody>
          <ModalFooter alignItems={"start"} justifyContent={"start"}>
            <Button
              colorScheme="teal"
              variant={"brand1"}
              mr={3}
              onClick={() => navigate("/login")}
            >
              Ir para login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalRegister;
