import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";
import { IEditProfileData } from "../components/Forms/EditProfile";
import { ProviderData } from "../interfaces/provider.interface";
import {
  UserContextData,
  UserProfileData,
} from "../interfaces/UserContext/UserContext.interfaces";
import { ModalContext } from "./ModalContext";

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);


export const UserProvider = ({ children }: ProviderData) => {
  const { onCloseEditProfile } = useContext(ModalContext);
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
    const token = localStorage.getItem("@MotorShop:Token");

    try {
      const response = await api.patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserProfile(userId)
      onCloseEditProfile()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{ getUserProfile, userProfile, updateProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
