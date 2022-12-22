import {
  Button,
  Heading,
  HStack,
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
import { VehicleContext } from "../../../contexts/VehicleContext";

interface DeleteModalProps {
  vehicleId: string;
}

export const DeleteVehicleModal = ({ vehicleId }: DeleteModalProps) => {
  const { isOpenDelete, onCloseDelete } = useContext(ModalContext);
  const { deleteVehicle } = useContext(VehicleContext);

  return (
    <Modal isOpen={isOpenDelete} onClose={onCloseDelete}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Excluir anúncio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading fontSize="16px">
            Tem certeza que deseja remover este anúncio
          </Heading>
          <Text color="grey.200" mt={"1rem"}>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </Text>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button onClick={onCloseDelete} w={""} variant="negative">
              Cancelar
            </Button>
            <Button
              onClick={() => deleteVehicle(vehicleId)}
              w={""}
              variant="alert"
            >
              Sim, excluir anúncio
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
