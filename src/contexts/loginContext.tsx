import { createContext } from "react";
import { api } from "../api";
import {
  IContextData,
  ILoginData,
} from "../interfaces/LoginContext/context.interfaces";
import { ProviderData } from "../interfaces/provider.interface";
import { toast } from "react-toastify";

export const LoginContext = createContext<IContextData>({} as IContextData);

export const LoginProvider = ({ children }: ProviderData) => {
  const login = async (data: ILoginData) => {
    try {
      const response = await api.post("/login", data);
      console.log(response);
      localStorage.setItem("@MotorShop:Token", response.data.token);
      toast.success("Login Realizado");
    } catch (error) {
      toast.error("algo não deu");
      console.log(error);
    }
  };
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};