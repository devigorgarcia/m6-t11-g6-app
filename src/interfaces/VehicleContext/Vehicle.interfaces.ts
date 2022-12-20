export interface VehicleContextData {
  createVehicle: (data: ICreateVehicleData) => void;
  profileVehicle: (vehicleId: string) => Promise<void>;
  vehicleInfo: ICreateVehicleData;
}

export interface ICreateVehicleData {
  id?: string;
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
