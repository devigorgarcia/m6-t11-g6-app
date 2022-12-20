import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CreateVehicleModal } from "../../components/Modals/CreateVehicleModal";
import { SucessCreateModal } from "../../components/Modals/SucessModal";
import { ModalContext } from "../../contexts/ModalContext";

export const DashboardAnnouncementPage = () => {
  const { onOpenCreate } = useContext(ModalContext);

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={onOpenCreate}>Criar</Button>
      <Button>Editar</Button>
      <Button>Deletar</Button>
      <CreateVehicleModal />
      <SucessCreateModal />
    </>
  );
};
