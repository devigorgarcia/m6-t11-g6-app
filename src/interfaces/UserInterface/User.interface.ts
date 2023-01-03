import { IVehicleProfileData } from "../VehicleContext/Vehicle.interfaces";

export interface IUserContext {
  getUsers: () => void;
  getUser: (userId: string) => void;
  users: IUser[];
  user: IUser;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: string;
  descripiton: string;
  is_admin: boolean;
  vehicle?: IVehicleProfileData[];
}
