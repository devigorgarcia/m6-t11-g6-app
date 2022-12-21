import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserSectionDash } from "../../components/DashboardAnnouncement/UserSectionDash";
import { Header } from "../../components/Header";
import { CreateVehicleModal } from "../../components/Modals/CreateVehicleModal";
import { EditVehicleModal } from "../../components/Modals/EditVehicleModal";
import { SucessCreateModal } from "../../components/Modals/SucessModal";

import { ModalContext } from "../../contexts/ModalContext";

export const DashboardAnnouncementPage = () => {
  const { onOpenCreate, onOpenEdit } = useContext(ModalContext);

  const productId = "e2c62435-b9b7-401d-9daf-dafe3abb9b6f";

  return (
    <>
      <Header />
      <UserSectionDash/>
      <CreateVehicleModal />
      <SucessCreateModal />
      <EditVehicleModal productId={productId} />
    </>
  );
};
