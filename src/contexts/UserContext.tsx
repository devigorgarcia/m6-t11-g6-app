import { createContext, useEffect, useState } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import {
  UserContextData,
  UserProfileData,
} from "../interfaces/UserContext/UserContext.interfaces";

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: ProviderData) => {
  const [userProfile, setUserProfile] = useState<UserProfileData>(
    {} as UserProfileData
  );

  const getUserProfile = async (userId: string) => {
    await api
      .get(`/users/${userId}`)
      .then((resp) => {
        console.log(resp);
        setUserProfile(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ getUserProfile, userProfile }}>
      {children}
    </UserContext.Provider>
  );
};
