import { Flex, Heading, HStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderSlogan } from "../../components/HeaderSlogan";
import { ShowCaseBikes } from "../../components/ShowCaseBikes";
import { ShowCaseCars } from "../../components/ShowCaseCars";
import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicleProfileData } from "../../interfaces/VehicleContext/Vehicle.interfaces";
import { Leilao } from "../../components/Leilao";

export function Home() {
  const { allVehicles, carFilter } = useContext(VehicleContext);
  const [cars, setCars] = useState<IVehicleProfileData[]>([]);
  const [bikes, setBikes] = useState<IVehicleProfileData[]>([]);

  useEffect(() => {
    filterVehicles();
  }, [allVehicles]);

  const filterVehicles = () => {
    const allBikes = allVehicles.filter((vehicle) => vehicle.isCar === false);
    const allCars = allVehicles.filter((vehicle) => vehicle.isCar === true);

    setCars(allCars);
    setBikes(allBikes);
  };

  return (
    <>
      <Header />
      <HeaderSlogan />
      <Leilao/>
      {carFilter == null ? (
        <>
          <ShowCaseCars cars={cars} />
          <ShowCaseBikes bikes={bikes} />
        </>
      ) : carFilter === true ? (
        <ShowCaseCars cars={cars} />
      ) : (
        <ShowCaseBikes bikes={bikes} />
      )}
      <Footer />
    </>
  );
}
