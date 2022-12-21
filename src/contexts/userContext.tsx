import { createContext, useState } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import {
  IUser,
  IUserContext,
} from "../interfaces/UserInterface/User.interface";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: ProviderData) => {
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const getUsers = () => {
    api.get("/users").then((resp) => setUsers(resp.data));
  };

  const getUser = (userId: string) => {
    api.get(`/users/${userId}`).then((resp) => setUser(resp.data));
  };

  return (
    <UserContext.Provider value={{ getUsers, getUser, users, user }}>
      {children}
    </UserContext.Provider>
  );
};
