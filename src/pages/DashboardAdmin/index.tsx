import { useContext, useEffect } from "react";
import { ShowCaseDashBikes } from "../../components/DashboardAnnouncement/ShowCaseDashBikes";
import { ShowCaseDashCars } from "../../components/DashboardAnnouncement/ShowCaseDashCars";
import { Header } from "../../components/Header";
import jwt_decode from "jwt-decode";
import { AdminSectionDash } from "../../components/DashboardAdmin/UserSectionDash";
import { VehicleContext } from "../../contexts/VehicleContext";
import { UserContext } from "../../contexts/UserContext";

export const DashboardAdmin = () => {
  const { getUserProfile, userProfile } = useContext(UserContext);
  const { newVehicle } = useContext(VehicleContext);

  const token = localStorage.getItem("@MotorShop:Token");

  useEffect(() => {
    if (token) {
      let decodeToken = jwt_decode<any>(token);
      getUserProfile(decodeToken.id);
    }

  }, [newVehicle]);


  const newCarList = userProfile.vehicle?.filter(
    (vehicle) => vehicle.isCar === true
  );
  const newBikeList = userProfile.vehicle?.filter(
    (vehicle) => vehicle.isCar === false
  );
  return (
    <>
      <Header />
      <AdminSectionDash />
      {newCarList ? (
        <ShowCaseDashCars cars={newCarList} />
      ) : (
        <h1>Sem Registro de Veiculos</h1>
      )}
      {newBikeList ? (
        <ShowCaseDashBikes bikes={newBikeList} />
      ) : (
        <h1>Sem Registro de Veiculos</h1>
      )}
    </>
  );
};
