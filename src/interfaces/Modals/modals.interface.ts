export interface ModalContextData {
  isOpenCreate: boolean;
  onOpenCreate: () => void;
  onCloseCreate: () => void;
  isOpenSucess: boolean;
  onOpenSucess: () => void;
  onCloseSucess: () => void;
}
