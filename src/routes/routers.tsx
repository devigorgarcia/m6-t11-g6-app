import { Route, Routes } from "react-router-dom";
import { DashboardAnnouncementPage } from "../pages/DashboardAnnouncement";
import { Login } from "../pages/Login";
import { ProductPage } from "../pages/ProductPage";

export const paths = {
  login: "/",
  home: "/home",
  register: "/register",
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboardAnnouncement"
        element={<DashboardAnnouncementPage />}
      />
      <Route path="/productDetail" element={<ProductPage />} />
    </Routes>
  );
};
