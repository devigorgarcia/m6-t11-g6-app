import { createContext } from "react";
import { api } from "../api";
import {
  
  IRegisterContextData,
  IRegisterData,
} from "../interfaces/LoginContext/context.interfaces";
import { ProviderData } from "../interfaces/provider.interface";
import { toast } from "react-toastify";

export const RegisterContext = createContext<IRegisterContextData>({} as IRegisterContextData);

export const RegisterProvider = ({ children }: ProviderData) => {
  const registerForm = async (data: IRegisterData, onOpen: any) => {
    try {
      const response = await api.post("/users", data);
      console.log(response);

      onOpen()
    } catch (error) {
      toast.error("algo não deu");
      console.log(error);
    }
  };
  return (
    <RegisterContext.Provider value={{ registerForm }}>{children}</RegisterContext.Provider>
  );
};
