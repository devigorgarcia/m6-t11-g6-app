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
import { CreateVehicleForm } from "../../Forms/CreateVehicle";

export const CreateVehicleModal = () => {
  const { isOpenCreate, onCloseCreate } = useContext(ModalContext);
  return (
    <Modal isOpen={isOpenCreate} onClose={onCloseCreate}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar anúncio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateVehicleForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
