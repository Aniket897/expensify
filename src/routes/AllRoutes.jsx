import { Navigate, Route, Routes } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";
import PrivateRoutes from "../components/PrivateRoutes";
import Analytics from "./Analytics";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="*" element={<Navigate to={'/onboarding'} />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
