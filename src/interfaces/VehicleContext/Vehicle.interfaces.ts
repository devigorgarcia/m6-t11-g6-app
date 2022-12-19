export interface VehicleContextData {
  createVehicle: (data: ICreateVehicleData) => void;
}

export interface ICreateVehicleData {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  frontImg: string;
  gallery: string[];
}
