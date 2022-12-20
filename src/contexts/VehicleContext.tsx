import { useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import {
  ICreateVehicleData,
  VehicleContextData,
} from "../interfaces/VehicleContext/Vehicle.interfaces";
import { ModalContext } from "./ModalContext";

export const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
);

export const VehicleProvider = ({ children }: ProviderData) => {
  const { onCloseCreate, onOpenSucess } = useContext(ModalContext);
  const token = localStorage.getItem("@MotorShop:Token");

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [vehicles, setVehicles] = useState<ICreateVehicleData[]>([] as ICreateVehicleData[])

  const createVehicle = async (data: ICreateVehicleData) => {
    await api
      .post("/vehicles", data)
      .then((resp) => {
        onCloseCreate();
        onOpenSucess();
      })
      .catch((err) => console.log(err));
  };

  const getVehicles = async () =>{
    await api.get("/vehicles").then(res=>{setVehicles(res.data)})
  }

  return (
    <VehicleContext.Provider value={{ createVehicle, getVehicles, vehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};
