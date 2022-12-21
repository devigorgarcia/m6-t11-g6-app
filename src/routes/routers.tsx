import { Route, Routes } from "react-router-dom";
import { DashboardAnnouncementPage } from "../pages/DashboardAnnouncement";
import { Login } from "../pages/Login"
import {Home} from "../pages/Home"
import { ProductPage } from "../pages/ProductPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route
        path="/dashboardAnnouncement"
        element={<DashboardAnnouncementPage />}
      />
      <Route path="/productDetail" element={<ProductPage />} />

    </Routes>
  );
};
