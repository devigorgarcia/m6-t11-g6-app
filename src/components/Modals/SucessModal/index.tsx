import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

export const SucessCreateModal = () => {
  const { isOpenSucess, onCloseSucess } = useContext(ModalContext);
  return (
    <Modal isOpen={isOpenSucess} onClose={onCloseSucess}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sucesso!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading>Seu anúncio foi criado com sucesso!</Heading>
          <Text>
            Agora você poderá ver seus negócios crescendo em grande escala
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseSucess}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
