import { IVehicleProfileData } from "../VehicleContext/Vehicle.interfaces";

export interface UserContextData {
  getUserProfile: (userId: string) => Promise<void>;
  userProfile: UserProfileData;
}

export interface IUserData {
  user: UserProfileData
}

export interface UserProfileData {
  id: string;
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: string;
  descripiton: string;
  is_admin: string;
  vehicle: IVehicleProfileData[];
}

export interface UserVehicleData {
  id: string;
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: string;
  descripiton: string;
  is_admin: string;
  password: string;
}
