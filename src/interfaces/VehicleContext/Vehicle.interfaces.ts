import { ICommentContextData } from "../Comment/contextComment.interfafe";
import { UserVehicleData } from "./../UserContext/UserContext.interfaces";
export interface VehicleContextData {
  createVehicle: (data: ICreateVehicleData) => void;
  profileVehicle: (id: string) => Promise<void>;
  vehicleInfo: ICreateVehicleData;
  getVehicles: () => Promise<void>;
  vehicles: ICreateVehicleData[];
  updateVehicle: (data: ICreateVehicleData, vehicleId: string) => Promise<void>;
  allVehicles: IVehicleProfileData[];
  setCarFilter: React.Dispatch<React.SetStateAction<boolean | null>>;
  carFilter: boolean | null;
  owner: IUserOwner;
  deleteVehicle: (vehicleId: string) => Promise<void>;
  newVehicle: any
}

export interface IUserOwner {
  id: string;
  name: string;
  descripiton: string;
}

export interface IOwnerData {
  owner: IUserOwner
}

export interface IUrl {
  url: string
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
  user: IUserOwner;
  Comment: ICommentContextData;
}

export interface IImg {
  image?: string;
}

export interface ICarDescription {
  description: string;
}

export interface IInfoVehicle {
  title: string;
  price: number;
  km: number;
  year: number;
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
