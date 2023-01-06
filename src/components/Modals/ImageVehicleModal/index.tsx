import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { IUrl } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const ImageVehicleModal = ({url}: IUrl) => {

  const { isOpenImage, onCloseImage } = useContext(ModalContext);
  
  return (
    <Modal isOpen={isOpenImage} onClose={onCloseImage}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Imagem do Veículo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={url}
            width={"100%"}
            height={"60%"}
            margin={"auto"}
            padding={"1rem"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
