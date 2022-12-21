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

  owner: IUserOwner;
}

export interface IUserOwner {
  name: string;
  descripiton: string;

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
  Comment: IComment;
}

export interface IComment {
  content: string;
  createdAt: string;
  userId: string;
  vehicleId: string;
}

export interface IIComments {
  comments: IComment;
}

export interface IOwnerData {
  owner: IUserOwner;
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
