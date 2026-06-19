import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import History from "../pages/History";
import Billing from "../pages/Billing";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/history" element={<History />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;