import { useContext, useEffect } from "react";
import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import jwt_decode from "jwt-decode";
import { AdminSectionDash } from "../../components/DashboardAdmin/UserSectionDash";

export const DashboardAdmin = () => {
  const { getUserProfile, userProfile } = useContext(UserContext);
  const token = localStorage.getItem("@MotorShop:Token");

  useEffect(() => {
    if (token) {
      let decodeToken = jwt_decode<any>(token);
      getUserProfile(decodeToken.id);
    }
  }, [userProfile.vehicle]);

  const newCarList = userProfile.vehicle?.filter((vehicle) => vehicle.isCar === true);
  const newBikeList = userProfile.vehicle?.filter(
    (vehicle) => vehicle.isCar === false
  );
  return (
    <>
      <Header />
      <AdminSectionDash />
      {newCarList ? <ShowCaseDashCars cars={newCarList} /> : <h1>oi</h1>}
      {newBikeList ? <ShowCaseDashBikes bikes={newBikeList} /> : <h1>oi</h1>}
    </>
  );
};
