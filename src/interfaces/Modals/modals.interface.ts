import { ICreateVehicleData } from "../VehicleContext/Vehicle.interfaces";

export interface ModalContextData {
  isOpenCreate: boolean;
  onOpenCreate: () => void;
  onCloseCreate: () => void;
  isOpenSucess: boolean;
  onOpenSucess: () => void;
  onCloseSucess: () => void;
  isOpenEdit: boolean;
  onOpenEdit: () => void;
  onCloseEdit: () => void;
  isOpenDelete: boolean;
  onOpenDelete: () => void;
  onCloseDelete: () => void;
}

export interface IEditModalProps {
  vehicleInfo: ICreateVehicleData;
}