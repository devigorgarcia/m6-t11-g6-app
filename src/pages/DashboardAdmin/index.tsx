import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { UserSectionDash } from "../../components/DashboardAnnouncement/UserSectionDash";
import { Header } from "../../components/Header";
import { CreateVehicleModal } from "../../components/Modals/CreateVehicleModal";
import { SucessCreateModal } from "../../components/Modals/SucessModal";

export const DashboardAdmin = () => {
  return (
    <>
      <Header />
      <UserSectionDash />
      //{" "}
      {newCarList ? (
        <ShowCaseDashCars cars={newCarList} user={user} />
      ) : (
        <h1>oi</h1>
      )}
      //{" "}
      {newBikeList ? (
        <ShowCaseDashBikes bikes={newBikeList} user={user} />
      ) : (
        <h1>oi</h1>
      )}
      <CreateVehicleModal />
      <SucessCreateModal />
    </>
  );
};
