import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { EditVehicleForm } from "../../Forms/EditVehicle";

interface EditModalProps {
  vehicleId: string;
}

export const EditVehicleModal = ({ vehicleId }: EditModalProps) => {
  const { isOpenEdit, onCloseEdit } = useContext(ModalContext);
  const { profileVehicle, vehicleInfo } = useContext(VehicleContext);

  useEffect(() => {
    profileVehicle(vehicleId);
  }, [vehicleId]);

  return (
    <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar anúncio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditVehicleForm vehicleInfo={vehicleInfo} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
