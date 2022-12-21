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

  const productId = "f5636cdb-0966-4e2f-86da-316e5a37a05e";

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
