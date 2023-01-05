import { createContext, useEffect, useState } from "react";
import { api } from "../api";
import { IEditProfileData } from "../components/Forms/EditProfile";
import { ProviderData } from "../interfaces/provider.interface";
import {
  UserContextData,
  UserProfileData,
} from "../interfaces/UserContext/UserContext.interfaces";

const token = localStorage.getItem("@MotorShop:Token");

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
        setUserProfile(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const updateProfile = async (data: IEditProfileData, userId: string) => {
    try {
      const response = await api.patch(`/users/${userId}`, data, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <UserContext.Provider value={{ getUserProfile, userProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
