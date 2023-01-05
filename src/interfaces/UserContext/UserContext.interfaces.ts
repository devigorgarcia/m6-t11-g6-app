import { IVehicleProfileData } from "../VehicleContext/Vehicle.interfaces";
import { IEditProfileData } from "../../components/Forms/EditProfile";

export interface UserContextData {
  getUserProfile: (userId: string) => Promise<void>;
  userProfile: UserProfileData;
  updateProfile: (data: IEditProfileData, userId: string) => Promise<void>
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
