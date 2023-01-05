import { Route, Routes } from "react-router-dom";
import { DashboardAnnouncementPage } from "../pages/DashboardAnnouncement";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProductPage } from "../pages/ProductPage";
import { DashboardAdmin } from "../pages/DashboardAdmin";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard/:userId"
        element={<DashboardAnnouncementPage />}
      />
      <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
};
