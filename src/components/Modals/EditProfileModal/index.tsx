import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { EditProfileForm } from "../../Forms/EditProfile";

export const EditProfileModal = () => {
  const { isOpenEditProfile, onCloseEditProfile } = useContext(ModalContext);
  return (
    <Modal isOpen={isOpenEditProfile} onClose={onCloseEditProfile}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditProfileForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
