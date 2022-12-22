import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";
import { ModalContextData } from "../interfaces/Modals/modals.interface";
import { ProviderData } from "../interfaces/provider.interface";

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider = ({ children }: ProviderData) => {
  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();
  const {
    isOpen: isOpenSucess,
    onOpen: onOpenSucess,
    onClose: onCloseSucess,
  } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  return (
    <ModalContext.Provider
      value={{
        isOpenCreate,
        onOpenCreate,
        onCloseCreate,
        isOpenSucess,
        onOpenSucess,
        onCloseSucess,
        isOpenEdit,
        onOpenEdit,
        onCloseEdit,
        isOpenDelete,
        onOpenDelete,
        onCloseDelete,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
