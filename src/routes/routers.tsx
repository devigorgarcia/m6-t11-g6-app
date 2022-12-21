import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import {Home} from "../pages/Home"

export const paths = {
  login: "/",
  home: "/home",
  register: "/register",
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
};
