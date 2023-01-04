import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { UserSectionDash } from "../../components/DashboardAnnouncement/UserSectionDash";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/userContext";

export const DashboardAnnouncementPage = () => {
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

  return (
    <>
      <Header />
      <UserSectionDash />
      {newCarList ? (
        <ShowCaseDashCars cars={newCarList} user={user} />
      ) : (
        <h1>oi</h1>
      )}
      {newBikeList ? (
        <ShowCaseDashBikes bikes={newBikeList} user={user} />
      ) : (
        <h1>oi</h1>
      )}
    </>
  );
};
