import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import {
  ICreateVehicleData,
  IUserOwner,
  IVehicleProfileData,
  VehicleContextData,
} from "../interfaces/VehicleContext/Vehicle.interfaces";
import { ModalContext } from "./ModalContext";

export const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
);

export const VehicleProvider = ({ children }: ProviderData) => {
  const { onCloseCreate, onOpenSucess, onCloseDelete, onCloseEdit } =
    useContext(ModalContext);

  const [vehicleInfo, setVehicleInfo] = useState<ICreateVehicleData>(
    {} as ICreateVehicleData
  );
  const [allVehicles, setAllvehicles] = useState<IVehicleProfileData[]>(
    [] as IVehicleProfileData[]
  );
  const [carFilter, setCarFilter] = useState<boolean | null>(null);

  const token = localStorage.getItem("@MotorShop:Token");

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [vehicles, setVehicles] = useState<ICreateVehicleData[]>(
    [] as ICreateVehicleData[]
  );

  const [owner, setOwner] = useState<IUserOwner>({} as IUserOwner);

  const createVehicle = async (data: ICreateVehicleData) => {
    await api
      .post("/vehicles", data)
      .then((resp) => {
        onCloseCreate();
        onOpenSucess();
      })
      .catch((err) => console.log(err));
  };

  const profileVehicle = async (id: string) => {
    await api
      .get(`/vehicles/${id}`)
      .then((resp) => {
        setVehicleInfo(resp.data);
        setOwner(resp.data.user);
        return resp.data;
      })
      .catch((error) => console.log(error));
  };

  const getVehicles = async () => {
    await api.get("/vehicles").then((res) => {
      setVehicles(res.data);
    });
  };

  const updateVehicle = async (data: ICreateVehicleData, vehicleId: string) => {
    await api
      .patch(`/vehicles/${vehicleId}`, data)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  const getAllVehicles = async () => {
    await api
      .get("/vehicles")
      .then((resp) => {
        setAllvehicles(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const deleteVehicle = async (vehicleId: string) => {
    console.log(vehicleId);
    await api
      .delete(`/vehicles/${vehicleId}`)
      .then((resp) => {
        console.log(resp);
        onCloseDelete();
        onCloseEdit();
      })
      .catch((err) => console.log(err));
  };

  return (
    <VehicleContext.Provider
      value={{
        createVehicle,
        getVehicles,
        vehicles,
        vehicleInfo,
        profileVehicle,
        updateVehicle,
        allVehicles,
        setCarFilter,
        carFilter,
        owner,
        deleteVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
