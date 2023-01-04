import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import { IResetPasswordContextData } from "../interfaces/ResetPasswordContext/resetpassword.interfaces";

export const ResetPasswordContext = createContext<IResetPasswordContextData>(
  {} as IResetPasswordContextData
);

export const ResetPasswordProvider = ({ children }: ProviderData) => {
  const navigate = useNavigate();
  const sendEmailRequest = async (email: string) => {
    try {
      const response = await api.post(`/send-email`, {
        to: email,
      });
      console.log(response);
      toast.success("Email enviado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Email inválido");
    }
  };
  const verifyToken = async (token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      await api.get("confirmToken");
      localStorage.setItem("@MotorsShop:RecToken", token);
      navigate("/newPassword");
    } catch (error) {
      console.log(error);
    }
  };

  //Fazer requisição de update de senha
  const updateNewPassword = async (newPassword: string) => {
    const token = localStorage.getItem("@MotorsShop:RecToken");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await api.patch("/resetPassword", {
        password: newPassword,
      });
      console.log(response);
      toast.success("Senha Alterada com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ResetPasswordContext.Provider
      value={{ sendEmailRequest, verifyToken, updateNewPassword }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};
