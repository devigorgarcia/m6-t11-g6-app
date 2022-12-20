export interface VehicleContextData {
  createVehicle: (data: ICreateVehicleData) => void;
  getVehicles: () => void;
  vehicles: ICreateVehicleData[];
}

export interface ICreateVehicleData {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  frontImg: string;
  gallery: string[];
  isCar: boolean
  isActive: boolean
}
