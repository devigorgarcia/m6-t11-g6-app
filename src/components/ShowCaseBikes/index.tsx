import { Flex, Heading, HStack } from "@chakra-ui/react";
import { IVehicleProfileData } from "../../interfaces/VehicleContext/Vehicle.interfaces";
import { VehicleCard } from "../VehicleCard";

export interface ICarsData {
  bikes: IVehicleProfileData[];
}

export const ShowCaseBikes = ({ bikes }: ICarsData) => {
  return (
    <Flex flexDir="column" p="1rem" mt="15" gap={"30"}>
      <Heading fontFamily={"Lexend"} fontSize="24px" fontWeight="600">
        Motos
      </Heading>
      {bikes.length !== 0 ? (
        <HStack gap={"5"} overflowX="auto">
          {bikes?.map((bike) => {
            return <VehicleCard key={bike.id} data={bike} />;
          })}
        </HStack>
      ) : (
        <h1>Oi</h1>
      )}
    </Flex>
  );
};
