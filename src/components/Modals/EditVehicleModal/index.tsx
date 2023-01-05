import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { EditVehicleForm } from "../../Forms/EditVehicle";

interface EditModalProps {
  vehicle: any;
  isOpen: boolean;
  onClose: () => void;
}

export const EditVehicleModal = ({
  vehicle,
  isOpen,
  onClose,
}: EditModalProps) => {
  return (
    <>
      {vehicle && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar anúncio</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EditVehicleForm vehicleInfo={vehicle} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
