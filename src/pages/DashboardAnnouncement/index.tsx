import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { UserSectionDash } from "../../components/DashboardAnnouncement/UserSectionDash";
import { Header } from "../../components/Header";
import { CreateVehicleModal } from "../../components/Modals/CreateVehicleModal";
import { EditVehicleModal } from "../../components/Modals/EditVehicleModal";
import { SucessCreateModal } from "../../components/Modals/SucessModal";

import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/userContext";

export const DashboardAnnouncementPage = () => {
  const { onOpenCreate, onOpenEdit } = useContext(ModalContext);
  const { getUser, user } = useContext(UserContext);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, []);

  const newCarList = user.vehicle?.filter((vehicle) => vehicle.isCar === true);
  const newBikeList = user.vehicle?.filter(
    (vehicle) => vehicle.isCar === false
  );

  console.log(user);
  return (
    <>
      <Header />
      <UserSectionDash />
      {newCarList ? <ShowCaseDashCars cars={newCarList} user={user}/> : <h1>oi</h1>}
      {newBikeList ? <ShowCaseDashBikes bikes={newBikeList}  user={user}/> : <h1>oi</h1>}
      <CreateVehicleModal />
      <SucessCreateModal />
      {/* <EditVehicleModal productId={productId} /> */}
    </>
  );
};
