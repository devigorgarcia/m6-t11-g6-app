import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import { IResetPasswordContextData } from "../interfaces/ResetPasswordContext/resetpassword.interfaces";

export const ResetPasswordContext = createContext<IResetPasswordContextData>(
  {} as IResetPasswordContextData
);

export const ResetPasswordProvider = ({ children }: ProviderData) => {
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

    const verifyToken = async (token: string) => {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await api.get("confirmToken");
        console.log(response);
        localStorage.setItem("@MotorsShop:RecToken", token);
      } catch (error) {
        console.log(error);
      }
    };
  };
  //Fazer a requisião de ao enviar o token recebido por email no input para ver se é true ou false
  //Se for true, ir para pagina de update senha
  //Fazer requisição de update de senha

  return (
    <ResetPasswordContext.Provider value={{ sendEmailRequest }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};
