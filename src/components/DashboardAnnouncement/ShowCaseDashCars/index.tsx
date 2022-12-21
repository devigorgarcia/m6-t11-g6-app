import { Flex, Heading, HStack } from "@chakra-ui/react";
import { IVehicleProfileData } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

import { VehicleCardDash } from "../VehicleDashCard";

export interface ICarsData {
  user: any;
  cars: IVehicleProfileData[];
}

export const ShowCaseDashCars = ({ cars, user }: ICarsData) => {
  return (
    <Flex flexDir="column" p="1rem" mt="15" gap={"30"}>
      <Heading fontFamily={"Lexend"} fontSize="24px" fontWeight="600">
        Carros
      </Heading>
      {cars.length !== 0 ? (
        <HStack gap={"5"} overflowX="auto">
          {cars?.map((car) => {
            return <VehicleCardDash key={car.id} data={car} user={user} />;
          })}
        </HStack>
      ) : (
        <h1>Oi</h1>
      )}
    </Flex>
  );
};
