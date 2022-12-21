import { UserVehicleData } from "./../UserContext/UserContext.interfaces";
export interface VehicleContextData {
  createVehicle: (data: ICreateVehicleData) => void;
  profileVehicle: (vehicleId: string) => Promise<void>;
  vehicleInfo: ICreateVehicleData;
  getVehicles: () => Promise<void>;
  vehicles: ICreateVehicleData[];
  updateVehicle: (data: ICreateVehicleData, vehicleId: string) => Promise<void>;
  allVehicles: ICreateVehicleData[];
  setCarFilter: React.Dispatch<React.SetStateAction<boolean | null>>;
  carFilter: boolean | null;
}

export interface ICreateVehicleData {
  id: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  frontImg: string;
  gallery: {
    id: string;
    url: string;
  }[];
  isActive: boolean;
  isCar: boolean;
}

export interface IVehicleProfileData {
  id: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  isActive: boolean;
  isCar: boolean;
  frontImg: string;
  userId?: string;
  user?: UserVehicleData;
}
