import { Route, Routes } from "react-router-dom";
import { DashboardAnnouncementPage } from "../pages/DashboardAnnouncement";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProductPage } from "../pages/ProductPage";
import { DashboardAdmin } from "../pages/DashboardAdmin";
import { Register } from "../pages/Register";
import { ResetPasswordPage } from "../pages/ResetPassword";
import { ConfirmTokenPage } from "../pages/ResetPassword/ConfirmTokenPage";

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
      <Route path="/resetPassword" element={<ResetPasswordPage />} />
      <Route path="/confirmToken" element={<ConfirmTokenPage />} />
    </Routes>
  );
};
