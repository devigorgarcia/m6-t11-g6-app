import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export const paths = {
    login: "/",
    home: "/home",
    register: "/register",
  };

export function Rotas  ()  {

    return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      );

}
