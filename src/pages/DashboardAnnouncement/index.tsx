import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CreateVehicleModal } from "../../components/Modals/CreateVehicleModal";
import { EditVehicleModal } from "../../components/Modals/EditVehicleModal";
import { SucessCreateModal } from "../../components/Modals/SucessModal";
import { ModalContext } from "../../contexts/ModalContext";

export const DashboardAnnouncementPage = () => {
  const { onOpenCreate, onOpenEdit } = useContext(ModalContext);

  const productId = "e2c62435-b9b7-401d-9daf-dafe3abb9b6f";

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={onOpenCreate}>Criar</Button>
      <Button onClick={onOpenEdit}>Editar</Button>
      <Button>Deletar</Button>
      <CreateVehicleModal />
      <SucessCreateModal />
      <EditVehicleModal productId={productId} />
    </>
  );
};
