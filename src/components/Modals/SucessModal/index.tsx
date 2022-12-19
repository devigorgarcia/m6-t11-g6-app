import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

export const SucessCreateModal = () => {
  const { isOpenSucess, onCloseSucess } = useContext(ModalContext);
  return (
    <Modal isOpen={isOpenSucess} onClose={onCloseSucess}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseSucess}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
