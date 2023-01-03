import { createContext } from "react";
import { ProviderData } from "../interfaces/provider.interface";
import { IResetPasswordContextData } from "../interfaces/ResetPasswordContext/resetpassword.interfaces";

export const ResetPasswordContext = createContext<IResetPasswordContextData>(
  {} as IResetPasswordContextData
);

export const ResetPasswordProvider = ({ children }: ProviderData) => {
  //Fazer a requisião de ao enviar o token recebido por email no input para ver se é true ou false
  //Se for true, ir para pagina de update senha
  //Fazer requisição de update de senha

  return (
    <ResetPasswordContext.Provider value={{}}>
      {children}
    </ResetPasswordContext.Provider>
  );
};
