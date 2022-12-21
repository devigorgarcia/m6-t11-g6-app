import { createContext } from "react";
import { api } from "../api";
import {
  IContextData,
  ILoginData,
} from "../interfaces/LoginContext/context.interfaces";
import { ProviderData } from "../interfaces/provider.interface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext<IContextData>({} as IContextData);

export const LoginProvider = ({ children }: ProviderData) => {
  const navigate = useNavigate();
  const login = async (data: ILoginData) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@MotorShop:Token", response.data.token);
      navigate("/dashboardAnnouncement");
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
