import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { UserSectionDash } from "../../components/DashboardAnnouncement/UserSectionDash";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/userContext";

export const DashboardAnnouncementPage = () => {
  const { getUserProfile, userProfile } = useContext(UserContext);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUserProfile(userId);
    }
  }, []);

  const newCarList = userProfile.vehicle?.filter(
    (vehicle) => vehicle.isCar === true
  );
  const newBikeList = userProfile.vehicle?.filter(
    (vehicle) => vehicle.isCar === false
  );

  return (
    <>
      <Header />
      <UserSectionDash />
      {newCarList ? (
        <ShowCaseDashCars cars={newCarList} user={userProfile} />
      ) : (
        <h1>oi</h1>
      )}
      {newBikeList ? (
        <ShowCaseDashBikes bikes={newBikeList} user={userProfile} />
      ) : (
        <h1>oi</h1>
      )}
    </>
  );
};
